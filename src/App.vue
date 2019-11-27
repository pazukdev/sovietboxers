<template id="app">
  <div id="main-div">
    <Website></Website>
  </div>
</template>

<script>
  import Website from "@/components/Website";

  export default {
  name: 'app',

  components: {
    Website
  }
}
</script>

<style>
  * {
    margin: 0;
    color: #909090;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #main-div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: black;
  }

  #screen {
    overflow: auto;
    background-color: #212121;
    color: #808080;
    width: 480px;
    height: 800px;
    border-radius: 10px;

  }

  @media only screen and (max-width: 640px) {

  }

  table, button, select, input {
    text-align: center;
  }

  table, button, select, input {
    width: 100%;
  }

  table {
    height: 100%;
  }

  hr, button, select, input {
    background: #808080;
  }

  input {
    background: #617D89;
  }

  button, select, input {
    border-radius: 4px;
    border: none;
  }

  select, input {
    height: 52px;
  }

  button, label {
    min-height: 52px;
    max-height: 92px;
    color: #050505;
  }

  table {
    border-spacing: 6px;
    border-collapse: separate;
  }

  th {
    font-weight: normal;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  summary {
    text-align: left;
  }
</style>
