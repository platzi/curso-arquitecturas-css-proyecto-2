<template>
  <div class="myStackSection">
    <div class="myStackSection--container">
      <h2>Me and my techies Skills</h2>
      <div class="myStackSection--container__content">
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
          I am glad to let you know i consider myself an eternal student, for
          that reason, now i am currently learning about these:
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
.myStackSection--container p,
.myStackSection--container li {
  font-family: "Nunito";
  width: 60%;
}

.myStackSection--container h2 {
  color: #f5e6d7;
  font-size: 6rem;
  width: 75%;
}

.myStackSection--container p {
  color: #a2a59f;
  font-size: 1.5rem;
}
.myStackSection--container ul {
  margin-bottom: 1.5rem;
}
.myStackSection--container li {
  margin-bottom: 0.75rem;
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
