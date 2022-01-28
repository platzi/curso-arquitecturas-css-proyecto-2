<template>
  <div class="portfolioSection">
    <div class="portfolioContent">
      <h2 class="portfolioTitle">My freelance portfolio</h2>
      <p>
        Let me show some of my freelance projects and how i have worked with
        vuejs and nuxtjs. Some of these projects are created with collaboration
        of amazing people and using incredible tools.
      </p>
    </div>
    <div class="firstProject">
      <project-card :bgImage="project.image" :projectName="project.name" />
    </div>
    <div class="secondProject">
      <project-card :bgImage="project2.image" :projectName="project2.name" />
    </div>
  </div>
</template>

<script>
import ProjectCard from "../cards/ProjectCard.vue";
export default {
  components: {
    ProjectCard,
  },
  setup() {
    const project = {
      image: require('@/static/images/cepolAcademy-min.png'),
      name: 'Cepol Academy'
    }
    const project2 = {
      image: require('@/static/images/jhnur-min.png'),
      name: 'Jhxur Artist'
    }

    return {
      project,
      project2
    }
  }
};
</script>

<style scoped>
.portfolioSection {
  margin: 3rem 0;
  padding: 0 0.5rem;
  display: grid;
  gap: 3rem 2rem;
  justify-content: center;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(320px, 600px));
  grid-template-rows: repeat(auto-fill, minmax(150px, 300px));
  grid-auto-flow: row;
  grid-template-areas:
    "first-card content"
    "first-card content"
    ". second-card"
    ". second-card";
}
.portfolioContent {
  display: flex;
  grid-area: content;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 2.25rem;
}

.portfolioTitle,
.portfolioSection p {
  font-family: "Nunito";
}

.portfolioTitle {
  color: #f5e6d7;
  font-size: 6rem;
  margin: 0;
  text-align: left;
  width: 100%;
}

.portfolioContent p {
  font-size: 1.75rem;
  width: 100%;
  color: #a2a59f;
  text-align: left;
}

.firstProject {
  grid-area: first-card;
  width: 100%;
  height: 100%;
}

.secondProject {
  grid-area: second-card;
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 1024px) {
  .portfolioTitle {
    font-size: 4rem;
  }
  .portfolioContent {
    padding: 1.25rem 1rem;
  }
  .portfolioContent p {
    font-size: 1.5rem;
  }
}
@media only screen and (max-width: 768px) {
  .portfolioSection {
    grid-template-columns: repeat(autofill, 1fr);
    grid-template-areas:
      "content"
      "first-card"
      "first-card"
      "second-card"
      "second-card";
  }
}
@media only screen and (max-width: 540px) {
  .portfolioTitle {
    font-size: 3rem;
  }
  .portfolioContent {
    padding: 1rem 0.75rem;
  }
  .portfolioContent p {
    font-size: 1rem;
  }
}
@media only screen and (max-width: 375px) {
  .portfolioContent {
    padding: 1rem 0.5rem;
  }
  .portfolioTitle {
    font-size: 2rem;
  }
  .portfolioContent p {
    font-size: 0.75rem;
  }
}
</style>
