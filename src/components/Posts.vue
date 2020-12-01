<template>
    <div class="post-container">
        <div class="post" v-for="(posts,index) in post" :key="index">
            <div class="post-author">
                <span class="post-author-info">
                <img :src="posts.author[2]" class="post-author-picture" alt="Post author">
                <small class="post-author-name">{{posts.author[0]}} {{posts.author[1]}}</small>
                </span>
                <small>{{posts.cdate}}</small>
            </div>
            <div class ="post-content">
                <img v-if="posts.type==='image'" :src="posts.mediaurl" :alt="posts.description" class="post-img">
                <video v-if="posts.type==='video'" controls>
                    <source :src="posts.mediaurl">
                </video>
            </div>
            <div class="post-title">
                <strong>{{posts.description}}</strong>
            </div>
            <div class="post-actions">
                <Like :likes1 = posts.likes></Like>
            </div>
        </div>
    </div>
</template>

<script>
import Like from "./Like.vue"
export default {
    name:"Posts",
    components:{
        Like
    },
    computed:{
        post: function(){
            return this.$store.state.posts
        }
    },
    mounted(){
        this.$store.dispatch("getPosts")
    }
}
</script>

<style scoped>

.post-author-name{
    font-size: 17px;
}
.post-img{
    max-width: 100%;
    max-height: 100%;
    position: relative;
    display: inline-block;
    overflow: hidden;
    margin: 0;

}
.post-title{
    font-size: 20px;
}


</style>