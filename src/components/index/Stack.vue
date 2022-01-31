<template>
  <div class="myStackSection">
    <div class="myStackSection--container">
      <h2>My stack and Skills</h2>
      <div class="myStackSection--container__content">
        <nav>
          <ul>
            <router-link v-for="(tech, index) in techies" :key="index" :to="tech.link" class="myStack--link" >
              {{ tech.name }}
            </router-link>
          </ul>
        </nav>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const techies = [
      { name: 'My personal preferred techonolgies are', link: 'personal-stack'},
      { name: 'Proficient and super comfortable using techonologies', link: 'my-stack'},
      { name: 'Building Skills', link: 'building'},
    ]
    const technologies = [
      { name: "Nuxtjs" },
      { name: "tailwind" },
      { name: "firebase" },
    ];
    const stack = [
      { name: "Vue2" },
      { name: "Storyblok" },
      { name: "Vue3" },
      { name: "Javascript" },
      { name: "Boostrap" },
      { name: "Bulma" },
      { name: "Git" },
      { name: "Github" },
      { name: "CSS" },
    ];
    const elementalStack = [
      { name: "Nodejs" },
      { name: "Expressjs" },
      { name: "Python" },
    ];

    return {
      technologies,
      stack,
      elementalStack,
      techies
    };
  },
};
</script>

<style scoped>
.myStackSection {
  margin: 3rem 0;
}
.myStackSection--container {
  padding: 2rem 2.25rem;
}

.myStackSection--container__content {
  width: 60%;
}

.myStackSection--container h2,
.myStackSection--container p {
  font-family: "Nunito";
  width: 60%;
}

.myStackSection--container h2 {
  color: #f5e6d7;
  font-size: 6rem;
  width: 75%;
}

.myStackSection--container ul {
  margin-bottom: 1.5rem;
}
.myStack--link {
  margin-bottom: 0.75rem;
  color: white;
  font-size: 2rem;
}

@media only screen and (max-width: 1024px) {
  .myStackSection--container h2 {
    font-size: 4rem;
  }
  .myStackSection--container p {
    font-size: 1.5rem;
  }
}
@media only screen and (max-width: 540px) {
  .myStackSection--container {
    padding: 1rem 0.75rem;
  }
  .myStackSection--container h2 {
    font-size: 3rem;
  }
  .myStackSection--container p {
    font-size: 1rem;
  }
}
@media only screen and (max-width: 375px) {
  .myStackSection--container {
    padding: 1rem 0.5rem;
  }
  .myStackSection--container h2 {
    font-size: 2rem;
  }
  .myStackSection--container p {
    font-size: 0.75rem;
  }
}
</style>
