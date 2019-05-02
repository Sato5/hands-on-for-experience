import firebase from 'firebase'
import router from '@/router'

export default {
  init: (config) => {
    firebase.initializeApp(config)
  },
  emailSignUp: (email, pass) => {
    const auth = firebase.auth()
    auth.createUserWithEmailAndPassword(email, pass).then(res => {
      router.push('/user')
    }).catch(err => {
      alert(err.message)
    })
  },
  emailSignIn: (email, pass) => {
    const auth = firebase.auth()
    auth.signInWithEmailAndPassword(email, pass).then(res => {
      router.push('/user')
    }).catch(err => {
      alert(err.message)
    })
  },
  twitterAuth: () => {
    const provider = new firebase.auth.TwitterAuthProvider()
    firebase.auth().signInWithPopup(provider).then(res => {
      router.push('/user')
    }).catch(err => {
      alert(err.message)
    })
  },
  githubAuth: () => {
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithPopup(provider).then(res => {
      router.push('/user')
    }).catch(err => {
      alert(err.message)
    })
  },
  logout () {
    firebase.auth().signOut()
  }
}
