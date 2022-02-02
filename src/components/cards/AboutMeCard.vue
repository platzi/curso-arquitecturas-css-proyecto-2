<template>
  <div class="aboutMeCard">
    <figure class="aboutMeCard--figureContainer">
      <img :src="image" :alt="name" />
    </figure>
    <div class="aboutMeCard--contentContainer">
      <p class="aboutMeCard--contentContainer__title">{{ title }}</p>
      <p class="aboutMeCard--contentContainer__description">
        {{ description }}
      </p>
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
    const title = "Titulo";
    const description = "Esta es un descripcion";
    const date = "3.05.12";
    const position = "director";
    const image = require("@/static/images/projects/egypt.jpg");

    return {
      title,
      description,
      date,
      position,
      image,
    };
  },
};
</script>

<style scoped>
.aboutMeCard {
  min-height: 296px;
  min-width: 288px;
  border-radius: 1rem;
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  /* background: #5f7429 60%,
    #e4c75f 80%,
    #b79d36; */
}
.aboutMeCard--figureContainer {
  width: 100%;
  height: 80%;
  border-radius: 1rem 1rem 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.aboutMeCard--figureContainer img {
  width: 100%;
  border-radius: 1rem 1rem 0 0;
  object-fit: cover;
}
.aboutMeCard--contentContainer {
  background: #b79d36;
  width: 100%;
  height: 20%;
  margin: 0;
  padding: 0 1rem;
  border-radius: 0 0 1rem 1rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transition: ease-in 0.3s;
  overflow-y: hidden;
}

.aboutMeCard--contentContainer__title {
  font-family: "Nunito";
  font-size: 2rem;
  margin: 1rem 0;
}

.aboutMeCard:hover .aboutMeCard--contentContainer {
  height: 80%;
}

</style>
