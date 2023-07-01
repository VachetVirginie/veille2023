<template>
  <div>
    <h2>Liste des playlists</h2>
    <ul>
      <li
        v-for="playlist in playlists"
        :key="playlist.id">
        <a @click="showPlaylistVideos(playlist.id, playlist.snippet.title)">{{ playlist.snippet.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {
    ref, onMounted
} from "vue";
import { useRouter } from "vue-router";
import { getPlaylists } from "@/utils/usePlaylists";
import { useStore } from "vuex";

const playlists = ref([]);
const router = useRouter();
const store = useStore();
const showPlaylistVideos = ref(null);

const fetchPlaylists = async () => {
    try {
        playlists.value = await getPlaylists();
    } catch (error) {
        console.error(error);
    }
};
showPlaylistVideos.value = (playlistId, playlistName) => {
    store.dispatch("updatePlaylistName", playlistName);
    router.push(`/playlist/${playlistId}`);
};

onMounted(async () => {
    await fetchPlaylists();
});
</script>

