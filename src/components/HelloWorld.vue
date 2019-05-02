<template>
  <div class="hello">
    <my-button @click="test">押してね</my-button>
  </div>
</template>

<script>
import MyButton from '@/components/MyButton'
export default {
  name: 'HelloWorld',
  components: {
    MyButton
  },
  methods: {
    test (e) {
      console.log(e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
