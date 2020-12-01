import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import VueRouter from 'vue-router';
import Post from './types/Post';
import User from './types/User';
import axios from 'axios';
import Login from './components/Login';
import Index from './components/Index';
import Browse from './components/Browse'


Vue.config.productionTip = false;
Vue.use(Vuex)
Vue.use(VueRouter)


const routes=[
    {path:'/', component: Login},
    {path:'/index', component : Index},
    {path:'/browse', component: Browse}
];
const router = new VueRouter({routes});

const store = new Vuex.Store({
    state: {
        posts:[],
        authors:[],
        user: new User("pl","ace","hold","er")
    },
    
    getters:{
        posts: state =>state.posts,
    },

    actions:{
        getUser({commit}){
            axios.get("https://private-517bb-wad20postit.apiary-mock.com/users/1")
                .then(response =>{
                    let user = new User(response.data);
                    commit('USER', user)
                }
            )
        },
        getPosts({commit}){
            axios.get("https://private-517bb-wad20postit.apiary-mock.com/posts")
                .then(response =>{
                    let data=  response.data;
                    let temp =[]
                    for (let i of data){
                        temp.push(new Post(i))
                    commit("POSTS", temp)
                    }
                })
        },
        getAuthors({commit}){
            axios.get("https://private-517bb-wad20postit.apiary-mock.com/profiles")
                .then(response =>{
                    let data = response.data
                    commit("AUTHORS", data)
                })
        }

    },

    mutations: {
        AUTHORS(state, data){
            state.authors = data
        },
        USER(state, data){
            state.user = data
        },
        POSTS(state, data){
            state.posts = data
        }
    }
});

new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app');
