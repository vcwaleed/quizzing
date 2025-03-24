<script setup>
import ButtonComponent from "./ButtonComponent.vue";

const handleButtonClick = () => {
  console.log('Button clicked via prop method!');
};

const Navbar_links = [
{ name: 'Home', path: '/' },
  { name: 'Create Quiz', path: '/createquiz' },
  { name: 'Give Quiz', path: '/givequiz' },
];
</script>

<template>
  <section class="nav_bar">
    <div class="logo_div">
      <img src="../assets/logo.png" width="55px" />
      <span>Quizzy</span>
    </div>
    <div class="context_div">
      <div class="link_div">
        <ul>
          <li v-for="(item, index) in Navbar_links" :key="index">
            <a :href="item.path">{{ item.name }}</a>
          </li>
        </ul>
      </div>
      <div>
        <ButtonComponent
          buttonType="primary"
          buttonSize="large"
          :action="handleButtonClick"
          >Login</ButtonComponent
        >
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;

.nav_bar {
  display: flex;
  justify-content: space-between;
  padding-left: 50px;
  padding-right: 50px;
  
  .logo_div {
    display: flex;
    align-items: center;
    
    span {
      padding-left: 8px;
      font-weight: lighter;
      font-size: x-large;
      font-family: 'Trebuchet MS';
      color: $title_col;
    }
  }

  .context_div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    .link_div {
      display: flex;
      flex-direction: row;
      color: $sub_text_color;
      padding-right: 80px;
      font-family: 'Trebuchet MS';
      font-weight: lighter;

      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        
        li {
          display: inline-block;
          margin-right: 30px;  

          a {
            text-decoration: none;
            color: inherit;  
            font-weight: lighter;
            transition: color 0.3s ease, background-color 0.3s ease;
            
            &:hover {
              
              color:  $secondary-color;
              cursor: pointer;
            
            }
          }
        }
      }
    }
  }
}
</style>
