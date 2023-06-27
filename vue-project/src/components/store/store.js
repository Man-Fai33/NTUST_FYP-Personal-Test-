
import { createStore } from 'vuex';

import { storePersistencePlugin } from './store-persistence';


const store = createStore({
    state: {
        user: {
            username: "",
            email: "",
            password: "",
            signin: false,
        },
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        clearUser(state) {
            const user = {
                username: "",
                email: "",
                password: "",
                signin: false,
            }
            state.user = user;
        },
    },
    actions: {
        updateUser({ commit }, user) {
            // Fetch user data and commit the result to the setUser mutation
            // Example async call:
            commit('setUser', user);
        },
    },
    getters: {
        getUser(state) {
            return state.user;
        },
    },
    plugins: [storePersistencePlugin],

});

export default store;

