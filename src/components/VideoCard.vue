<template>
  <div class="m-5 p-5 bg-gray-200 rounded min-w-[40%]">
    <div>
      <h2 class="flex flex-wrap">{{ video.index }} - {{ video.title }}</h2>
      <img :src="video.thumbnail" :alt="video.title" />
    </div>
    <router-link :to="`/video/${video.id}`">Regarder la vidéo</router-link>
  </div>
</template>

<script>
export default {
  name: 'VideoCard',
  props: {
    video: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 10px;
}

p {
  color: #666;
}
</style>
