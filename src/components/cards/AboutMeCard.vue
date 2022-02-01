<template>
  <div class="aboutMeCard">
    <figure class="aboutMeCard--figureContainer">
      <img :src="image" :alt="name">
    </figure>
    <div class="aboutMeCard--contentContainer">
      <p class="aboutMeCard--contentContainer__title">{{ title }}</p>
      <p class="aboutMeCard--contentContainer__description">{{ description }}</p>
      <div class="aboutMeCard--contentContainer__details">
        <p class="aboutMeCard--date">{{ date }}</p>
        <p class="aboutMeCard--position">{{ position }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const title = 'Titulo'
    const description = "Esta es un descripcion"
    const date = "3.05.12"
    const position = 'director'
    const image = require('@/static/images/projects/egypt.jpg')

    return {
      title,
      description,
      date,
      position,
      image
    }
  }
}
</script>

<style scoped>
.aboutMeCard {
  width: 100%;
  height: 256px;
  border-radius: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background: #e4c75f;
  /* background: #5f7429 60%,
    #e4c75f 80%,
    #b79d36; */
}
.aboutMeCard--figureContainer  {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
  border-radius: 1rem 0 0 1rem;
  margin: 0;
}
.aboutMeCard--figureContainer img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0;
  border-radius: 1rem 0 0 1rem;
}
.aboutMeCard--contentContainer {
  width: 60%;
  height: 100%;
  padding: 0.5rem;
  font-family: "Nunito";
}
.aboutMeCard--contentContainer__title {
  font-size: 1.5rem;
  font-weight: bold;
}
.aboutMeCard--contentContainer__description {
  font-size: 1rem;
}
.aboutMeCard--contentContainer__details {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}
.aboutMeCard--date,
.aboutMeCard--position {
  width: 40%;
}
</style>