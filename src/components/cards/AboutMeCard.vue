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
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    }
  }
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
  color: #f5e6d7;
  font-weight: bold;
}

.aboutMeCard--contentContainer__description {
  font-family: "Nunito";
  font-size: 1.125rem;
  color: #f5e6d7;
  font-weight: 600;
}

.aboutMeCard--contentContainer__details {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #f5e6d7;
  font-weight: 300;
}

.aboutMeCard--date {
  margin-right: 1.5rem;
}

.aboutMeCard:hover .aboutMeCard--contentContainer {
  height: 80%;
}

</style>
