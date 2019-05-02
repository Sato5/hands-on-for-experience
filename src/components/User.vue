<template>
  <div class="user">
    <p v-once>{{user}}</p>
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
      user: ''
    }
  },
  created () {
    this.userObj()
  },
  methods: {
    userObj () {
      const auth = firebase.auth()
      if (auth.currentUser.email) {
        this.user = auth.currentUser.email
      } else if (auth.currentUser.displayName) {
        this.user = auth.currentUser.displayName
      } else {
        this.user = ''
      }
    },
    logout () {
      myFirebase.logout()
    }
  }
}
</script>

<style scoped>

</style>
