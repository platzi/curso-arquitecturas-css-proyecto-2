<template>
  <div class="contactSection">
    <h2>Get in touch!</h2>
    <div class="contactSection--container">
      <form action="" class="form">
        <div class="form--namesContainer">
          <div class="inputContainer">
            <label for="">Name</label>
            <input
              v-model="userName"
              type="text"
              name="name"
              placeholder="John"
            />
          </div>
          <div class="inputContainer">
            <label for="">Lastname</label>
            <input
              v-model="userLastname"
              type="text"
              name="lastname"
              placeholder="Doe"
            />
          </div>
        </div>
        <div class="form--emailContainer">
          <div class="inputContainer">
            <label for="">Email</label>
            <input
              v-model="userEmail"
              type="email"
              placeholder="johnDoe@cmail.com"
            />
          </div>
        </div>
        <div class="messageContainer">
          <div class="inputContainer">
            <label for="">Message</label>
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
import { reactive, toRefs } from "vue";
import emailjs from '@emailjs/browser'
import { init } from '@emailjs/browser'
export default {
  setup() {
    init(process.env.VUE_APP_USER)

    const mail = reactive({
      userName: "",
      userLastname: "",
      userEmail: "",
      userMessage: "",
    });
    function sendEmail() {
      const params = {
        to_name: 'Luis',
        from_name: mail.userName,
        from_lastname: mail.userLastname,
        rely_to: mail.userEmail,
        message: mail.userMessage,
      }
      try {
        emailjs.send(
          process.env.VUE_APP_SERVICE,
          process.env.VUE_APP_TEMPLATE,
          params,
          process.env.VUE_APP_USER,
        );
        alert('Mensaje Enviado')
      } catch (error) {
        console.error(error);
      }
      console.log("estamos abajo");
      mail.userName = "";
      mail.userLastname = "";
      mail.userEmail = "";
      mail.userMessage = "";
    }
    return {
      sendEmail,
      ...toRefs(mail),
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
  padding: 3rem 0 6rem 0;
}
.contactSection h2 {
  font-family: "Nunito";
  font-size: 6rem;
  margin-bottom: 3rem;
}
.contactSection--container {
  background: rgba(95, 116, 41, 1);
  width: 80%;
  max-width: 1024px;
  border-radius: 2rem;
  box-shadow: 1px 12px 53px -9px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px 12px 53px -9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 12px 53px -9px rgba(0, 0, 0, 0.75);
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
  font-family: "Nunito";
  color: rgba(228, 199, 95, 1);
  margin-bottom: 0.75rem;
}

.form--namesContainer,
.form--emailContainer,
.messageContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.inputContainer {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 1.25rem;
  width: 100%;
  padding: 0 1rem;
}
.inputContainer input {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: olivedrab 2px solid;
  font-family: "Nunito";
  font-size: 1.25rem;
  color: #f5e6d7;
}
.inputContainer input::placeholder {
  color: #a2a59f;
}
.inputContainer input:focus {
  border: none;
  outline: none;
  border-bottom: rgba(183, 157, 54, 1) 2px solid;
}
.form textarea {
  margin: 0 0 2rem 0;
  background: transparent;
  width: 100%;
  border: none;
  border-bottom: olivedrab 2px solid;
  font-family: "Nunito";
  font-size: 1.25rem;
  color: #f5e6d7;
}
.form textarea::placeholder {
  color: #a2a59f;
}
.form textarea:focus {
  border: none;
  border-bottom: rgba(228, 199, 95, 1) 2px solid;
  outline: none;
  font-size: 1.25rem;
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
  .contactSection h2 {
    font-size: 4rem;
  }
}
@media only screen and (max-width: 540px) {
  .contactSection h2 {
    font-size: 3rem;
  }
  .form--namesContainer {
    flex-wrap: wrap;
  }
}
@media only screen and (max-width: 375px) {
  .contactSection h2 {
    font-size: 2rem;
  }
}
</style>
