<template>
  <div class="bowen1">
    <ul>
     
      <li>{{$route.query.title}}</li> 
      <li>
        {{$route.query.content}}
      </li>
    </ul>
    
<button>
<router-link :to="{
      path:'/changebowen',
      query:{
        
        id:$route.query.id,
        title:$route.query.title,
        content:$route.query.content
  
      }
    }">修改博文</router-link></button>
   <button @click="back($route.query.id)">删除</button>
  </div>
</template>
<script>

import changebowen from '../components/changebowen.vue'
import{mapState}from'vuex'
  export default{
      name:'bowen1',computed:{
             ...mapState(['inputValue8','inputValue9'])
             },
              components:{
                           changebowen
              },
              methods:{
                back(id){
                 this.$store.commit('backer',id);
                 this.$router.push({path:'/Home'});
                },
             }
              
            
}
        
  
  </script>
  <style>
  .bowen1{
    
  width: 500px;height: 500px;
}
  
  </style>