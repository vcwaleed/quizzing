<script setup>

</script>
<template>
    <section class="footer">
        <div class="logo_div">
      <img src="../assets/logo.png" width="55px" />
      <span>Quizzy</span>
    </div>
    <div class="social-icons">
        <img src="../assets/internet.svg" width="40px"/>
        <img src="../assets/instagram.svg" width="40px"/>
        <img src="../assets/linkedin.svg" width="40px"/>

    </div>
    </section>
    
</template>
<style scoped lang="scss">
@use '../styles/variables' as * ;
.footer{
  display: flex;
  background-color: #fdfdfd;
  justify-content: space-between;
  padding: 50px;
  margin-top: 40px;
  .logo_div {
    display: flex;
    align-items: center;
    
    span {
      padding-left: 8px;
      font-weight: lighter;
      font-size: x-large;
      font-family: sans-serif;
      color: $title_col;
    }
  }
  .social-icons{
    display: flex;
    gap: 10px;
  }
}
</style>