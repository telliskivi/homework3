<template>
    <button type="button" name="like" @click="setClicked" v-bind:class="{ 'background-color':buttoncolor}" class="like-button">{{likes1}}</button>
</template>

<script>

export default {
    name:"Likes",
    props: ['likes1'],
    data: function(){
        return{
        buttoncolor: "",
        clicked:false,
        }
    },
    computed:{
        
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
        this.$store.dispatch("getPosts")
    }
    
}
</script>

<style scoped>


</style>