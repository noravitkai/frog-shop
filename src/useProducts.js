import { db } from '@/firebase'
import { ref } from 'vue'
import { collection, onSnapshot, doc, deleteDoc, addDoc, getDoc, setDoc } from 'firebase/firestore'
import { addItemData } from '@/admin'
import { showEditProductModal, closeAddProductModal } from '@/admin'

const useProducts = () => {
  // Create a ref for products data
  const products = ref([])
  const productDataRef = collection(db, 'products')

  // Create a ref for adding a new product
  const AddItemData = ref('')

  // Retrieve product data from Firebase in real-time
  const getProductsData = () => {
    onSnapshot(productDataRef, (snapshot) => {
      products.value = snapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id
        }
      })
    })
  }

  // Function to add a new product to the database
  const firebaseAddSingleItem = async () => {
    try {
      // Check if the image has been uploaded
      if (
        addItemData.imageURL &&
        addItemData.imageGallery.every((galleryItem) => galleryItem !== '')
      ) {
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
        console.error('Images upload is not complete.')
      }
    } catch (error) {
      console.error(error)
    }
  }

  // Define editedProduct as a reactive ref
  const editedProduct = ref({
    name: '',
    description: '',
    price: '',
    preparationTime: '',
    stockQuantity: '',
    imageURL: '',
    imageGallery: []
  })

  // Function to initiate product editing
  const editProduct = (product) => {
    console.log('Editing product:', product)
    editedProduct.value = {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      preparationTime: product.preparationTime,
      stockQuantity: product.stockQuantity,
      imageURL: product.imageURL,
      imageGallery: product.imageGallery
    }
  }

  // Function to update a product in the database
  const firebaseUpdateSingleItem = async () => {
    try {
      const productDocRef = doc(db, 'products', editedProduct.value.id)
      // Get the current document data
      const docSnapshot = await getDoc(productDocRef)
      const currentData = docSnapshot.data()
      console.log('Current data:', currentData)
      // Create an object with the updated data
      const updatedData = {
        name: editedProduct.value.name,
        description: editedProduct.value.description,
        price: parseFloat(editedProduct.value.price),
        preparationTime: parseInt(editedProduct.value.preparationTime),
        stockQuantity: parseInt(editedProduct.value.stockQuantity),
        imageURL: editedProduct.value.imageURL,
        imageGallery: editedProduct.value.imageGallery
      }
      console.log('Updated data:', updatedData)
      // Merge the updated data with the current data
      const mergedData = { ...currentData, ...updatedData }
      console.log('Merged data:', mergedData)
      // Update the document with the merged data
      await setDoc(productDocRef, mergedData)
      console.log('Document updated successfully.')
      showEditProductModal.value = false
    } catch (error) {
      console.error('Error updating product:', error)
    }
  }

  // Delete a product from the Firebase database
  const firebaseDeleteSingleItem = async (id) => {
    await deleteDoc(doc(db, 'products', id))
  }

  return {
    products,
    AddItemData,
    getProductsData,
    editProduct,
    editedProduct,
    firebaseDeleteSingleItem,
    firebaseAddSingleItem,
    firebaseUpdateSingleItem
  }
}

export default useProducts
