<template>
  <div>
    <h2>Please, type the name of the players</h2>
    <form class="w-full max-w-sm" @submit="onSubmit">
      <div
        v-for="(item, index, counter) in playerDictionary"
        v-bind:key="counter"
      >
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              {{ counter + 1 }}
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              v-model="playerDictionary[index]"
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
            />
          </div>
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button
            class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            @click="onAdd"
          >
            Add more
          </button>
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button
            class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            @click="onSubmit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PlayerSetup",
  props: {
    playerDictionary: Object,
    onSubmit: { type: Function },
    onAdd: { type: Function }
  }
});
</script>
