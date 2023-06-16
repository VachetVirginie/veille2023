<template>
  <div>
    <h1>Playlist</h1>
    <div class="cards-container">
      <VideoCard v-for="video in videos" :key="video.id" :video="video" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import VideoCard from '../components/VideoCard.vue';

export default {
  name: 'Playlist',
  components: {
    VideoCard,
  },
  data() {
    return {
      videos: [],
    };
  },
  mounted() {
    this.fetchPlaylist();
  },
  methods: {
    fetchPlaylist() {
      axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
        params: {
          part: 'snippet',
          playlistId: 'YOUR_PLAYLIST_ID',
          maxResults: 10,
          key: 'YOUR_YOUTUBE_API_KEY',
        },
      })
          .then((response) => {
            this.videos = response.data.items.map((item) => ({
              id: item.snippet.resourceId.videoId,
              title: item.snippet.title,
              description: item.snippet.description,
            }));
          })
          .catch((error) => {
            console.error(error);
          });
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
