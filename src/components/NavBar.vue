<template>
  <nav>
      <div class="logo-container">
        <img src="../assets/logo.png" alt="postIt">
      </div>
      <div class="search-container">
        <input type="text" name="search"><button type="button">Search</button>
      </div>
    <Dropdown></Dropdown>
  </nav>
</template>

<script>
import Dropdown from './Dropdown';
export default {
  name: 'navbar',
  components: {
    Dropdown
  },
  data () {
    return {
      services: [
        {
          title: 'Web',
          link: '#'
        },
        {
          title: 'Design',
          link:'#'
        },
        {
          title: 'Videos',
          link: '#'
        }
      ]
    }
  }
}
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
}
nav .menu-item {
  color: #FFF;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}
nav .menu-item.active,
nav .menu-item:hover {
  background-color: #444;
  border-bottom-color: #FF5858;
}
nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>

