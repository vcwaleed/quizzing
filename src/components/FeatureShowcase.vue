<script setup>
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { GiCube } from "oh-vue-icons/icons";
import { BiBook } from "oh-vue-icons/icons";
import { BiFilm } from "oh-vue-icons/icons";
addIcons(GiCube , BiBook , BiFilm);
const cardData = [
  {
    icon: "gi-cube",
    title: "3D Coverage",
    description: "3-dimensional coverage of all questions related to a particular topic.",
    iconColor: "#ffafd5",
    bgColor: "#ffe7f2", 

  },
  {
    icon: "bi-book",
    title: "Plenty of Subjects",
    description: "Plenty of subjects to choose from, e.g., Computer Language, Engineering, etc.",
    iconColor: "#6b9de7",
    bgColor: "#e5f0ff",
  },
  {
    icon: "bi-film",
    title: "Detailed Solutions",
    description: "Detailed explanation of solutions for a deeper understanding of topics.",
    iconColor: "#499758",
    bgColor: "#ebfef5",
  }
];

</script>
<template>
  <section class="wrapper">
    <div class="svg_div">
      <svg height="150" width="200" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 0,50 C 40,90, 100,20, 150,100"
          stroke="url(#gradient)"
          stroke-width="3"
          fill="transparent"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#00ff99" />
            <stop offset="100%" stop-color="#00aaff" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div class="text-wrapper">
      <h2>Quizzy comes with</h2>
      <h2>amazing <span class="highlight">features</span> like:</h2>
    </div>
  </section>
  <section class="main-card">
    <div 
      v-for="(item, index) in cardData" 
      :key="index" 
      class="card"
    >
      <div class="icon" :style="{ backgroundColor: item.bgColor }">
        <OhVueIcon :name="item.icon" class="custom-icon" :style="{ color: item.iconColor } " />
      </div>
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../styles/variables' as * ;
.main-card {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 40px;
}
.card {
  width: 180px;
  background-color: $primary-color;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-bottom: 10px;

    .custom-icon {
      font-size: 90px;
    }
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
.wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  padding: 40px;
}

.svg_div {
  position: absolute;
  left: 400px;
  top: 10%;
  transform: translateY(-50%);
}

.text-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  margin-left: 500px;
}

h2 {
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  font-family: "Poppins", sans-serif;
}

.highlight {
  color: #00ff99;
  font-weight: bold;
}
</style>
