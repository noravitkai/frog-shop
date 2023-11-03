import { db } from '@/firebase'
import { ref } from 'vue'
import { collection, onSnapshot, doc, deleteDoc, addDoc, updateDoc } from 'firebase/firestore'
import { addItemData } from '@/admin'
import { showEditProductModal, closeAddProductModal } from '@/admin'

const useProducts = () => {
  const products = ref([])
  const productDataRef = collection(db, 'products')

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

  // Add a new product to the Firebase database
  const firebaseAddSingleItem = async () => {
    try {
      // Check if the images have been uploaded
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
    stockQuantity: ''
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
      stockQuantity: product.stockQuantity
    }
  }

  // Function to update an edited product in Firestore
  const firebaseUpdateSingleItem = () => {
    const productDocRef = doc(productDataRef, editedProduct.value.id)

    updateDoc(productDocRef, editedProduct.value)
      .then(() => {
        showEditProductModal.value = false
      })
      .catch((error) => {
        console.error('Error updating product: ', error)
      })
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