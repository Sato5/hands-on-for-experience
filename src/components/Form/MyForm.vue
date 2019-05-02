<template>
  <div class="my-form">
    <span class="form-title">{{formMode}}</span>
    <div class="input-group">
      <email-input class="form-input" v-model="email"></email-input>
      <password-input class="form-input" v-model="pw"></password-input>
      <span class="error" v-show="!isPwLen">パスワードが短すぎます</span>
      <span class="error" v-show="!isPwUpper">大文字を入れてください</span>
      <span class="error" v-show="!isPwNum">数字を入れてください</span>
    </div>
    <div class="button-group">
      <email-button
        class="form-button"
        @click="submit('email')"
        :disabled="!valid"
      >{{appendFormMode('Email')}}</email-button>
      <twitter-button class="form-button" @click="submit('twitter')">{{appendFormMode('Twitter')}}</twitter-button>
      <git-hub-button class="form-button" @click="submit('github')">{{appendFormMode('GitHub')}}</git-hub-button>
    </div>
  </div>
</template>

<script>
import EmailInput from '@/components/Input/EmailInput'
import PasswordInput from '@/components/Input/PWInput'
import EmailButton from '@/components/Button/EmailButton'
import TwitterButton from '@/components/Button/TwitterButton'
import GitHubButton from '@/components/Button/GitHubButton'
export default {
  name: 'MyForm',
  props: {
    formMode: {
      required: true,
      default: 'sign in',
      type: String
    }
  },
  components: {
    EmailInput,
    PasswordInput,
    EmailButton,
    TwitterButton,
    GitHubButton
  },
  data () {
    return {
      email: '',
      pw: ''
    }
  },
  methods: {
    submit (submitType) {
      this.$emit('submit', {
        type: submitType,
        data: {
          email: this.email,
          pw: this.pw
        }
      })
    },
    appendFormMode (value) {
      if (!value) return ''
      value = value.toString()
      return this.formMode + ' By ' + value
    }
  },
  computed: {
    isPwUpper () {
      return this.pw.match(/[A-Z]+/) !== null
    },
    isPwNum () {
      return this.pw.match(/[0-9]+/) !== null
    },
    isPwLen () {
      return this.pw.length > 7
    },
    valid () {
      const emailNullValid = this.email !== '' && this.email !== null && this.email !== undefined
      const passNullValid = this.pw !== '' && this.pw !== null && this.pw !== undefined
      return this.isPwUpper && this.isPwNum && this.isPwLen && emailNullValid && passNullValid
    }
  }
}
</script>

<style scoped>
.my-form {
  font-family: fantasy;
  border: medium solid #BDBDBD;
  border-radius: 8px;
  padding: 32px;
}

.my-form,
.input-group,
.button-group {
  display: inline-grid;
}

.form-title {
  font-size: 32px;
}

.error {
  color: red;
  font: -webkit-small-control;
}

.form-input,
.form-button {
  margin: 8px 0px;
}

.input-group {
  margin-bottom: 32px;
}
</style>
