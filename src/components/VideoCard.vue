<template>
  <div class="m-5 p-5 bg-gray-200 rounded min-w-[40%]">
    <div>
      <h2 class="flex flex-wrap">{{ props.video.index }} - {{ props.video.title }}</h2>
      <img
        :src="props.video.thumbnail"
        :alt="props.video.title">
    </div>
    <router-link :to="`/video/${props.video.id}`">Regarder la vidéo</router-link>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    video: {
        type: Object,
        required: true,
    },
});
</script>

<style scoped>
h2 {
  margin-bottom: 10px;
}

p {
  color: #666;
}
</style>
