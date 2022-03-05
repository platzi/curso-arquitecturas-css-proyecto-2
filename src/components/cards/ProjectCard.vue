<template>
  <article class="project-card" :class="cardPosition">
    <div class="projectCard-container">
      <h3 class="project-title">
        {{ title }}
      </h3>
      <p class="project-date">
        {{ date }}
      </p>
      <figure class="project-image-container">
        <img loading="lazy" :src="image" :alt="title" class="project-image" />
      </figure>
      <div class="project-link-container" @click="getProject">
        <router-link :to="`/works/${projectId}`" class="project-link">
          see project
        </router-link>
        <div>
          <svg
            width="22"
            height="8"
            viewBox="0 0 22 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.8533 3.46459L18.6712 0.28267C18.476 0.0874119 18.1594 0.0874179 17.9641 0.282684C17.7689 0.47795 17.7689 0.794532 17.9642 0.989791L20.2926 3.31817L3.7286 3.31849C3.52388 2.75062 2.98027 2.34465 2.34185 2.34465C1.52795 2.34465 0.868164 3.00444 0.868164 3.81833C0.868164 4.63222 1.52795 5.29202 2.34185 5.29202C2.98016 5.29202 3.52369 4.88619 3.72849 4.31848L20.2926 4.31817L17.9643 6.64664C17.769 6.84191 17.769 7.15849 17.9643 7.35375C18.1595 7.54901 18.4761 7.549 18.6714 7.35374L21.8533 4.1717C22.0486 3.97643 22.0486 3.65985 21.8533 3.46459Z"
              fill="#1E6F5C"
            />
          </svg>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  props: {
    image: String,
    title: String,
    date: String,
    position: Number,
    projectId: String,
  },
  setup(props) {
    const store = useStore();

    const cardPosition = computed(() => {
      return props.position % 2 === 0 ? "isLeft" : "isRight";
    });

    function getProject() {
      store.dispatch("projects/getSelectedProject", props.projectId);
    }

    return {
      getProject,
      cardPosition,
    };
  },
};
</script>

<style scoped>
.project-card {
  width: 100%;
  max-width: 1024px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  margin: 0 auto;
  margin-bottom: -2%;
}

.isLeft {
  justify-content: flex-start;
}

.isRight {
  justify-content: flex-end;
}

.projectCard-container {
  width: 386px;
}

.project-title {
  letter-spacing: var(--leter-spacing);
  color: var(--primary-color);
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 0.75rem;
  margin: 0%;
}

.project-date {
  letter-spacing: var(--letter-spacing);
  color: var(--primary-color);
  font-weight: 300;
  font-family: var(--font-family);
  margin: 0;
}

.project-image-container {
  width: 100%;
  height: 210px;
  display: flex;
  margin: 16px 0;
  justify-content: center;
  align-items: center;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.project-link-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.project-link {
  font-family: var(--font-family);
  color: var(--primary-color);
  font-size: 0.75rem;
  font-weight: 400;
  margin-right: 8px;
  text-decoration: none;
}

@media only screen and (max-width: 1024px) {
  .isLeft,
  .isRight {
    justify-content: center;
    margin: 3rem 0;
  }
}
</style>
