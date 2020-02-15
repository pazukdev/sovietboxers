<template id="app">
  <div id="main-div">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
  name: 'app'
}
</script>

<style>
  * {
    margin: auto;
    color: #909090;
  }

  #main-div {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: black;
  }

  table, button, select, input {
    text-align: center;
  }

  table, button input {
    width: 100%;
  }

  table {
    height: 100%;
  }

  hr, button, input {
    background: #808080;
  }

  input {
    background: #617D89;
  }

  button, select, input {
    border-radius: 4px;
    border: none;
  }

  input {
    height: 52px;
  }

  button, label {
    min-height: 52px;
    max-height: 92px;
    color: #050505;
  }

  select {
    background: initial;
    font-size: medium;
  }

  option {
    background: #212121;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  summary {
    text-align: left;
  }
</style>
