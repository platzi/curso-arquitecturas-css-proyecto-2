<template>
  <div class="contactSection">
    <h2>Get in touch!</h2>
    <div class="contactSection--container">
      <form action="" class="form">
        <div class="form--namesContainer">
          <div class="inputContainer">
            <label for="">Name</label>
            <input type="text" />
          </div>
          <div class="inputContainer">
            <label for="">Name</label>
            <input type="text" />
          </div>
        </div>
        <div class="form--emailContainer">
          <label for="">Email</label>
          <input type="text" />
        </div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
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
</style>
