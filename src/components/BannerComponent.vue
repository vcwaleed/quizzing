<script setup>
import ButtonComponent from "./ButtonComponent.vue";
</script>
<template>
  <section class="main">
    <div class="text_div">
      <div class="headig_div">
        <h2>Learn</h2>
        <h2>New concepts</h2>
        <h2>Each day</h2>
      </div>
      <span> We help you prepare for exams and quizes</span>
      <div class="btn">
        <ButtonComponent buttonType="secondary" buttonSize="medium">
          Start Solving</ButtonComponent>
          
      </div>
    </div>
    <div class="img_div">
      <img src="../assets/banner.png" width="450px" />
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use "../styles/variables" as *;
.main {
  margin-top: 5px;
  display: flex;
  justify-content: space-evenly;
  .text_div {
    font-family:serif;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    font-size: x-large;
    color: $heading_color;
    opacity: 0; 
    transform: translateY(20px); 
    animation: fadeInUp 1s forwards;
    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translateY(20px); 
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .heading_div {
      display: flex;
      flex-direction: column;
    }

    span {
      color: $sub_text_color;
      font-weight: 400;
      border-left: 2px solid $secondary-color;
      padding-left: 8px;
    }
    .btn{
        padding-top: 20px;
    }
  }
}
</style>
