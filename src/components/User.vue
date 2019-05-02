<template>
  <div class="user">
    <p>{{user}}</p>
    <my-button @click="logout">log out</my-button>
  </div>
</template>

<script>
import firebase from 'firebase'
import myFirebase from '@/plugins/MyFirebase.js'

import MyButton from '@/components/Button/MyButton'
export default {
  name: 'User',
  components: {
    MyButton
  },
  data () {
    return {
      user: null
    }
  },
  created () {
    this.userObj()
  },
  methods: {
    userObj () {
      const auth = firebase.auth()
      this.user = auth.currentUser.email || auth.currentUser.displayName
    },
    logout () {
      myFirebase.logout()
    }
  }
}
</script>

<style scoped>

</style>
