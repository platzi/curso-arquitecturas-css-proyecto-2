<template>
  <div class="aboutMeSection">
    <div class="aboutMeSection--container">
      <div class="aboutMeSection--container__content">
        <h2>About Me</h2>
        <p>
          I have participated around the world for social-profit projects in
          university contests and I had been part of multidisciplinary groups.
        </p>
        <br />
        <p>
          Thanks those experiences I love looking for better ways to improve
          myself and help people to find their hiden potential.
        </p>
      </div>
      <div class="aboutMeSection--container__cards">
        <about-me-card />
        <about-me-card />
        <about-me-card />
        <about-me-card />
      </div>
    </div>
  </div>
</template>

<script>
import AboutMeCard from '../cards/AboutMeCard.vue'
export default {
  components: {
    AboutMeCard
  }
}
</script>

<style scoped>
.aboutMeSection--container {
  width: 75%;
}
.aboutMeSection--container h2,
.aboutMeSection--container p {
  font-family: "Nunito";
}
.aboutMeSection--container h2 {
  font-size: 6rem;
}
.aboutMeSection--container p {
  font-size: 1.75rem;
  color: #a2a59f;
}

.aboutMeSection--container__cards {
  width: 100%;
  margin: 1rem 0;
  padding: 2rem 0;
  display: flex;
  overflow-x: scroll;
}

@media only screen and (max-width: 1024px) {
  .aboutMeSection--container h2 {
    font-size: 4rem;
  }
  .aboutMeSection--container p {
    font-size: 1.5rem;
  }
}
@media only screen and (max-width: 540px) {
  .aboutMeSection--container h2 {
    font-size: 3rem;
  }
  .aboutMeSection--container p {
    font-size: 1rem;
  }
}
@media only screen and (max-width: 375px) {
  .aboutMeSection--container h2 {
    font-size: 2rem;
  }
  .aboutMeSection--container p {
    font-size: 0.75rem;
  }
}
</style>
