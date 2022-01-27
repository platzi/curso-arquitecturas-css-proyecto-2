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
    <div class="firstProject">Este es el primer proyecto</div>
    <div class="secondProject">Este es el segundo proyecto</div>
  </div>
</template>

<style scoped>
.portfolioSection {
  margin: 3rem 0;
  display: grid;
  gap: 3rem 2rem;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "first-card content"
    "first-card content"
    ". ."
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
}

.secondProject {
  grid-area: second-card;
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
