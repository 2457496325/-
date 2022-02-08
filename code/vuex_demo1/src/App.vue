<template>
  <div >
    <div  class="l">
      
      <he></he>
       
       <button><router-link class="list-group-item" active-class="active" to="/log" href="./log.html">登录</router-link></button>
    <button><router-link class="list-group-item" active-class="active" to="/register" href="./register.html">注册</router-link></button>
    <p> <router-link class="list-group-item" active-class="active" to="/Home" href="./Home.html">主页</router-link></p>
    <div id="content" class="c"><router-view/></div>
   
      
    <foot></foot>
    </div>
   
  </div>
</template>

<script>

import he from'./components/he.vue'
import foot from './components/foot.vue'

export  default{
  name:'App',
  data(){
    return{

    }
  },
  components:{
         he,
         foot
       
     } 

}

</script>
<style >
.c{
 
	
		height:520px;width:1250px;display: flex;
       justify-content: center;
        align-items: center;

  
	}
  .l{
      background-color: rgb(105, 178, 207);
  }

</style>