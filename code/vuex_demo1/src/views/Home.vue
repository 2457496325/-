<template >
  <div class="home">
    

       <ul>
      <li v-for="m in list" :key="m.id">
        <a-list bordered :dataSource="list"></a-list>
    <router-link :to="{
      path:'/bowen1',
      query:{
        
        id:m.id,
        title:m.title,
    content:m.content,
      }
    }">
    {{m.title}}</router-link>
    </li>
    </ul>
  
       <button><router-link class="list-group-item" active-class="active" to="/newbowen" href="./newbowen.html">新建博文</router-link></button>
    
    <div>
      
    <router-view />
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import newbowen from '../views/newbowen.vue'
import bowen1 from '../views/bowen1.vue'

import{mapState}from'vuex'
export default {
  name: 'Home',
  data(){
    return{

 } },
 
 computed:{
             ...mapState(["inputValue8","inputValue10","inputValue6",'flag','list']),
             
            
             },
  components:{
         newbowen,
         bowen1,
        
  },
 
  }
</script>
<style>
.home{
  width: 500px;height: 500px;
}
</style>
