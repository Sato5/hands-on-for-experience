<template>
  <div class="form-input">
    <label>PassWord</label>
    <input type="password" v-model="pswd">
  </div>
</template>

<script>
export default {
  name: 'UserNameInput',
  props: {
    value: {
      type: String,
      required: true,
      default: ''
    }
  },
  computed: {
    pswd: {
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
