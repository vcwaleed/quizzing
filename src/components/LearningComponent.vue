<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FcReadingEbook } from "oh-vue-icons/icons";
import { IoHardwareChipOutline } from "oh-vue-icons/icons";
import { BiBarChartLine } from "oh-vue-icons/icons";
import AOS from "aos";
import "aos/dist/aos.css";

const learningSectionRef = ref(null);

const cardData = [
  { title: "1",
    icon:"fc-reading-ebook",
   sub_title: "Choose Your Subject",
    description: "Choose your favourite subject from the vast selection of the subject and continue your journey." },
  { title: "2", 
  icon:"io-hardware-chip-outline",
  sub_title: "Select the difficulty", 
  description: "Select difficulty of your choice and get the difficulty of questions according to your choice." },
  { title: "3", 
  icon:"bi-bar-chart-line",
  sub_title: "Increasing difficulty", 
  description: "Difficulty of question will increase for the upcoming question irrespective of the result of a previous question." },
];
onMounted(() => {
  AOS.init({ duration: 800, easing: "ease-out", once: true });
});

addIcons(FcReadingEbook ,IoHardwareChipOutline ,BiBarChartLine);
</script>

<template>
  <h1>Let’s Checkout Your <br /><span>Learning</span> Journey</h1>
  <section ref="learningSectionRef" class="wrapper">
    <div 
      v-for="(item, index) in cardData" 
      :key="index" 
      class="card" 
      data-aos="fade-up" 
      :data-aos-delay="index * 200"
    >
      
    <OhVueIcon :name="item.icon" style="font-size: 40px;" />
      <h3>{{ item.sub_title }}</h3>
      <p>{{ item.description }}</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../styles/variables" as *;

span {
  color: $secondary-color;
  font-weight: bold;
}

.wrapper {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-family: 'Trebuchet MS';
  
}

.card {
  width: 200px;
  background-color: $primary-color;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  font-family: 'Trebuchet MS';

  &:hover {
    transform: translateY(-5px) scale(1.05);
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
    color: $heading_color;
  }

  p {
    font-size: 14px;
    color: $sub_text_color;
  }
  
}

h1 {
  text-align: center;
}
</style>
