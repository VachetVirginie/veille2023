<template>
  <div>
    <h2>{{ video.title }}</h2>
    <p>{{ video.description }}</p>
    <iframe
        width="560"
        height="315"
        :src="`https://www.youtube.com/embed/${video.id}`"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    ></iframe>
    <router-link to="/">Retour à la playlist</router-link>
  </div>
</template>

<script>
export default {
  name: 'Video',
  data() {
    return {
      video: null,
    };
  },
  mounted() {
    this.fetchVideo();
  },
  methods: {
    fetchVideo() {
      const videoId = this.$route.params.id;
      // You can use Axios to fetch the video details by ID if needed
      this.video = {
        id: videoId,
        title: 'Video Title',
        description: 'Video Description',
      };
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
