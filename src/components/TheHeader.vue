<template>
  <header class="header">
    <nav class="header--container">
      <ul>
        <li v-for="(item, index) in menu" :key="index">
          <router-link :to="item.link">
            :to= "<span>{{ item.name }}</span
            >"
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
      { name: "home", link: "#" },
      { name: "portfolio", link: "#" },
      { name: "about Me", link: "#" },
      { name: "contact", link: "#" },
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
  z-index: 100;
  background: #464d34;
  box-shadow: 0px 56px 62px 17px rgba(70, 77, 52, 0.79);
  -webkit-box-shadow: 0px 56px 62px 17px rgba(70, 77, 52, 0.79);
  -moz-box-shadow: 0px 56px 62px 17px rgba(70, 77, 52, 0.79);
  border: none;
}
.header--container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}
.header--container ul {
  display: flex;
  width: 40%;
  padding: 0 1rem 0 0;
  justify-content: space-evenly;
  align-items: center;
}

.header--container ul li {
  list-style-type: none;
  font-family: "Nunito";
  font-size: 1rem;
  margin: 0.125rem 0.5rem;
  padding: 0;
  width: 25%;
  color: rgba(183, 157, 54, 1);
}

.header--container ul li span {
  color: #f5e6d7;
  text-decoration: underline;
  font-size: 1rem;
}

.active {
  color: #a2a59f;
}

@media only screen and (min-width: 1440px) {
  .header--container ul li {
    font-size: 1.125rem;
    margin: 0.06rem;
  }
  .header--container ul li span {
    font-size: 1.25rem;
  }
}
@media only screen and (max-width: 1440px) and (min-width: 1024px) {
  .header--container ul {
    width: 50%
  }
  .header--container ul li {
    font-size: 1rem;
    margin: 0 0;
  }
  .header--container ul li span {
    font-size: 1.125rem;
  }
}
@media only screen and (max-width: 1024px) {
  .header--container ul li {
    font-size: 0.875rem;
  }
  .header--continer ul li span {
    font-size: 1rem;
  }
}
</style>
