import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/firebase'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { ref as vueref, reactive } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import useProducts from '@/useProducts'

const { products, getProductsData } = useProducts()

// Initialize Firebase Storage
const storage = getStorage()

// Ref to control the visibility of the "Add Product" modal
const showAddProductModal = vueref(false)

// Function to open the "Add Product" modal
const openAddProductModal = () => {
  showAddProductModal.value = true
}

// Function to close the "Add Product" modal
const closeAddProductModal = () => {
  showAddProductModal.value = false
}

// Ref to control the visibility of the "Edit Product" modal
const showEditProductModal = vueref(false)

// Function to check user authentication
const checkUserAuthentication = () => {
  return new Promise((resolve, reject) => {
    const authInstance = getAuth()
    const unsubscribe = onAuthStateChanged(authInstance, (user) => {
      if (user) {
        resolve() // User is authenticated
      } else {
        reject(new Error('User is not authenticated.'))
      }
      unsubscribe() // Unsubscribe to avoid memory leaks
    })
  })
}

// Object to hold the data for a new product and flag to control the state of button
let addItemData = reactive({
  name: '',
  description: '',
  price: 0,
  preparationTime: 0,
  stockQuantity: 0,
  imageURL: '',
  imageGallery: [],
  uploadBtnDisabled: true
})

// Add dynamic data to Firestore
const firebaseAddSingleItem = async () => {
  try {
    // Check if the image has been uploaded
    if (addItemData.imageURL) {
      // Perform Firebase data submission
      await addDoc(collection(db, 'products'), {
        name: addItemData.name,
        description: addItemData.description,
        price: addItemData.price,
        preparationTime: addItemData.preparationTime,
        stockQuantity: addItemData.stockQuantity,
        imageURL: addItemData.imageURL,
        imageGallery: addItemData.imageGallery
      })
      // After a successful submission, close the modal
      closeAddProductModal()
    } else {
      console.error('Image upload is not complete.')
    }
  } catch (error) {
    console.error(error)
  }
}

// Function to upload images when adding a new product
const uploadImage = async (field, event) => {
  console.log('uploadImage function is called')
  const files = event.target.files
  try {
    // Check if the user is authenticated
    await checkUserAuthentication()
    // Proceed with image upload upon authentication
    if (!files || files.length === 0) {
      console.error('No files selected.')
      return
    }
    // Create an array to store the promises for each upload task
    const uploadPromises = []
    // Create a reference to the storage location for each selected image
    for (const file of files) {
      const metadata = {
        contentType: 'image/jpg'
      }
      // Create a reference to the Storage location for the image in the 'product-images' folder
      const storageRef = ref(storage, 'product-images/' + file.name)
      // Create an upload task with uploadBytesResumable to upload the selected image to Storage
      const uploadTask = uploadBytesResumable(storageRef, file, metadata)
      // Create a promise for each upload task
      const uploadPromise = new Promise((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          () => {},
          (error) => {
            reject(error)
          },
          () => {
            // Get the download URL of the uploaded image upon a successful upload
            getDownloadURL(uploadTask.snapshot.ref)
              .then((downloadURL) => {
                console.log('File available at', downloadURL)
                // Check the field and update the corresponding data of the added product
                if (field === 'imageURL') {
                  addItemData.imageURL = downloadURL // Update imageURL of the added product
                  // Enable the "Add Product" button
                  addItemData.uploadBtnDisabled = false
                } else if (field === 'imageGallery') {
                  addItemData.imageGallery.push(downloadURL) // Add to the imageGallery array of the added product
                }
                resolve(downloadURL)
              })
              .catch((error) => {
                reject(error)
              })
          }
        )
      })
      uploadPromises.push(uploadPromise)
    }
    // Wait for all upload tasks to complete
    Promise.all(uploadPromises)
      .then(() => {
        console.log('All uploads are completed')
      })
      .catch((error) => {
        console.error('Error during file uploads:', error)
      })
  } catch (error) {
    console.error('Authentication error:', error.message)
  }
}

// Function to replace images when editing a product
const updateImageOnEdit = async (product, field, event, updateImage) => {
  console.log('updateImageOnEdit function is called')
  const files = event.target.files
  try {
    // Check if the user is authenticated
    await checkUserAuthentication()
    // Proceed with image replacement upon authentication
    if (!files || files.length === 0) {
      console.error('No files selected.')
      return
    }
    // Create an array to store the promises for each upload task
    const uploadPromises = []
    const newImageGallery = [] // Create a new array for the updated imageGallery
    // Create a reference to the storage location for each selected image
    for (const file of files) {
      const metadata = {
        contentType: 'image/jpg'
      }
      // Create a reference to the Storage location for the image in the 'product-images' folder
      const storageRef = ref(storage, 'product-images/' + file.name)
      // Create an upload task with uploadBytesResumable to upload the selected image to Storage
      const uploadTask = uploadBytesResumable(storageRef, file, metadata)
      // Create a promise for each upload task
      const uploadPromise = new Promise((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          () => {},
          (error) => {
            reject(error)
          },
          () => {
            // Get the download URLs of the uploaded images upon a successful upload
            getDownloadURL(uploadTask.snapshot.ref)
              .then((downloadURL) => {
                console.log('File available at', downloadURL)
                // Check the field and update the corresponding data of the edited product
                if (field === 'imageURL') {
                  if (updateImage) {
                    console.log('Updating imageURL:', downloadURL)
                    product.imageURL = downloadURL // Update imageURL of the edited product
                  }
                } else if (field === 'imageGallery') {
                  if (updateImage) {
                    console.log('Adding to imageGallery:', downloadURL)
                    newImageGallery.push(downloadURL) // Add the new download URL to the updated array
                  }
                }
                resolve(downloadURL)
              })
              .catch((error) => {
                reject(error)
              })
          }
        )
      })
      uploadPromises.push(uploadPromise)
    }
    // Wait for all upload tasks to complete
    await Promise.all(uploadPromises)

    // Replace the existing imageGallery with the newImageGallery
    if (field === 'imageGallery' && updateImage) {
      product.imageGallery = newImageGallery
    }

    console.log('All uploads are completed')
  } catch (error) {
    console.error('Authentication error:', error.message)
  }
}

export {
  showAddProductModal,
  showEditProductModal,
  openAddProductModal,
  closeAddProductModal,
  addItemData,
  uploadImage,
  updateImageOnEdit,
  firebaseAddSingleItem,
  products
}

getProductsData()
