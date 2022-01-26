<template>
  <header class="header">
    <div class="buttonContainer">
      <button class="button">
        <div class="burgerButton">
          <div class="first" />
          <div class="second" />
          <div class="second--div" />
          <div class="third" />
        </div>
      </button>
    </div>
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
      { name: "aboutMe", link: "#" },
      { name: "contactMe", link: "#" },
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
.buttonContainer {
  width: 100%;
  height: 5rem;
  display: none;
  justify-content: flex-end;
  align-items: center;
  padding: 1.5rem;
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
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
    width: 50%;
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
  .header {
    position: fixed;
    top: 0%;
    left: 0%;
    right: 0%;
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
  }
  .buttonContainer {
    display: flex;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .button:focus {
    outline: none;
  }
  .burgerButton {
    display: grid;
    padding: 0.125rem;
    border-radius: 100%;
    width: 2.5rem;
    height: 2.5rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  .first,
  .second,
  .second--div,
  .third {
    height: 2px;
    border-radius: 0.125rem;
    align-self: center;
    background: #f5e6d7;
  }
  .first {
    grid-column-start: 1;
    grid-column-end: span 2;
    grid-row-start: 1;
    grid-row-end: span 1;
    animation-name: disappear, moveLeft;
    animation-delay: 100ms;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
    animation-duration: 300ms;
  }
  .second {
    grid-column-start: 1;
    grid-column-end: span 3;
    grid-row-start: 2;
    grid-row-end: span 1;
    align-self: center;
    animation-name: rotateLeft;
    animation-delay: 100ms;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
    animation-duration: 300ms;
  }
  .second--div {
    grid-column-start: 1;
    grid-column-end: span 3;
    grid-row-start: 2;
    grid-row-end: span 1;
    align-self: center;
    animation-name: disappear, rotateRight;
    animation-delay: 100ms;
    animation-fill-mode: forwards;
    animation-direction: reverse;
    animation-timing-function: ease-in;
    animation-duration: 300ms;
  }
  .third {
    grid-column-start: 2;
    grid-column-end: span 2;
    grid-row-start: 3;
    grid-row-end: span 1;
    animation-name: disappear, moveRight;
    animation-delay: 100ms;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
    animation-duration: 300ms;
  }
  .header--container {
    width: 100%;
    display: flex;
    justify-content: flex-start;
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
  .header--container ul li span {
    font-size: 1.5rem;
  }
}

@media only screen and (max-width: 540px) {
  .header--container ul li {
    margin: 1.25rem 0 1.25rem 2rem;
  }
}

@keyframes disappear {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes moveRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(12px);
  }
}
@keyframes moveLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-12px);
  }
}
@keyframes rotateLeft {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-45deg);
  }
}
@keyframes rotateRight {
  0% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(0);
  }
}
</style>
