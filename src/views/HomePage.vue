<template>
  <div>
    <NavBar />
  </div>
  <div class="mt-14">
    <PromoSection />
  </div>
  <div>
    <ProductList />
  </div>
  <div>
    <BrandValues />
  </div>
  <div>
    <CTASection />
  </div>
  <div>
    <ContactSection />
  </div>
  <div>
    <FooterComponent />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import PromoSection from '../components/PromoSection.vue'
import ProductList from '../components/ProductList.vue'
import BrandValues from '../components/BrandValues.vue'
import CTASection from '../components/CTASection.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterComponent from '../components/FooterComponent.vue'
</script>
