<template>
  <div class="sign-up">
    <router-link to="/signin">登録済みの方はこちらから</router-link>
    <my-form formMode="Sign Up" @submit="receive"></my-form>
  </div>
</template>

<script>
import myFirebase from '@/plugins/MyFirebase.js'
import MyForm from '@/components/Form/MyForm'
export default {
  name: 'SignUpPage',
  components: {
    MyForm
  },
  methods: {
    receive (submitData) {
      const type = submitData.type
      const email = submitData.data.email
      const pw = submitData.data.pw
      this.modeSwicher(type, email, pw)
    },
    modeSwicher (val, email, pw) {
      switch (val) {
        case 'email':
          myFirebase.emailSignUp(email, pw)
          break
        case 'twitter':
          myFirebase.twitterAuth()
          break
        case 'github':
          myFirebase.githubAuth()
          break
        default:
          console.log('error')
          break
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sign-up {
  display: inline-grid;
}
</style>
