<template>
  <div>
    <h1>Playlist</h1>
    <div class="cards-container">
      <VideoCard v-for="video in videos" :key="video.id" :video="video" />
    </div>
    <div class="pagination">
      <button @click="loadMoreVideos" :disabled="isLoading">Charger plus de vidéos</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import VideoCard from '../components/VideoCard.vue';

export default {
  name: 'PlaylistView',
  components: {
    VideoCard,
  },
  data() {
    return {
      videos: [],
      nextPageToken: null,
      isLoading: false,
    };
  },
  mounted() {
    this.fetchPlaylist();
  },
  methods: {
    fetchPlaylist() {
      this.isLoading = true;

      axios
          .get('https://www.googleapis.com/youtube/v3/playlistItems', {
            params: {
              part: 'snippet',
              playlistId: 'PLOCyvJ3FWCn-uLNGCIlHH1kQCipSSVKtF',
              maxResults: 20,
              key: 'AIzaSyDO6MVswm6hZRTjdfWkD3LCisZQ5hL3P6U',
              pageToken: this.nextPageToken,
            },
          })
          .then((response) => {
            const fetchedVideos = response.data.items.map((item) => ({
              id: item.snippet.resourceId.videoId,
              index: item.snippet.position + 1,
              title: item.snippet.title,
              description: item.snippet.description,
            }));

            this.videos = [...this.videos, ...fetchedVideos];
            this.nextPageToken = response.data.nextPageToken;
            this.isLoading = false;
          })
          .catch((error) => {
            console.error(error);
            this.isLoading = false;
          });
    },
    loadMoreVideos() {
      if (this.nextPageToken) {
        this.fetchPlaylist();
      }
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

.pagination {
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
