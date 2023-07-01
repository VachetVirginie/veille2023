import axios from "axios";

export async function getPlaylists() {
    try {
        const apiKey = "AIzaSyDO6MVswm6hZRTjdfWkD3LCisZQ5hL3P6U";
        const playlistIds = ["PLOCyvJ3FWCn8ljPiCtr1qRX4EpN5H0lIL", "PLOCyvJ3FWCn-uLNGCIlHH1kQCipSSVKtF"];

        const requests = playlistIds.map((playlistId) =>
            axios.get("https://www.googleapis.com/youtube/v3/playlists", {
                params: {
                    key: apiKey,
                    part: "snippet",
                    id: playlistId,
                },
            }));

        const responses = await axios.all(requests);
        return responses.map((response) => response.data.items[0]);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function fetchPlaylist(videos, nextPageToken, isLoading, routeParams) {
    try {
        isLoading.value = true;

        const response = await axios.get("https://www.googleapis.com/youtube/v3/playlistItems", {
            params: {
                part: "snippet",
                playlistId: routeParams,
                maxResults: 20,
                key: "AIzaSyDO6MVswm6hZRTjdfWkD3LCisZQ5hL3P6U",
                pageToken: nextPageToken.value,
            },
        });

        const fetchedVideos = response.data.items.map((item) => ({
            id: item.snippet.resourceId.videoId,
            index: item.snippet.position + 1,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.high.url,
        }));

        videos.value = [...videos.value, ...fetchedVideos];
        nextPageToken.value = response.data.nextPageToken;
        isLoading.value = false;
    } catch (error) {
        console.error(error);
        isLoading.value = false;
    }
}
