import axios from 'axios';

export async function getPlaylists() {
    try {
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

        const responses = await axios.all(requests);
        return responses.map((response) => response.data.items[0]);
    } catch (error) {
        console.error(error);
        throw error;
    }
}
