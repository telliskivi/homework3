<template>
<section>
    <NavBar></NavBar>
    <section class='main-container'>
        <div class="profile" v-for="(author, index) in authors" :key="index">
        <img :src="author.avatar">
        <h2 class="author-name">
            {{author.firstname +" "+author.lastname}}
        </h2>
        <FollowButton></FollowButton>
            </div>
    </section>
</section>
</template>

<script>
import FollowButton from './FollowButton.vue'
import NavBar from './NavBar.vue'
export default {
    data: function(){
        return{
            clicked:false,
            buttoncolor: "",
        }
    },
    components:{
        NavBar,
        FollowButton
    },
    computed:{
        authors: function(){
            return this.$store.state.authors
        }
    },
    methods:{
        setClicked: function(){
            this.clicked=!this.clicked
            if(this.clicked){
                this.buttoncolor = "darkblue"
            }
            else{
                this.buttoncolor=""
            }
            
        }
        

    },
    mounted(){
        this.$store.dispatch("getAuthors")
    }
}
</script>

<style scoped>

.main-container{
    height: 90vh;
}
</style>