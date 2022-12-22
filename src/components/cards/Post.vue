<script setup>
import { defineProps, toRefs } from 'vue';

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

const { post } = toRefs(props)

</script>

<template>
  <a :href="post.url" target="_blank" class="post-wrapper">
    <img :src="post.img" class="post-image">
    <h3 class="post-title">
      {{ post.title }}
    </h3>
    <p class="post-description">
      {{ post.description }}
    </p>
  </a>
</template>


<style scoped>
.post-wrapper {
  border-radius: 8px;
  border: 1px solid var(--primary-color);
  width: 300px;
}
.post-image {
  border-radius: 8px 8px 0 0;
  width: 100%;
  height: 256px;
  background-repeat: no-repeat;
  object-position: top;
  object-fit: cover;
}
.post-title {
  width: 100%;
  font-family: var(--font-family);
  color: var(--lightbg-color);
  font-size: 1rem;
  margin: 16px 0;
  padding: 0 4px;
  text-align: center;
}
.post-description {
  width: 100%;
  font-family: var(--font-family);
  color: var(--lightbg-color);
  font-size: 0.75rem;
  margin: 8px 0;
  padding: 0 6px;
  
  overflow:hidden;
  line-height: 2rem;
  max-height: 8rem;
  -webkit-box-orient: vertical;
  display: block;
  display: -webkit-box;
  overflow: hidden !important;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
}
</style>