<template>
  <header class="header">
    <nav class="header--container">
      <ul>
        <li v-for="(item, index) in menu" :key="index">
          <router-link :to="item.link">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  setup() {
    const menu = [
      { name: ".is", link: "#" },
      { name: ".Portfolio", link: "#" },
      { name: ".abooutMe", link: "#" },
      { name: ".contact", link: "#" },
    ];

    return {
      menu,
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
}
.header--container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}
.header--container ul {
  display: flex;
  width: 33%;
  justify-content: space-evenly;
  align-items: center;
}

.header--container ul li {
  list-style-type: none;
  font-family: "Nunito";
  font-size: 1.25rem;
  color: #f5e6d7;
  margin: 0;
  padding: 0;
}

.isActive {
  color: #a2a59f;
}
</style>
