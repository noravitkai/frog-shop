<template>
  <div class="bg-ghostwhite">
    <div
      class="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 lg:py-12 flex flex-col justify-center items-center"
    >
      <h2
        class="text-2xl lg:text-4xl text-center font-bold tracking-tight text-hovergreen pb-3 sm:pb-4 lg:pb-6 relative"
      >
        Vezérlőpult

        <!-- Line Separator -->

        <span
          class="block w-16 mx-auto h-1 bg-hovergreen absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-1 sm:mb-2"
        ></span>
      </h2>

      <!-- Product Grid -->

      <div class="mt-14 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <!-- Loop through products -->

        <div v-for="product in products" :key="product.id" class="group relative">
          <!-- Product Image -->

          <div
            class="aspect-w-1 aspect-h-1 w-full bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 shadow-md"
          >
            <img
              :src="product.imageURL"
              :alt="product.imageAlt"
              class="object-cover object-center w-full h-full"
            />
          </div>

          <div class="mt-4 flex justify-between">
            <!-- Product Name -->

            <div>
              <h3 class="text-sm text-shadowgreen">{{ product.name }}</h3>
            </div>

            <!-- Product Price -->

            <p class="text-sm font-medium text-hovergreen">{{ product.price }}</p>
          </div>

          <!-- Edit and Delete Buttons -->

          <div class="mt-2 flex justify-center">
            <button
              @click="editProduct(product)"
              class="bg-shadowgreen shadow-md text-ghostwhite py-2 px-6 text-sm lg:text-base hover:bg-hovergreen transition duration-300"
            >
              Szerkesztés
            </button>

            <button
              @click="deleteProduct(product.id)"
              class="bg-gray-600 shadow-md text-ghostwhite py-2 px-6 text-sm lg:text-base hover:bg-gray-700 transition duration-300 ml-2"
            >
              Törlés
            </button>
          </div>
        </div>
      </div>

      <!-- Add and Logout Buttons -->

      <div class="flex flex-row mt-14 gap-2">
        <button
          @click="showAddProductModal = true"
          class="bg-shadowgreen shadow-md text-ghostwhite py-2 px-6 text-sm lg:text-base hover:bg-hovergreen transition duration-300"
        >
          Hozzáadás
        </button>

        <button
          @click="logout"
          class="bg-gray-600 shadow-md text-ghostwhite py-2 px-6 text-sm lg:text-base hover:bg-gray-700 transition duration-300"
        >
          Kijelentkezés
        </button>
      </div>

      <!-- "Add Product" Modal -->

      <div
        v-if="showAddProductModal"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div class="bg-greygreen p-6 shadow-md flex flex-col items-center">
          <h4 class="text-xl font-semibold mb-4 text-hovergreen">Termék hozzáadása</h4>

          <form @submit.prevent="addProductToFirestore">
            <div class="w-full mb-4">
              <span>Terméknév</span>

              <input
                v-model="newProduct.name"
                type="text"
                placeholder="Terméknév"
                class="w-full p-2 bg-ghostwhite focus:ring-2 focus:ring-shadowgreen focus:ring-opacity-50 focus:outline-none"
              />
            </div>

            <div class="w-full mb-4">
              <span>Termékleírás</span>

              <textarea
                v-model="newProduct.description"
                placeholder="Termékleírás"
                class="w-full p-2 bg-ghostwhite focus:ring-2 focus:ring-shadowgreen focus:ring-opacity-50 focus:outline-none"
              ></textarea>
            </div>

            <div class="w-full mb-4">
              <span>Ár</span>

              <input
                v-model.number="newProduct.price"
                type="number"
                placeholder="Ár"
                class="w-full p-2 bg-ghostwhite focus:ring-2 focus:ring-shadowgreen focus:ring-opacity-50 focus:outline-none"
              />
            </div>

            <div class="w-full mb-4">
              <span>Elkészítési idő</span>

              <input
                v-model.number="newProduct.preparationTime"
                type="number"
                placeholder="Elkészítési idő"
                class="w-full p-2 bg-ghostwhite focus:ring-2 focus:ring-shadowgreen focus:ring-opacity-50 focus:outline-none"
              />
            </div>

            <div class="w-full mb-4">
              <span>Jelenlegi mennyiség</span>

              <input
                v-model.number="newProduct.stockQuantity"
                type="number"
                placeholder="Rendelkezésre álló mennyiség"
                class="w-full p-2 bg-ghostwhite focus:ring-2 focus:ring-shadowgreen focus:ring-opacity-50 focus:outline-none"
              />
            </div>

            <!-- Save & Close Buttons -->

            <div class="flex justify-center">
              <!-- Save Button -->

              <button
                type="submit"
                class="bg-shadowgreen shadow-md text-ghostwhite py-2 px-6 text-sm lg:text-base hover:bg-hovergreen transition duration-300"
              >
                Mentés
              </button>

              <!-- Close Button -->

              <button
                @click="closeAddProductModal"
                class="bg-gray-600 shadow-md text-ghostwhite py-2 px-6 text-sm lg:text-base hover:bg-gray-700 transition duration-300 ml-2"
              >
                Vissza
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- "Edit Product" Modal -->

      <div
        v-if="showEditModal"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div class="bg-greygreen p-6 shadow-md flex flex-col items-center">
          <h3 class="text-xl font-semibold mb-4 text-hovergreen">Termék szerkesztése</h3>

          <form @submit.prevent="updateProduct">
            <div class="w-full mb-4">
              <span>Terméknév</span>

              <input
                v-model="editedProduct.name"
                type="text"
                placeholder="Terméknév"
                class="w-full p-2 bg-ghostwhite focus:ring-2 focus:ring-shadowgreen focus:ring-opacity-50 focus:outline-none"
              />
            </div>

            <div class="w-full mb-4">
              <span>Termékleírás</span>

              <textarea
                v-model="editedProduct.description"
                placeholder="Termékleírás"
                class="w-full p-2 bg-ghostwhite focus:ring-2 focus:ring-shadowgreen focus:ring-opacity-50 focus:outline-none"
              ></textarea>
            </div>

            <div class="w-full mb-4">
              <span>Ár</span>

              <input
                v-model.number="editedProduct.price"
                type="number"
                placeholder="Ár"
                class="w-full p-2 bg-ghostwhite focus:ring-2 focus:ring-shadowgreen focus:ring-opacity-50 focus:outline-none"
              />
            </div>

            <div class="w-full mb-4">
              <span>Elkészítési idő</span>

              <input
                v-model.number="editedProduct.preparationTime"
                type="number"
                placeholder="Elkészítési idő"
                class="w-full p-2 bg-ghostwhite focus:ring-2 focus:ring-shadowgreen focus:ring-opacity-50 focus:outline-none"
              />
            </div>

            <div class="w-full mb-4">
              <span>Jelenlegi mennyiség</span>

              <input
                v-model.number="editedProduct.stockQuantity"
                type="number"
                placeholder="Rendelkezésre álló mennyiség"
                class="w-full p-2 bg-ghostwhite focus:ring-2 focus:ring-shadowgreen focus:ring-opacity-50 focus:outline-none"
              />
            </div>

            <!-- Save & Close Buttons -->

            <div class="flex justify-center">
              <!-- Save Button -->

              <button
                type="submit"
                class="bg-shadowgreen shadow-md text-ghostwhite py-2 px-6 text-sm lg:text-base hover:bg-hovergreen transition duration-300"
              >
                Mentés
              </button>

              <!-- Close Button -->

              <button
                @click="showEditModal = false"
                class="bg-gray-600 shadow-md text-ghostwhite py-2 px-6 text-sm lg:text-base hover:bg-gray-700 transition duration-300 ml-2"
              >
                Vissza
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { collection, onSnapshot, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'

import { db } from '@/firebase'

import { ref } from 'vue'

import { getAuth, signOut } from 'firebase/auth'

import { useRouter } from 'vue-router'

const router = useRouter()

// Reactive variables

const showAddProductModal = ref(false)

const showEditModal = ref(false)

const newProduct = ref({
  name: '',

  description: '',

  price: 0,

  preparationTime: 0,

  stockQuantity: 0
})

const editedProduct = ref({})

const products = ref([])

// Reference to the Firestore 'products' collection

const productDataRef = collection(db, 'products')

// Fetch and update the product list when data changes in Firestore

onSnapshot(productDataRef, (snapshot) => {
  products.value = snapshot.docs.map((doc) => {
    return {
      id: doc.id,

      name: doc.data().name,

      description: doc.data().description,

      price: doc.data().price,

      preparationTime: doc.data().preparationTime,

      stockQuantity: doc.data().stockQuantity,

      imageURL: doc.data().imageURL,

      imageAlt: `Image of ${doc.data().name}`
    }
  })
})

// Function to add a product to Firestore

const addProductToFirestore = () => {
  addDoc(productDataRef, newProduct.value)
    .then(() => {
      showAddProductModal.value = false

      newProduct.value = {
        name: '',

        description: '',

        price: 0,

        preparationTime: 0,

        stockQuantity: 0
      }
    })

    .catch((error) => {
      console.error('Error adding product: ', error)
    })
}

// Function to initiate product editing

const editProduct = (product) => {
  showEditModal.value = true

  editedProduct.value = Object.assign({}, product)
}

// Function to update an edited product in Firestore

const updateProduct = () => {
  const productDocRef = doc(productDataRef, editedProduct.value.id)

  updateDoc(productDocRef, editedProduct.value)
    .then(() => {
      showEditModal.value = false
    })

    .catch((error) => {
      console.error('Error updating product: ', error)
    })
}

// Function to delete a product from Firestore

const deleteProduct = (productId) => {
  const productDocRef = doc(productDataRef, productId)

  deleteDoc(productDocRef)
    .then(() => {})

    .catch((error) => {
      console.error('Error deleting product: ', error)
    })
}

// Function to close the "Add Product" modal

const closeAddProductModal = () => {
  showAddProductModal.value = false

  newProduct.value = {
    name: '',

    description: '',

    price: 0,

    preparationTime: 0,

    stockQuantity: 0
  }
}

// Function to log out the user and redirect to the 'admin' route

const logout = async () => {
  try {
    const auth = getAuth()

    // Sign out the user using Firebase Authentication

    await signOut(auth)

    // Redirect to the 'admin' route upon successful logout

    router.push({ name: 'admin' })
  } catch (error) {
    console.error(error)
  }
}
</script>
