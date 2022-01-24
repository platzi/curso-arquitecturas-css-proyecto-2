<template>
  <div class="contactSection">
    <h2>Get in touch!</h2>
    <div class="contactSection--container">
      <form action="" class="form">
        <div class="form--namesContainer">
          <div class="inputContainer">
            <label for="">Name</label>
            <input type="text" name="name" placeholder="John" />
          </div>
          <div class="inputContainer">
            <label for="">Lastname</label>
            <input type="text" name="lastname" />
          </div>
        </div>
        <div class="form--emailContainer">
          <div class="inputContainer">
            <label for="">Email</label>
            <input type="email" />
          </div>
        </div>
        <div class="messageContainer">
          <div class="inputContainer">
            <label for="">Message</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
        <button class="formButton">Send</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.contactSection {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
}
.form textarea:focus {
  border: none;
  border-bottom: rgba(228, 199, 95, 1) 2px solid;
  outline: none;
}
@media only screen and (max-width: 1024px) {
}
@media only screen and (max-width: 540px) {
  .form--namesContainer {
    flex-wrap: wrap;
  }
}
@media only screen and (max-width: 375px) {
}
</style>
