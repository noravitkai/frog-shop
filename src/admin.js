import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/firebase'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { ref as vueref, reactive } from 'vue'
import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
import useProducts from '@/useProducts'

const { products, getProductsData } = useProducts()

// Ref to control the visibility of the "Edit Product" modal
const showEditProductModal = vueref(false)

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

// Function to log out the user
const logout = async () => {
  try {
    const auth = getAuth()
    await signOut(auth)
    const router = useRouter()
    router.push({ name: 'admin' })
  } catch (error) {
    console.error(error)
  }
}

// Object to hold the data for a new product and flag to control the state of button
let addItemData = reactive({
  name: '',
  description: '',
  price: 0,
  preparationTime: 0,
  stockQuantity: 0,
  imageURL: '',
  uploadBtnDisabled: true
})

// Add dynamic data to Firebase Firestore
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
        imageURL: addItemData.imageURL
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

// Initialize Firebase Storage
const storage = getStorage()

// Upload an image to Firebase Storage
const uploadImage = async (event) => {
  console.log('uploadImage function is called')
  let file = event.target.files[0]
  console.log('Selected File:', file)
  // Create the file metadata
  /** @type {any} */
  const metadata = {
    contentType: 'image/jpg'
  }

  // Create a reference to the storage location for the image
  const storageRef = ref(storage, 'product-images/' + file.name)
  // Create an upload task with uploadBytesResumable to upload the selected image to Storage
  console.log('upload', storageRef)
  const uploadTask = uploadBytesResumable(storageRef, file, metadata)
  //debugger

  // Listen for state changes, errors, and completion of the upload
  uploadTask.on(
    'state_changed',
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      console.log('Upload is ' + progress + '% done')
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused')
          break
        case 'running':
          console.log('Upload is running')
          break
      }
    },
    (error) => {
      switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break
        case 'storage/canceled':
          // User canceled the upload
          break
        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break
      }
    },
    () => {
      // Get the download URL of the uploaded image upon a succesfull upload
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL)

        addItemData.imageURL = downloadURL
        // Enable the "Add Product" button
        addItemData.uploadBtnDisabled = false
      })
    }
  )
}

export {
  showAddProductModal,
  showEditProductModal,
  openAddProductModal,
  closeAddProductModal,
  logout,
  addItemData,
  uploadImage,
  firebaseAddSingleItem,
  products
}

getProductsData()
