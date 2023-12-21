<template>
<div class="app-container">
  <header>
    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>

.app-container{
  padding: 20px;
  
  & .wrapper{

    display: grid;
    place-items:center;

    margin-block: 2rem;

    & nav{
      display: flex;
      gap:10px;
    }
  }
}


</style>
