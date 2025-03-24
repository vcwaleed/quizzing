<script setup>
import { ref, onMounted } from "vue";
import ButtonComponent from "./ButtonComponent.vue";

const text = ref(""); 
const fullText = ["Learn", "New concepts Each day"];
const typingSpeed = 100;
const lineBreakDelay = 500;

onMounted(async () => {
  for (let i = 0; i < fullText.length; i++) {
    await typeLine(fullText[i]);
    if (i < fullText.length - 1) text.value += "<br/>";
    await new Promise((resolve) => setTimeout(resolve, lineBreakDelay));
  }
});

const typeLine = async (line) => {
  for (let i = 0; i < line.length; i++) {
    text.value += line[i];
    await new Promise((resolve) => setTimeout(resolve, typingSpeed));
  }
};
</script>

<template>
  <section class="main">
    <div class="text_div">
      <div class="heading_div">
        <h2 v-html="text" class="typing"></h2>
      </div>
      <span> We help you prepare for exams and quizzes</span>
      <div class="btn">
        <ButtonComponent buttonType="secondary" buttonSize="medium">
          Start Solving
        </ButtonComponent>
      </div>
    </div>
    <div class="img_div">
      <img src="../assets/banner.png" width="450px" class="animated-img" />
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
    font-family: 'Trebuchet MS';
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

    .typing {
      font-weight: bold;
      white-space: pre-wrap;
      overflow: hidden;
      display: inline-block;
    }

    span {
      color: $sub_text_color;
      font-weight: 400;
      border-left: 2px solid $secondary-color;
      padding-left: 8px;
    }

    .btn {
      padding-top: 20px;
    }
  }

  .img_div {
    .animated-img {
      opacity: 0;
      transform: translateX(50px);
      animation: fadeInSlide 1s ease-out forwards 1s;
    }
  }

  @keyframes fadeInSlide {
    0% {
      opacity: 0;
      transform: translateX(50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
}
</style>
