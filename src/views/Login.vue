<template>
  <div>
    <h2>ログイン</h2>
    <label for = 'email'>Email</label>
    <input 
      id = 'email' 
      type = email 
      v-model="email">
    <br><br>
    <label for = 'password'>password</label>
    <input 
      id = 'password' 
      type = password 
      v-model="password">
  </div>
  <br><br>
  <button @click="login">送信</button>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
      login() {}
  }
}
</script>
