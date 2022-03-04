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
    <div class="projects-container">
      <project-card
        v-for="(project, index) in projects"
        :key="index"
        :title="project.name"
        :image="project.image"
        :date="project.date"
        :projectId="project.id"
        :position="index+1"
      />
    </div>
    <div class="projects-link-container">
      <router-link to="work" class="projects-link">
        Take a look at my work
      </router-link>
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
  max-width: 1440px;
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

.projects-container {
  width: 100%;
  margin: 32px 0;
}

.projects-link-container {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.projects-link {
  color: var(--primary-color);
  font-family: var(--font-family);
  font-size: 1rem;
  font-weight: 400;
  width: 200px;
  height: 200px;
  text-decoration: none;
  margin-top: -5%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.projects-link:hover {
  border: 1px solid var(--primary-color);
  border-radius: 100%;
}
</style>
