<template>
  <header class="header">
    <!-- <div class="buttonContainer">
      <burger-button @click="getMenu" />
    </div> -->
    <nav
      class="header--container"
      :class="{
        isOpen: isMenuOpen,
      }"
    >
      <div class="header--logo-container">
        <p class="logo-text">LR.</p>
      </div>
      <ul>
        <li v-for="(item, index) in menu" :key="index" @click="getMenu">
          <a :href="item.link" class="link">
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const isMenuOpen = computed(() => store.getters["config_drawer/getDrawer"]);

    const menu = [
      { name: "HOME", link: "#indexhero" },
      { name: "PORTFOLIO", link: "#indexportfolio" },
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
}
/* .buttonContainer {
  width: 100%;
  height: 5rem;
  display: none;
  justify-content: flex-end;
  align-items: center;
  padding: 1.5rem;
  position: relative;
} */

.header--container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  padding: 0.25rem 0;
  margin: 0 auto;
}

.header--logo-container {
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-text {
  font-family: var(--font-family);
  color: var(--primary-color);
  font-weight: 600;
  font-size: 2rem;
  margin: 0;
}

.header--container ul {
  display: flex;
  padding: 0 1rem 0 0;
  justify-content: center;
  align-items: center;
}

.header--container ul li {
  margin: 0 0.125rem;
}

.header--container .link {
  list-style-type: none;
  text-decoration: none;
  font-family: var(--font-family);
  font-size: 1.5rem;
  margin: 0 auto;
  padding: 0;
  color: var(--primary-color);
  padding: 0.612rem 1.25rem;
  font-weight: 400;
}

.header--container ul .link:hover {
  border: 1px solid var(--primary-color);
  border-radius: 2.5rem;
}

.header--container .link span {
  color: var(--primary-color);
  text-decoration: underline;
  font-size: 1rem;
}

.active {
  color: #a2a59f;
}

@media only screen and (min-width: 1441px) {
  .header--container .link {
    /* font-size: 2rem; */
    margin: 0.06rem;
  }
  .header--container .link span {
    font-size: 1.25rem;
  }
  .logo-text {
    font-size: 3rem;
  }
}
@media only screen and (max-width: 1440px) and (min-width: 1025px) {
  .header--container ul li,
  .header--container .link {
    /* font-size: 2rem; */
    margin: 0 0;
  }
  .logo-text {
    font-size: 2.5rem;
  }
}
@media only screen and (max-width: 1024px) {
  /* .header--container ul li,
  .header--container .link {
    font-size: 1.75rem;
  } */
  .header--container .link {
    padding: 0.3125rem 0.625rem;
  }
}
@media only screen and (max-width: 760px) {
  .header--container ul li,
  .header--container .link {
    font-size: 1.5rem;
  }
  .header--container .link {
    padding: 0.3125rem 0.625rem;
  }
}
@media only screen and (max-width: 640px) {
  .header--container ul li,
  .header--container .link {
    font-size: 1.25rem;
  }
  .header--container .link {
    padding: 0.3125rem 0.625rem;
  }
}
@media only screen and (max-width: 420px) {
  .header--container ul li,
  .header--container .link {
    font-size: 1rem;
  }
}
@media only screen and (max-width: 320px) {
  .header--container ul li,
  .header--container .link {
    font-size: 0.75rem;
  }
}
</style>
