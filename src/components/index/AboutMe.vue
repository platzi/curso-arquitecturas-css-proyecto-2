<template>
  <div class="aboutMeSection">
    <div class="aboutMeSection--container">
      <div class="aboutMeSection--container__content">
        <h2>About Me</h2>
        <p>
          I have participated around the world for social-profit projects in
          university contests and I had been part of multidisciplinary groups.
        </p>
      </div>
      <div class="aboutMeSection--container__card1">
        <div class="card1">
          <div>
            <about-me-card
              :title="personalProjects[0].title"
              :description="personalProjects[0].description"
              :image="personalProjects[0].image"
              :position="personalProjects[0].position"
              :date="personalProjects[0].date"
            />
          </div>
        </div>
      </div>
      <div class="aboutMeSection--container__card2">
        <div class="card2">
          <div>
            <about-me-card
              :title="personalProjects[1].title"
              :description="personalProjects[1].description"
              :image="personalProjects[1].image"
              :position="personalProjects[1].position"
              :date="personalProjects[1].date"
            />
          </div>
        </div>
      </div>
      <div class="aboutMeSection--container__description">
        <p>
          Thanks those experiences I love looking for better ways to improve
          myself and help people to find their hiden potential.
        </p>
      </div>
      <div class="aboutMeSection--container__card3">
        <div class="card3">
          <div>
            <about-me-card
              :title="personalProjects[2].title"
              :description="personalProjects[2].description"
              :image="personalProjects[2].image"
              :position="personalProjects[2].position"
              :date="personalProjects[2].date"
            />
          </div>
        </div>
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
  width: 100%;
  padding: 0 2.125rem;
  margin: 0 auto;
  max-width: 1440px;
}

.aboutMeSection--container__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.aboutMeSection--container h2,
.aboutMeSection--container p {
  text-align: left;
  font-family: var(--font-family);
  color: var(--primary-color);
  width: 35%;
}

.aboutMeSection--container h2 {
  font-size: 4.5rem;
}

.aboutMeSection--container p {
  font-size: 1.5rem;
  color: var(--primary-color);
}

.aboutMeSection--container__card1 {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.aboutMeSection--container__card2 {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.aboutMeSection--container__card3 {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

}


.card1 {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.card2 {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.card3 {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card1 div {
  width: 60%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: -2%;
}

.card2 div {
  width: 60%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: -2%;
}

.card3 div {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.aboutMeSection--container__description {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.aboutMeSection--container__description p {
  margin-top: -2%;
}

</style>
