import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    plugins: [createPersistedState()],
    state() {
        return {
            playlistName: "",
        };
    },
    mutations: {
        setPlaylistName(state, newName) {
            state.playlistName = newName;
        },
    },
    actions: {
        updatePlaylistName({ commit }, newName) {
            commit("setPlaylistName", newName);
        },
    },
    getters: {
        getPlaylistName(state) {
            return state.playlistName;
        },
    },
});

export default store;
