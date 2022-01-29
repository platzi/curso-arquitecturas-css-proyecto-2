<template>
  <button class="card" @click="getProject">
    <div class="card--contentContainer">
      <div class="wrapper">
        <div class="img" :style="{ backgroundImage: 'url(' + bgImage + ')' }" />
      </div>
    </div>
  </button>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  props: {
    bgImage: String,
    projectName: String,
  },
  setup(props) {
    const store = useStore();

    const modalIsOpen = computed(() => {
      return store.getters["modal/getModal"];
    });

    function getProject() {
      if (modalIsOpen.value) {
        store.dispatch("modal/activeModal", false);
      } else {
        store.dispatch("modal/activeModal", true);
        console.log(props.projectName);
      }
    }

    return {
      getProject,
    };
  },
};
</script>

<style scoped>
.card {
  padding: 1rem;
  width: 100%;
  height: 100%;
  min-width: 254px;
  min-height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card--contentContainer {
  background: #8f032a;
  border-radius: 0.125rem;
  padding: 0.15rem;
}

.card--contentContainer:hover {
  box-shadow: 0px 32px 82px 4px rgba(143, 3, 42, 0.4);
  -webkit-box-shadow: 0px 32px 82px 4px rgba(143, 3, 42, 0.4);
  -moz-box-shadow: 0px 32px 82px 4px rgba(143, 3, 42, 0.4);
}

.wrapper {
  background: white;
  border-radius: 0.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper .img {
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  width: 480px;
  height: 560px;
}

@media only screen and (min-width: 1441px) {
  .wrapper .img {
    width: 600px;
  }
}
@media only screen and (min-width: 1025px) and (max-width: 1440px) {
  .wrapper .img {
    width: 420px;
  }
}

@media only screen and (min-width: 767px) and (max-width: 1024px) {
  .wrapper .img {
    width: 300px;
  }
}

@media only screen and (max-width: 540px) {
  .wrapper .img {
    width: 420px;
  }
}

@media only screen and (min-width: 321px) and (max-width: 420px) {
  .wrapper .img {
    width: 320px;
  }
}

@media only screen and (max-width: 320px) {
  .wrapper .img {
    width: 300px;
  }
}
</style>
