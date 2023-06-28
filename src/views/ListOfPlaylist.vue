<template>
  <div>
    <h2>Liste des playlists</h2>
    <ul>
      <li v-for="playlist in playlists" :key="playlist.id">
        <a @click="showPlaylistVideos(playlist.id, playlist.snippet.title)">{{ playlist.snippet.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      playlists: []
    };
  },
  computed: {
    ...mapState(['playlistName']),
  },
  mounted() {
    this.fetchPlaylists();
  },
  methods: {
    ...mapActions(['updatePlaylistName']),
    fetchPlaylists() {
      const apiKey = 'AIzaSyDO6MVswm6hZRTjdfWkD3LCisZQ5hL3P6U';
      const playlistIds = ['PLOCyvJ3FWCn8ljPiCtr1qRX4EpN5H0lIL', 'PLOCyvJ3FWCn-uLNGCIlHH1kQCipSSVKtF'];

      const requests = playlistIds.map((playlistId) =>
          axios.get('https://www.googleapis.com/youtube/v3/playlists', {
            params: {
              key: apiKey,
              part: 'snippet',
              id: playlistId,
            },
          })
      );

      axios
          .all(requests)
          .then(axios.spread((...responses) => {
            this.playlists = responses.map((response) => response.data.items[0]);
          }))
          .catch((error) => {
            console.error(error);
          });
    },
    showPlaylistVideos(playlistId, playlistName) {
      this.$store.dispatch('updatePlaylistName', playlistName)
      window.location.href = `/playlist/${playlistId}`;
    }
  },
};
</script>
