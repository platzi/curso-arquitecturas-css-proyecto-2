<template>
  <div class="portfolioSection">
    <div class="portfolioContent">
      <h2 class="portfolioTitle">My freelance portfolio</h2>
      <p class="content">
        Let me show some of my freelance projects and how i have worked with
        vuejs and nuxtjs, some of these projects are created with collaboration
        of amazing people and using incredible tools as Firebase or Storyblok
      </p>
    </div>
  </div>
</template>

<style scoped>
.portfolioContent {
  display: flex;
  justify-content: end;
  align-items: end;
  flex-direction: column;
  padding: 2rem;
  padding-right: 2.75rem;
}

.portfolioSection .portfolioTitle,
.portfolioSection .content {
  color: #f5e6d7;
  font-family: "Nunito";
}

.portfolioTitle {
  font-size: 6rem;
  margin: 0;
}

.portfolioContent .content {
  font-size: 1.75rem;
  width: 60%;
}
</style>
