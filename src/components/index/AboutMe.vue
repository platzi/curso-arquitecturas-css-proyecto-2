<template>
  <div class="aboutMeSection">
    <div class="aboutMeSection--container">
      <h2>Me and my techies Skills</h2>
      <div class="aboutMeSection--container__content">
        <p>My personal preferred techonolgies are:</p>
        <ul>
          <li v-for="(technology, index) in technologies" :key="index">
            {{ technology.name }}
          </li>
        </ul>
        <p>But i am proficient and super comfortable using techonologies as:</p>
        <ul>
          <li v-for="(el, index) in stack" :key="index">
            {{ el.name }}
          </li>
        </ul>
        <p>
          I am glad to let you know i consider myself an eternal student,
          for that reason, now i am currently learning about these:
        </p>
        <ul>
          <li v-for="(element, index) in elementalStack" :key="index">
            {{ element.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
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
    };
  },
};
</script>

<style scoped>
.aboutMeSection {
  margin: 3rem 0;
}
.aboutMeSection--container {
  padding: 2rem 2.25rem;
}

.aboutMeSection--container__content {
  width: 60%;
}

.aboutMeSection--container h2,
.aboutMeSection--container p,
.aboutMeSection--container li {
  font-family: "Nunito";
  width: 60%;
}

.aboutMeSection--container h2 {
  color: #f5e6d7;
  font-size: 6rem;
  width: 75%;
}

.aboutMeSection--container p {
  color: #a2a59f;
  font-size: 1.50rem;
}
.aboutMeSection--container ul {
  margin-bottom: 1.5rem;
}
.aboutMeSection--container li {
  margin-bottom: 0.75rem;
}

@media only screen and (max-width: 1024px) {
}
@media only screen and (max-width: 540px) {
  .aboutMeSection--container {
    padding: 1rem 0.75rem;
  }
}
@media only screen and (max-width: 375px) {
  .aboutMeSection--container {
    padding: 1rem 0.5rem;
  }
}
</style>
