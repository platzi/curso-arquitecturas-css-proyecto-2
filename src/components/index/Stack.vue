<template>
  <div class="myStackSection">
    <div class="myStackSection--container">
      <h2>My stack and Skills</h2>
      <div class="myStackSection--container__content">
        <nav>
          <ul>
            <router-link
              v-for="(tech, index) in techies"
              :key="index"
              :to="tech.link"
              class="myStack--link"
            >
              {{ tech.name }}
            </router-link>
          </ul>
        </nav>
        <router-view  class="myStackSection--container__views" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const techies = [
      { name: "Frontend Stack", link: "/" },
      { name: "Fundamental Stack", link: "my-stack" },
      { name: "Building Stack", link: "building" },
    ];
    return {
      techies,
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
  width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
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

.myStackSection--container__content nav {
  width: 40%;
}

.myStackSection--container ul {
  margin: 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}
.myStack--link {
  margin-bottom: 3rem;
  color: white;
  font-size: 1.5rem;
  font-family: "Nunito";
  text-decoration: none;
}

.myStackSection--container ul .router-link-exact-active {
  background: #b79d36;
  padding: 0.5rem 0.75rem;
  border-radius: 1rem;
  box-shadow: 10px 10px 58px 0px rgba(70, 77, 52, 0.75);
  -webkit-box-shadow: 10px 10px 58px 0px rgba(70, 77, 52, 0.75);
  -moz-box-shadow: 10px 10px 58px 0px rgba(70, 77, 52, 0.75);
}
.myStackSection--container ul .router-link-exact-active:focus {
  outline: none;
}

.myStackSection--container__views {
  width: 50%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
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
@media only screen and (min-width: 321px) and (max-width: 768px) {
  .myStackSection--container__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
  .myStackSection--container__content nav {
    width: 100%;
  }
  .myStackSection--container__content nav ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }
  .myStack--link {
    width: 80%;
    font-size: 1rem;
    margin: 0.75rem
  }
  .myStackSection--container__views {
    width: 70%;
  }
}
</style>
