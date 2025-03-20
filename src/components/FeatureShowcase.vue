<script setup></script>
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

</template>

<style scoped lang="scss">
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
