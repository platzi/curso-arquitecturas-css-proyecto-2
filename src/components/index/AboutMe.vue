<template>
  <div class="aboutMeSection">
    <div class="aboutMeSection--container">
      <h2>Me and my techies Skills</h2>
      <p>My personal preferred techonolgies are:</p>
      <ul>
        <li v-for="(technology, index) in techonolgies" :key="index">
          {{ technology.name }}
        </li>
      </ul>
      <p>but i also i am proficient using techonologies as:</p>
      <ul>
        <li v-for="(el, index) in stack" :key="index">
          {{ el.name }}
        </li>
      </ul>
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
      { name: "Postgressjs" },
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

<style scoped></style>
