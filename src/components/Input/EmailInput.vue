<template>
  <div class="form-input">
    <label>Email</label>
    <input type="email" v-model="email">
  </div>
</template>

<script>
export default {
  name: 'EmailInput',
  props: {
    value: {
      type: String,
      required: true,
      default: ''
    }
  },
  computed: {
    email: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style scoped>
.form-input {
  display:  inline-grid;
}
label {
  font-size: 16px;
  font: bold;
  text-align: left;
}
input {
  border: none;
  background-color: #FAFAFA;
  width: 256px;
  height: 32px;
  border-radius: 8px;
  border: medium solid #BDBDBD;
  font-size: 100%;
}
</style>
