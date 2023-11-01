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
              class="bg-shadowgreen shadow-md text-ghostwhite py-2 px-6 text-sm lg:text-base hover:bg-hovergreen transition duration-300"
              @click="editAndShowProductModal(product)"
            >
              Szerkesztés
            </button>
            <button
              class="bg-gray-600 shadow-md text-ghostwhite py-2 px-6 text-sm lg:text-base hover:bg-gray-700 transition duration-300 ml-2"
              @click="firebaseDeleteSingleItem(product.id)"
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

      <!-- Add Product Modal -->
      <div
        v-if="showAddProductModal"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div class="bg-greygreen p-6 shadow-md flex flex-col items-center">
          <h4 class="text-xl font-semibold mb-4 text-hovergreen">Termék hozzáadása</h4>
          <form @submit.prevent="firebaseAddSingleItem()" :disabled="addItemData.uploadBtnDisabled">
            <div class="w-full mb-4">
              <span>Terméknév</span>
              <input
                type="text"
                placeholder="Terméknév"
                v-model="addItemData.name"
                class="w-full p-2 bg-ghostwhite focus:ring-2 focus:ring-shadowgreen focus:ring-opacity-50 focus:outline-none"
              />
            </div>
            <div class="w-full mb-4">
              <span class="pr-1">Kép</span>
              <input type="file" label="File input" @change="uploadImage" />
            </div>
            <div class="w-full mb-4">
              <span>Termékleírás</span>
              <textarea
                placeholder="Termékleírás"
                v-model="addItemData.description"
                class="w-full p-2 bg-ghostwhite focus:ring-2 focus:ring-shadowgreen focus:ring-opacity-50 focus:outline-none"
              ></textarea>
            </div>
            <div class="w-full mb-4">
              <span>Ár</span>
              <input
                type="number"
                placeholder="Ár"
                v-model="addItemData.price"
                class="w-full p-2 bg-ghostwhite focus:ring-2 focus:ring-shadowgreen focus:ring-opacity-50 focus:outline-none"
              />
            </div>
            <div class="w-full mb-4">
              <span>Elkészítési idő</span>
              <input
                type="number"
                placeholder="Elkészítési idő"
                v-model="addItemData.preparationTime"
                class="w-full p-2 bg-ghostwhite focus:ring-2 focus:ring-shadowgreen focus:ring-opacity-50 focus:outline-none"
              />
            </div>
            <div class="w-full mb-4">
              <span>Jelenlegi mennyiség</span>
              <input
                type="number"
                placeholder="Rendelkezésre álló mennyiség"
                v-model="addItemData.stockQuantity"
                class="w-full p-2 bg-ghostwhite focus:ring-2 focus:ring-shadowgreen focus:ring-opacity-50 focus:outline-none"
              />
            </div>
            <!-- Save & Close Buttons -->
            <div class="flex justify-center">
              <button
                type="submit"
                class="bg-shadowgreen shadow-md text-ghostwhite py-2 px-6 text-sm lg:text-base hover:bg-hovergreen transition duration-300"
              >
                Mentés
              </button>
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
        v-if="showEditProductModal"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div class="bg-greygreen p-6 shadow-md flex flex-col items-center">
          <h3 class="text-xl font-semibold mb-4 text-hovergreen">Termék szerkesztése</h3>
          <form @submit.prevent="firebaseUpdateSingleItem()">
            <div class="w-full mb-4">
              <span>Terméknév</span>
              <input
                type="text"
                placeholder="Terméknév"
                v-model="editedProduct.name"
                class="w-full p-2 bg-ghostwhite focus:ring-2 focus:ring-shadowgreen focus:ring-opacity-50 focus:outline-none"
              />
            </div>
            <div class="w-full mb-4">
              <span>Termékleírás</span>
              <textarea
                placeholder="Termékleírás"
                v-model="editedProduct.description"
                class="w-full p-2 bg-ghostwhite focus:ring-2 focus:ring-shadowgreen focus:ring-opacity-50 focus:outline-none"
              ></textarea>
            </div>
            <div class="w-full mb-4">
              <span>Ár</span>
              <input
                type="number"
                placeholder="Ár"
                v-model="editedProduct.price"
                class="w-full p-2 bg-ghostwhite focus:ring-2 focus:ring-shadowgreen focus:ring-opacity-50 focus:outline-none"
              />
            </div>
            <div class="w-full mb-4">
              <span>Elkészítési idő</span>
              <input
                type="number"
                placeholder="Elkészítési idő"
                v-model="editedProduct.preparationTime"
                class="w-full p-2 bg-ghostwhite focus:ring-2 focus:ring-shadowgreen focus:ring-opacity-50 focus:outline-none"
              />
            </div>
            <div class="w-full mb-4">
              <span>Jelenlegi mennyiség</span>
              <input
                type="number"
                placeholder="Rendelkezésre álló mennyiség"
                v-model="editedProduct.stockQuantity"
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
                @click="showEditProductModal = false"
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
import {
  showAddProductModal,
  showEditProductModal,
  closeAddProductModal,
  logout,
  addItemData,
  firebaseAddSingleItem,
  products,
  uploadImage
} from '@/admin'

import useProducts from '@/useProducts'
const { firebaseDeleteSingleItem, firebaseUpdateSingleItem, editedProduct, editProduct } =
  useProducts()

const editAndShowProductModal = (product) => {
  editProduct(product)
  showEditProductModal.value = true
}
</script>
