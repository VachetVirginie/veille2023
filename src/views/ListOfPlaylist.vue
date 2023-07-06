<template>
  <div>
    <h2>Liste des playlists</h2>
    <div class="flex flex-wrap mx-auto">
      <v-card
        v-for="playlist in playlists"
        :key="playlist.id"
        width="400"
        height="200"
        color="grey-darken-4"
        class="mx-auto my-[10%] border"
        border
        @click="showPlaylistVideos(playlist.id, playlist.snippet.title)">
        <v-card-title class="my-[15%]"> {{ playlist.snippet.title }}</v-card-title>
      </v-card>
    </div>
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

