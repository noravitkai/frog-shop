<template>
  <div>
    <NavBar />
  </div>
  <div class="mt-14">
    <QuestionsSection />
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
import QuestionsSection from '../components/QuestionsSection.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterComponent from '../components/FooterComponent.vue'
</script>
