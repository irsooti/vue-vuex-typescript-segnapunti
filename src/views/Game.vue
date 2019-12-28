<template>
  <div>
    <PlayerSetup
      :onSubmit="onSubmit"
      :onAdd="onAdd"
      :playerDictionary="playerDictionary"
    />
    <Match />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  addGameRoomListener,
  removeGameRoomListener,
  addPlayers
} from "../api/game";

import PlayerSetup from "../components/PlayerSetup.vue";
import Match from "../components/Match.vue";

const lazyGameModule = () => import("../store/modules/gameModule");

export default Vue.extend({
  components: { PlayerSetup, Match },
  name: "Game",
  data() {
    return {
      isModuleRegistered: false,
      playerDictionary: {
        default: ""
      }
    };
  },

  computed: {
    completePlayerDictionary() {
      console.log(this.$store);
      return this.$store.getters["game/getRoom"] || this.$data.playerDictionary;
    }
  },
  mounted() {
    lazyGameModule().then(gameModule => {
      this.isModuleRegistered = true;
      console.log(gameModule);
      this.$store.registerModule("game", gameModule.default);
      // const listener = addGameRoomListener(this.$route.params.id);

      addGameRoomListener(this.$route.params.id)(
        "value",
        (snapshot: firebase.database.DataSnapshot) => {
          this.$store.dispatch("game/getGameRoom", snapshot.val());
        }
      );
    });
  },
  methods: {
    onAdd: function() {
      this.$set(this.playerDictionary, Date.now().toString(), "");
    },
    onSubmit(evt: Event) {
      evt.preventDefault();

      console.log(
        Object.keys(
          JSON.parse(JSON.stringify(this.$data.playerDictionary))
        ).map(m => (this.$data.playerDictionary as any)[m])
      );

      addPlayers(
        this.$route.params.id,
        Object.keys(
          JSON.parse(JSON.stringify(this.$data.playerDictionary))
        ).map(m => (this.$data.playerDictionary as any)[m])
      ).then(response => console.log(response));

      // this.$store.dispatch("game/setGameRoom", {
      //   key: this.$route.params.id,
      //   players: Object.keys(
      //     JSON.parse(JSON.stringify(this.$data.playerDictionary))
      //   ).map(m => (this.$data.playerDictionary as any)[m])
      // });
    }
  },
  beforeDestroy() {
    const listener = removeGameRoomListener(this.$route.params.id);
    listener("value", (snapshot: firebase.database.DataSnapshot) => {
      console.log("listener removed");
    });

    this.$store.unregisterModule("game");
  }
});
</script>
