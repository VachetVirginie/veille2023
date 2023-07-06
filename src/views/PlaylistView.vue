<template>
  <div>
    <h1>{{ playlistName }}</h1>
    <div class="cards-container">
      <VideoCard
        v-for="video in videos"
        :key="video.id"
        :video="video" />
    </div>
    <div class="pagination">
      <button
        :disabled="isLoading"
        @click="loadMoreVideos">
        Charger plus de vidéos
      </button>
    </div>
  </div>
</template>

<script setup>
import VideoCard from "../components/VideoCard.vue";
import { useStore } from "vuex";
import { getPlaylistItems } from "@/utils/usePlaylists";
import {
    ref, onMounted, computed
} from "vue";
import {useRoute} from "vue-router";

const router = useRoute();
const store = useStore();
const videos = ref([]);
const nextPageToken = ref(null);
const isLoading = ref(false);

const playlistName = computed(() => store.state.playlistName);

const loadMoreVideos = () => {
    if (nextPageToken.value) {
        getPlaylistItems(videos, nextPageToken, isLoading, router.params.id);
    }
};

onMounted(() => {
    getPlaylistItems(videos, nextPageToken, isLoading, router.params.id);
});
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
</style>
