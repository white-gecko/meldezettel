<template>
  <div class="header is-blue has-text-centered">
      <img src="@/assets/thw-logo.png" height="60" width="60">
  </div>
</template>

<script>

export default {
  name: 'THWHeader'
}
</script>

<style>
.is-blue {
    background: linear-gradient(#1b62d8, #003399);
}
.header {
    height: 100px;
    margin-bottom: 20px;
    color: white;
    text-align: right;
    font-size: 50px;
    vertical-align: center;
    padding: 0.2em;
    font-family: Arial
}
</style>
