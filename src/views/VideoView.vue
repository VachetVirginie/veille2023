<template>
  <div>
    <YoutubeVue3
      :videoid="videoId"
      :width="680"
      :height="520"
      class="mx-auto mt-12" />
    <router-link to="/">Retour à la playlist</router-link>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";

const videoId = ref(null);
const route = useRoute();
videoId.value = route.params.id;
</script>

