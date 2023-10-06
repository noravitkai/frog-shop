<template>
  <div id="home">
    <div>
      <NavBar />
    </div>
    <div>
      <PromoSection />
    </div>
    <div>
      <ProductList />
    </div>
    <div>
      <BrandValues />
    </div>
    <div>
      <ContactSection />
    </div>
    <div>
      <FooterComponent />
    </div>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import PromoSection from '../components/PromoSection.vue'
import ProductList from '../components/ProductList.vue'
import BrandValues from '../components/BrandValues.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterComponent from '../components/FooterComponent.vue'
</script>
