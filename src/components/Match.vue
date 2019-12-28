<template>
  <div class="flex mb-4">
    <div
      v-for="(item, index) in players"
      :key="index"
      class="flex-1 bg-gray-400 h-12"
    >
      Dio
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  //   props: {
  //     players: { type: [String] }
  //   },
  computed: {
    players() {
      return this.$store.getters["game/getRoom"].players;
    }
  }
});
</script>
