<template>
  <form @submit="onSubmit">
    <input
      name="alias"
      v-model="message"
      class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
      type="text"
      placeholder="New game"
    />
    <div>{{ message }}</div>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import { createGame } from "../api/game";
export default Vue.extend({
  name: "NewGame",
  data: function() {
    return {
      message: ""
    };
  },
  methods: {
    onSubmit: async function(evt: Event) {
      evt.preventDefault();
      console.log(new FormData(evt.target as HTMLFormElement));
      const gameId = await createGame(this.message);
      if (gameId) {
        this.$router.push(gameId);
      }
    }
  }
});
</script>
