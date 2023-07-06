<template>
  <div class="rounded min-w-[40%]">
    <v-card
      color="grey-darken-4"
      class="mx-auto my-[10%]"
      border
      @click="showPlaylistVideos(playlist.id, playlist.snippet.title)">
      <v-card-title class="my-[15%]"> {{ props.video.index }} - {{ props.video.title }}</v-card-title>
      <v-card-text>
        <img
          :src="props.video.thumbnail"
          :alt="props.video.title">
      </v-card-text>
      <v-card-actions class="text-center">
        <router-link :to="`/video/${props.video.id}`">Regarder la vidéo</router-link>
      </v-card-actions>
    </v-card>
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
