
//import needs 
import { createApp } from 'vue'



import { createRouter, createWebHistory } from 'vue-router';

//import css
import './input.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.min.css';


// data
import store from './components/store/store';



//import page
import App from './App.vue'
import Index from './components/page/Index.vue'
import Home from './components/page/Home.vue'
import SignIn from './components/page/SignIn.vue'
import Registration from './components/page/Registration.vue'
import Search_Result from './components/page/SearchResult.vue'
import Profile from './components/page/Profile.vue'
import About from './components/page/about.vue'
// const About = { template: '<div>About</div>' }

// const App = { template: '<div>App</div>' }
//create  router for map all page
const routes = [

    { path: '/', component: Index },
    { path: '/signin', component: SignIn },
    { path: '/registration', component: Registration },
    {
        path: '/home', name: 'user', component: Home
    },
    { path: '/profile', name: 'profile', component: Profile },
    { path: '/search-result', component: Search_Result },
    { path: '/about', component: About },
]


// ui
const vuetify = createVuetify({
    components,
    directives,
})

const router = createRouter({
    history: createWebHistory(),
    routes, // `routes: routes` 的寫法
})



createApp(App)
    .use(vuetify)
    .use(router)
    .use(store)
    .mount('#app');

