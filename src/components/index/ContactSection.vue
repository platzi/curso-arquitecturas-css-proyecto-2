<template>
  <div class="contactSection">
    <h2 class="contactSection__title">HIT ME UP FOR WORKING TOGETHER</h2>
    <div class="contactSection__arrow-container">
      <button class="arrow" @click="activeContact">
        <the-icons v-if="isContactVisible" name="arrowDown" class="icon" />
        <the-icons v-else name="arrowUp" class="icon" />
      </button>
    </div>
    <div v-if="!isContactVisible" class="contactSection--container">
      <form action="" class="form">
        <div class="cotumer-data-container">
          <div class="form--namesContainer">
            <div class="inputContainer">
              <label for="">NAME</label>
              <input
                v-model="userName"
                type="text"
                name="name"
                placeholder="John"
              />
            </div>
          </div>
          <div class="form--emailContainer">
            <div class="inputContainer">
              <label for="">EMAIL</label>
              <input
                v-model="userEmail"
                type="email"
                placeholder="johnDoe@cmail.com"
              />
            </div>
          </div>
        </div>
        <div class="messageContainer">
          <div class="messageContainer__inputContainer">
            <label for="">MESSAGE</label>
            <textarea
              v-model="userMessage"
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Let me know your amazing message and let's work together"
            ></textarea>
          </div>
        </div>
        <button class="formButton" @click.prevent="sendEmail">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
import TheIcons from "../global/TheIcons.vue";
import { reactive, toRefs, computed } from "vue";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
export default {
  components: {
    TheIcons,
  },
  setup() {
    init(process.env.VUE_APP_USER);

    const state = reactive({ isContactOpen: false });

    const stateAsRefs = toRefs(state);

    let isContactVisible = computed(() => state.isContactOpen);

    const mail = reactive({
      userName: "",
      userLastname: "",
      userEmail: "",
      userMessage: "",
    });

    function sendEmail() {
      const params = {
        to_name: "Luis",
        from_name: mail.userName,
        from_lastname: mail.userLastname,
        rely_to: mail.userEmail,
        message: mail.userMessage,
      };
      try {
        emailjs.send(
          process.env.VUE_APP_SERVICE,
          process.env.VUE_APP_TEMPLATE,
          params,
          process.env.VUE_APP_USER
        );
        alert("Mensaje Enviado");
      } catch (error) {
        console.error(error);
      }
      console.log("estamos abajo");
      mail.userName = "";
      mail.userLastname = "";
      mail.userEmail = "";
      mail.userMessage = "";
    }

    function activeContact() {
      if (state.isContactOpen) {
        state.isContactOpen = false;
      } else {
        state.isContactOpen = true;
      }
    }

    return {
      sendEmail,
      ...toRefs(mail),
      isContactVisible,
      activeContact,
      stateAsRefs,
    };
  },
};
</script>

<style scoped>
.contactSection {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 2.125rem;
}
.contactSection__title {
  font-family: var(--font-family);
  color: var(--primary-color);
  font-size: 4.5rem;
  margin-bottom: 2rem;
}

.contactSection__arrow-container {
  width: 100%;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.arrow {
  width: 3rem;
  height: 3rem;
}

.arrow .icon {
  color: var(--primary-color);
}

.contactSection--container {
  width: 80%;
  max-width: 1024px;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  width: 100%;
  padding: 0 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.form label {
  font-family: var(--font-family);
  color: var(--primary-color);
  font-size: 3rem;
  font-weight: 500;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}

.cotumer-data-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.form--namesContainer,
.form--emailContainer {
  width: 50%;
  display: flex;
}

.messageContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.messageContainer__inputContainer {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 1.25rem;
  padding: 0 1rem;
}

.inputContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.25rem;
  width: 100%;
  padding: 0 1rem;
}
.inputContainer input {
  width: 100%;
  background: transparent;
  outline: none;
  border: 2px solid var(--primary-color);
  border-radius: 3rem;
  padding: 0.75rem 0.5rem;
  font-family: var(--font-family);
  font-size: 1.25rem;
  color: var(--primary-color);
}
.inputContainer input::placeholder {
  color: #a2a59f;
}

.inputContainer input:focus {
  outline: none;
  border: 2px solid var(--primary-color);
  border-radius: 3rem;
}
.form textarea {
  margin: 0 0 2rem 0;
  background: transparent;
  width: 100%;
  border: 2px solid var(--primary-color);
  font-family: var(--font-family);
  border-radius: 1.5rem;
  padding: 0.75rem 0.5rem;
  font-size: 1.25rem;
  color: var(--primary-color);
}
.form textarea::placeholder {
  color: #a2a59f;
}
.form textarea:focus {
  outline: none;
  font-size: 1.25rem;
  color: var(--primary-color);
}
.form button {
  width: 100%;
  color: #f5e6d7;
  background: rgba(183, 157, 54, 1);
  border-radius: 1rem;
  padding: 1rem 0;
  border: none;
  font-family: "Nunito";
  font-size: 1.5rem;
  box-shadow: -6px 14px 18px -9px rgba(0, 0, 0, 0.64);
  -webkit-box-shadow: -6px 14px 18px -9px rgba(0, 0, 0, 0.64);
  -moz-box-shadow: -6px 14px 18px -9px rgba(0, 0, 0, 0.64);
}
.form button:active {
  outline: none;
  background: rgb(131, 114, 54);
}
@media only screen and (max-width: 1024px) {
  .contactSection__title {
    font-size: 4rem;
  }
}
@media only screen and (max-width: 640px) {
  .contactSection__title {
    font-size: 3rem;
    text-align: center;
  }
  .form--namesContainer {
    flex-wrap: wrap;
  }
}
</style>
