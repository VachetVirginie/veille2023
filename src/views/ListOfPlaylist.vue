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
import { getPlaylists } from "@/composables/playlists";

export default {
  data() {
    return {
      playlists: []
    };
  },
  computed: {
    playlistName() {
      return this.$store.state.playlistName;
    }
  },
  mounted() {
    this.getPlaylists();
  },
  methods: {
    async getPlaylists() {
      try {
        this.playlists = await getPlaylists();
      } catch (error) {
        console.error(error);
      }
    },
    showPlaylistVideos(playlistId, playlistName) {
      this.$store.dispatch('updatePlaylistName', playlistName);
      this.$router.push(`/playlist/${playlistId}`);
    }
  }
};
</script>
