<template>
  <div class="search-block">
    <input type="text" class="input" />
    <button class="button">
      <img src="~static/search-icon.svg" class="icon" width="20" height="20" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.search-block {
  @include flex-v-center;

  width: 320px;

  @include mobile {
    width: 100%;
  }
}

.input {
  @include reset-input;

  height: 40px;
  width: 100%;

  padding: 5px 45px 5px 20px;

  border-radius: $default-border;
  box-shadow: $default-box-shadow;
}

.button {
  @include reset-button;
  cursor: pointer;

  margin-left: -40px;
}
</style>
