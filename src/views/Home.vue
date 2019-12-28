<template>
  <div class="container sm-auto">
    <NewGame />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import NewGame from "./NewGame.vue";

export default {
  name: "home",
  components: {
    NewGame
  }
};
</script>
