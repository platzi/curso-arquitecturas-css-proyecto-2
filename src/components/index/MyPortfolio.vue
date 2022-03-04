<template>
  <div class="portfolioSection">
    <div class="portfolioContent">
      <h2 class="portfolioTitle">MY FREELANCE PORTFOLIO</h2>
      <div>
        <p>
          Let me show some of my freelance projects and how i have worked with
          vuejs and nuxtjs. Some of these projects are created with
          collaboration of amazing people and using incredible tools.
        </p>
      </div>
    </div>
    <div class="firstProject">
      <project-card
        :bgImage="projects[0].image"
        :projectName="projects[0].name"
      />
    </div>
    <div class="secondProject">
      <project-card
        :bgImage="projects[1].image"
        :projectName="projects[1].name"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from "../cards/ProjectCard.vue";
export default {
  components: {
    ProjectCard,
  },
  props: {
    projects: Array,
  },
};
</script>

<style scoped>
.portfolioSection {
  margin: 3rem 0;
  padding: 0 0.5rem;
}

.portfolioContent {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 2rem 2.25rem;
  width: 100%;
}

.portfolioTitle,
.portfolioContent p {
  font-family: var(--font-family);
  color: var(--primary-color);
  letter-spacing: var(--letter-spacing);
}

.portfolioTitle {
  font-size: 4.5rem;
  margin: 0;
  text-align: center;
  font-weight: 500;
  margin-bottom: 3rem;
}

.portfolioContent div {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.portfolioContent div p {
  font-size: 0.75rem;
  width: 100%;
  max-width: 21.25rem;
  text-align: left;
  font-weight: 400;
  letter-spacing: -4%;
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
