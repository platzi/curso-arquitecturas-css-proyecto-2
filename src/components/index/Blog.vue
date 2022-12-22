<script setup>
import Post from '../cards/Post.vue'

const posts = [
  {
    title: 'Mejora tu portafolio con un cursor personalizado ',
    img: require("@/static/images/posts/image1.jpeg"),
    description: 'Usando Vuejs, y un solo componente, haremos que nuestro portafolio luzca increíble y obtenga más valor para los reclutadores, como lo haremos, pues con un cursor personalizado y sin el uso de ninguna librería externa, por JS.',
    url: 'https://codigoencasa.com/mejora-tu-portafolio-con-un-cursor-personalizado/'
  },
  {
    title: 'Cómo obtener íconos para tu proyecto Vue como un Profesional',
    img: require("@/static/images/posts/image2.jpeg"),
    description: 'Un ícono que nos promete no tener un fondo, pero cuando lo utilizamos nos damos cuenta de que tenemos la cuadrícula alrededor 🤬, he conocido el sufrimiento que se tiene al momento de descargar imágenes para íconos y que estos se vean distintos por diversas razones: por sus colores, tamaños e incluso porque los artes son distintos.',
    url: 'https://codigoencasa.com/como-obtener-iconos-para-tu-proyecto-vue-como-un-profesional/'
  },
]

</script>

<template>
  <section class="wrapper">
    <h2 class="blog-title">
      Visit my posts
    </h2>
    <div class="posts-container">
      <Post
        v-for="(post, i) in posts"
        :key="i"
        :post="post" />
    </div>
  </section>
</template>

<style scoped>
  .wrapper {
    display: flex;
    justify-content: flex-send;
    min-height: 100vh;
    flex-direction: column;
    align-items: flex-end;
    margin: 48px;
  }
  .posts-container {
    margin: 32px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 48px;
    width: 80%;
  }
  .blog-title {
    font-family: var(--font-family);
    color: var(--primary-color);
    font-size: 4.5rem;
    font-weight: 500;
    margin-top: 3rem;
    width: 80%;
    text-align: right;
    padding-right: 1rem;
  }
  .posts-container {
    display: flex;
    flex-direction: column;
  }
</style>