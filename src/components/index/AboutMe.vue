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
        <about-me-card
          v-for="(project, index) in personalProjects"
          :key="index"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :position="project.position"
          :date="project.date"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AboutMeCard from "../cards/AboutMeCard.vue";
export default {
  components: {
    AboutMeCard,
  },
  setup() {
    const personalProjects = [
      {
        title: "2nd place in Cairo Hult Prize",
        description:
          "I was responsible for creating a business model canva based on the bottom of the Pyramid Strategy",
        date: "03/17/2018",
        position: "Project Director",
        image: require("@/static/images/projects/egypt.jpg"),
      },
      {
        title: "Water filter Research",
        description:
          "I was responsible to design a low-cost water filter for the affected Manabi-Ecuador people after the eathquake",
        date: "05/02/2016",
        position: "Researcher",
        image: require("@/static/images/projects/waterFilter.jpg"),
      },
      {
        title: "First Startup - Edtech",
        description:
          "I was responsible of the dev team for develop Educasigma software until it was bought",
        date: "01/10/2019-03/15/2020",
        position: "CEO",
        image: require("@/static/images/projects/educasigma.jpg"),
      },
    ];

    return {
      personalProjects,
    };
  },
};
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
