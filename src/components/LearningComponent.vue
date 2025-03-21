<script setup>
const cardData = [
  {
    title: '1',
    sub_title: "Choose Your Subject",
    description: "Choose your favourite subject from the vast selection of the subject and continue your journey.",
  },
  {
    title: '2',
    sub_title: "Select the difficulty",
    description: "Select difficulty of your choice and get the difficulty of questions according to your choice.",
  },
  {
    title: '3',
    sub_title: "Increasing difficulty",
    description: "Difficulty of question will increase for the upcoming question irrespective of the result of a previous question.",
  },
];
</script>

<template>
  <h1>Let’s Checkout Your <br/> <span>Learning</span> Journey</h1>
  <section class="wrapper">
    <div v-for="(item, index) in cardData" :key="index" class="card" :style="{ animationDelay: `${index * 0.2}s` }">
      <h2>{{ item.title }}</h2>
      <h3>{{ item.sub_title }}</h3>
      <p>{{ item.description }}</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../styles/variables' as *;

span {
  color: $secondary-color;
  font-weight: bold;
}

.wrapper {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  flex-wrap: wrap;

  .card {
    width: 200px;
    background-color: $primary-color;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    opacity: 0;
    transform: translateY(20px); 
    animation: fadeInUp 1s forwards;
    transition: transform 0.3s ease-in-out, scale 0.3s ease;

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
}

h1 {
  text-align: center;
}

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
</style>
