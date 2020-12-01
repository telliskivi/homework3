<template>
  <div class="avatar-container">
    <img class="avatar" :src="user.pic" @click="makeVisible">
    <div class="drop-down-container" v-show='!isHidden'>
      <span id="user-name">{{user.email}}</span>
      <span id="user-email"></span>
      <span class="separator"></span>
      <span>
        <router-link :to="{path: '/browse' }">Browse</router-link>
      </span>
      <span class="separator"></span>
      <span>
        <a href="login.html">Log Out</a>
      </span>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'User',
        data: function () {
            return {
              isHidden: true,
          }
        },
        computed: {
            user: function () {
              return this.$store.state.user
            },
            fullname:function(){
              let fullname = this.$store.state.user.firstname + " "+this.$store.state.user.lastname
              return fullname
            }
        },
        methods:{
          makeVisible: function() {
            this.isHidden = !this.isHidden;
          }
        },
        mounted() {
          this.$store.dispatch("getUser");
        }

    }
</script>

<style scoped>




</style>