<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-in-out duration-500"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in-out duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-shadowgreen bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div class="flex h-full flex-col overflow-y-scroll bg-ghostwhite shadow-xl">
                  <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div class="flex items-start justify-between pt-16">
                      <DialogTitle class="text-lg font-medium text-hovergreen">Kosár</DialogTitle>
                      <div class="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          class="relative -m-2 p-2 text-shadowgreen hover:text-hovergreen"
                          @click="open = false"
                        >
                          <span class="absolute -inset-0.5" />
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <!-- Cart Items -->
                    <div class="mt-8">
                      <div class="flow-root">
                        <ul role="list" class="-my-6 divide-y divide-hovergreen">
                          <li v-for="product in cart" :key="product.id" class="flex py-6">
                            <div
                              class="h-24 w-24 flex-shrink-0 overflow-hidden border border-hovergreen"
                            >
                              <img
                                :src="product.imageURL"
                                :alt="`Image of ${product.name}`"
                                class="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div class="ml-4 flex flex-1 flex-col">
                              <div>
                                <div
                                  class="flex justify between text-base font-medium text-hovergreen"
                                >
                                  <h3>
                                    <a :href="product.href">{{ product.name }}</a>
                                  </h3>
                                  <p class="ml-4">{{ product.price * product.quantity }} Ft</p>

                                  <p class="ml-4">{{ product.quantity }} db</p>
                                </div>
                              </div>
                              <!-- Remove Item -->
                              <div class="flex flex-1 items-end justify-between text-sm">
                                <div class="flex">
                                  <button
                                    type="button"
                                    class="font-medium text-shadowgreen hover:text-hovergreen"
                                    @click="removeFromCart(product)"
                                  >
                                    Törlés
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- Total Amount -->
                  <div class="border-t border-hovergreen px-4 py-6 sm:px-6">
                    <div class="flex justify-between text-base font-medium text-hovergreen">
                      <p>Összesen</p>
                      <p>{{ calculateTotal() }} Ft</p>
                    </div>
                    <!-- Shipping Cost Message -->
                    <p class="mt-0.5 text-sm text-hovergreen">
                      A szállítási költség a fizetéskor lesz számolva.
                    </p>
                    <!-- Proceed to Checkout -->
                    <div class="mt-6">
                      <router-link
                        to="/checkout"
                        class="items-center justify-center mt-10 flex bg-shadowgreen shadow-md text-ghostwhite py-2 px-6 text-sm lg:text-base hover:bg-hovergreen transition duration-300"
                        >Tovább</router-link
                      >
                    </div>
                    <!-- Continue Shopping -->
                    <div class="mt-6 flex justify-center text-center text-sm text-shadowgreen">
                      <p>
                        <button
                          type="button"
                          class="font-medium text-hovergreen"
                          @click="open = false"
                        >
                          Vásárlás folytatása
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { cart } from '../cart.js'
import { removeFromCart } from '../cart.js'
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const calculateTotal = () => {
  // Calculate and return the total price
  return cart.value.reduce((total, item) => {
    return total + parseFloat(item.price) * item.quantity
  }, 0)
}

const open = ref(true) // Create a reactive reference to control the dialog's open state
</script>
