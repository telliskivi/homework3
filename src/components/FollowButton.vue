<template>
    <button type="button" @click="setClicked" v-bind:style="{ 'background-color':buttoncolor, 'color':color, 'border':2+'px'+' solid'+' purple'}" class="follow-button">{{text}}</button>
</template>

<script>

export default {
    name:"Likes",
    data: function(){
        return{
        buttoncolor: "",
        clicked:false,
        color:"white",
        text:"Follow"
        }
    },
    computed:{
        
    },
    methods:{
        setClicked: function(){
            this.clicked=!this.clicked
            if(this.clicked){
                this.buttoncolor = "white"
                this.color="purple"
                this.text="Followed"
            }
            else{
                this.buttoncolor=""
                this.color="white"
                this.text="Follow"
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