<!-- App.vue -->
<template>
  <div>
    <header>
      <h1 class="pageTitle">Hello World</h1>
    </header>

    <!-- Add two buttons -->
    <button @click="handleButtonClick('Button 1')">Button 1</button>
    <router-link to="/register">
      <button>Button 2</button>
    </router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    handleButtonClick(buttonName) {
      alert(`Clicked ${buttonName}`);
    },
  },
};
</script>

<style>
/* Add your style definitions here */

header {
  background-color: #3498db;
  color: #ffffff;
  padding: 10px;
  text-align: center;
}

.pageTitle {
  font-size: 24px;
  margin-bottom: 10px;
}

button {
  background-color: #2ecc71;
  color: #ffffff;
  padding: 10px 15px;
  margin: 5px;
  border: none;
  cursor: pointer;
}
</style>