<template>
  <div>
    <YoutubeVue3 ref="youtube" :videoid="videoId"  :width="680" :height="520" class="mx-auto mt-12"/>
    <router-link to="/">Retour à la playlist</router-link>
  </div>
</template>

<script>
import { YoutubeVue3 } from 'youtube-vue3'
export default {
  name: 'VideoView',
  data() {
    return {
      video: null,
    };
  },
  components: {
    YoutubeVue3,
  },
  computed: {
    videoId() {
      return this.$route.params.id;
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
