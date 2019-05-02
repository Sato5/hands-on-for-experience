<template>
  <button class="my-button" @click.end="clickFunc">
    <!-- slotはコンポーネントの間に入れたDOMが入るところ -->
    <!-- <my-button>おしてね</my-button> -->
    <!-- 上の例だとボタンの中におしてねが書かれた状態でレンダリングされます -->
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'GitHubButton',
  methods: {
    clickFunc (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped>
.my-button {
  font-family: fantasy;
  border: none;
  padding: 8px 32px 8px 32px;
  border-radius: 8px;
  font-size: 100%;
  width: 256px;
  height: 36px;
}
.my-button:hover {
  background-color: #BDBDBD
}
.my-button:active {
  background-color: #757575
}
</style>
