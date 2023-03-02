<template>
  <br />
  <div class="centered">
    <slot></slot>
  </div>
</template>
<style lang="scss">
@import "../../styles/variables.scss";
.centered {
  display: flex;
  flex-direction: inherit;
  gap: 10px;
  justify-content: center;
  .v-btn {
    color: white;
    background-color: $hhn-blue;
  }
}
</style>
