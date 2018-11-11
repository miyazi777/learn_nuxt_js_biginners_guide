<template>
  <div>
    <p>test</p>
    <p>{{ isLoading }}</p>
    <button @click="toggleIsLoading">toggle</button>
    <div>
      <h2>users</h2>
      <ul v-for="user in users">
        <li>{{ user }}</li>
      </ul>
      <div>
        <input type="text" v-model="user"></input>
        <button @click="addUser">addUser</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      user: ''
    }
  },
  computed: {
    isLoading() { return this.$store.state.isLoading },
    users() { return this.$store.state.users.list }
  },
  methods: {
    toggleIsLoading (value) {
      this.$store.commit('toggleIsLoading')
    },
    addUser(e) {
      this.$store.commit('users/addUser', this.user)
    }
  }
}
</script>

