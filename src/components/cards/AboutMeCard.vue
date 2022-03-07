<template>
  <div class="aboutMeCard">
    <div class="aboutMeCard--descriptionContainer">
      <p class="aboutMeCard--title">{{ title }}</p>
      <p class="aboutMeCard--date">{{ date }}</p>
    </div>
    <figure class="aboutMeCard--figureContainer">
      <img :src="image" :alt="title" />
    </figure>
    <div class="aboutMeCard--contentContainer">
      <p class="aboutMeCard--position">{{ position }}</p>
      <p class="aboutMeCard--contentContainer__description">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.aboutMeCard {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.aboutMeCard--descriptionContainer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.aboutMeCard--title {
  text-align: left;
  width: 180px;
  font-family: var(--font-family);
  color: var(--primary-color);
  font-weight: 500;
  font-size: 0.75rem;
  margin: 0;
}

.aboutMeCard--date {
  text-align: right;
  color: var(--primary-color);
  font-family: var(--font-family);
  font-weight: 300;
  font-size: 0.625rem;
  margin: 0;
}

.aboutMeCard--figureContainer {
  width: 100%;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.75rem;
}

.aboutMeCard--figureContainer img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.aboutMeCard--contentContainer {
  width: 100%;
}

.aboutMeCard--contentContainer__description {
  font-family: var(--font-family);
  color: var(--primary-color);
  font-size: 0.75rem;
  font-weight: 400;
  margin-bottom: 0.25rem;
}

.aboutMeCard--position {
  color: var(--primary-color);
  font-family: var(--font-family);
  font-weight: 300;
  font-size: 0.625rem;
}

</style>
