<template>
  <div>
    <NavBar />
  </div>
  <div class="mt-14">
    <AboutHeader />
  </div>
  <div>
    <BrandMission />
  </div>
  <div>
    <TimelineSection />
  </div>
  <div>
    <FooterComponent />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import AboutHeader from '../components/AboutHeader.vue'
import BrandMission from '../components/BrandMission.vue'
import TimelineSection from '../components/TimelineSection.vue'
import FooterComponent from '../components/FooterComponent.vue'
</script>
