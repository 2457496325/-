<template>
  <div class="home">
   <p>标题: <input :placeholder="$route.query.title"    @change='valuechange8'></p>
    <p>内容: <input :placeholder="$route.query.content"   @change='valuechange9'></p>
    <button @click="keep2($route.query.id)">
    <router-link :to="{
      path:'/bowen1',
      query:{
        
        id:$route.query.id,
        title:inputValue8,
        content:inputValue9
  
      }
    }">保存</router-link></button>
  
  </div>
</template>

<script>
// @ is an alias to /src

import{mapState}from'vuex'
export default {
  name: 'changebowen',

  data(){
    return{

 } 
 },
  computed:{
             ...mapState(['inputValue8','inputValue9'])
            },
  methods:{
    keep2(id){
       this.$store.commit('backer2',id);

    },
    valuechange8(c){
this.$store.commit('setInputValue8',c.target.value)
    },
    valuechange9(c){
this.$store.commit('setInputValue9',c.target.value)
    }
  }
  }
</script>
<style>
.changebowen{
  width: 500px;height: 500px;
}