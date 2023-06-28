<template>
  <div class="card">
    <h2>{{ video.index }} - {{ video.title }}</h2>
    <p>{{ video.description }}</p>
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
.card {
  margin: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 10px;
}

p {
  color: #666;
}
</style>
