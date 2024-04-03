<template>
  <div class="app-page-home">
    <app-container>
      <div class="banner">
        <img src="/images/all-1.jpg" alt="u.sharipov">
        <div class="banner-text">
          <h1>EuroHI</h1>
          <p>European experience in developing health insurance in Uzbekistan</p>
          <tag>Erasmus+</tag>
        </div>
      </div>
      <section class="for-whom">
        <h2>Who is this course for ...</h2>
        <div class="row">
          <div class="app-card-center col-6">
            <img src="/images/svg/user-graduate.svg" alt="me">
            <h3>Students</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, suscipit.</p>
          </div>
          <div class="app-card-center col-6">
            <img src="/images/svg/umbrella.svg" alt="me">
            <h3>Insurance companies</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, suscipit.</p>
          </div>
          <div class="app-card-center col-6">
            <img src="/images/svg/plane-departure.svg" alt="me">
            <h3>Travellers</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, suscipit.</p>
          </div>
          <div class="app-card-center col-6">
            <img src="/images/svg/builder.svg" alt="me">
            <h3>Workers</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, suscipit.</p>
          </div>
        </div>
      </section>
    </app-container>
  </div>
</template>
<script setup lang="ts">
import Tag from 'primevue/tag';
</script>

<style src="~/assets/stylus/pages/page-home.styl"></style>