<template>
  <header class="header">
    <div class="buttonContainer">
      <burger-button @click="getMenu" />
    </div>
    <nav
      class="header--container"
      :class="{
        isOpen: isMenuOpen,
      }"
    >
      <ul>
        <li v-for="(item, index) in menu" :key="index">
          <a :href="item.link" class="link">
            :to= "<span>{{ item.name }}</span
            >"
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import BurgerButton from "./global/BurgerButton.vue";
export default {
  components: { BurgerButton },
  setup() {
    const store = useStore();
    const isMenuOpen = computed(() => store.getters["config_drawer/getDrawer"]);

    const menu = [
      { name: "home", link: "#indexhero" },
      { name: "portfolio", link: "#indexportfolio" },
      { name: "aboutMe", link: "#indexstack" },
      { name: "contactMe", link: "#indexcontact" },
    ];
    function getMenu() {
      if (isMenuOpen.value) {
        store.dispatch("config_drawer/activeDrawer", false);
      } else {
        store.dispatch("config_drawer/activeDrawer", true);
      }
    }

    return {
      menu,
      getMenu,
      isMenuOpen,
    };
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  position: sticky;
  top: 0;
  right: 0;
  z-index: 100;
  background: #464d34;
  box-shadow: 0px 56px 62px 17px rgba(70, 77, 52, 0.79);
  -webkit-box-shadow: 0px 56px 62px 17px rgba(70, 77, 52, 0.79);
  -moz-box-shadow: 0px 56px 62px 17px rgba(70, 77, 52, 0.79);
  border: none;
}
.buttonContainer {
  width: 100%;
  height: 5rem;
  display: none;
  justify-content: flex-end;
  align-items: center;
  padding: 1.5rem;
  position: relative;
}

.header--container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}
.header--container ul {
  display: flex;
  width: 45%;
  max-width: 650px;
  padding: 0 1rem 0 0;
  justify-content: space-evenly;
  align-items: center;
}

.header--container ul li {
  width: 50%;
}

.header--container .link {
  list-style-type: none;
  text-decoration: none;
  font-family: "Nunito";
  font-size: 1rem;
  margin: 0.125rem 0.5rem;
  padding: 0;
  /* width: 25%; */
  color: rgba(183, 157, 54, 1);
}

.header--container .link span {
  color: #f5e6d7;
  text-decoration: underline;
  font-size: 1rem;
}

.active {
  color: #a2a59f;
}

@media only screen and (min-width: 1440px) {
  .header--container .link {
    font-size: 1.125rem;
    margin: 0.06rem;
  }
  .header--container .link span {
    font-size: 1.25rem;
  }
}
@media only screen and (max-width: 1440px) and (min-width: 1024px) {
  .header--container ul {
    width: 50%;
    min-width: 560px;
  }
  .header--container ul li {
    font-size: 1rem;
    margin: 0 0;
  }
  .header--container .link span {
    font-size: 1rem;
  }
}

/* from this section we are working
with tablets and phones */
@media only screen and (max-width: 1024px) {
  .header--container {
    position: fixed;
    top: 0%;
    right: 100%;
    bottom: 0%;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    background: rgb(88, 0, 41);
    background: linear-gradient(
      45deg,
      rgba(88, 0, 41, 1) 15%,
      rgba(77, 87, 49, 0.34217436974789917) 100%
    );
    transition: all ease-in 300ms;
  }
  .isOpen {
    right: 0%;
  }
  .buttonContainer {
    display: flex;
    position: relative;
    z-index: 150;
  }
  .header--container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  .header--container ul {
    flex-direction: column;
    margin: 0;
  }
  .header--container ul li {
    margin: 2rem 0 2rem 3rem;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    font-size: 1.125rem;
  }
  .header--container .link {
    font-size: 1.25rem;
  }
  .header--container .link span {
    font-size: 1.5rem;
  }
}

@media only screen and (max-width: 540px) {
  .header--container {
    padding: 0 0 2rem 0;
  }
  .header--container ul {
    min-width: 180px;
  }
  .header--container ul li {
    margin: 0.5rem 0 2rem 0.75rem;
    width: 100%;
  }
  .header--container .link {
    font-size: 1.125rem;
  }
  .header--container .link span {
    font-size: 1rem;
  }
}
</style>
