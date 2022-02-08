<template>
  <div class="log">
    <div>
   <p>账号: <input  placeholder="请输入账号"  @change='valuechange12'></p>
    <p>密码: <input type="password"   placeholder="请输入密码" @change='valuechange13'></p>
    <button @click="logs(list2)" >登录</button>
    </div>
     
  </div>
</template>

<script>
// @ is an alias to /src

import{mapState}from'vuex'
export default {
  name: 'log',

  data(){
    return{

 } 
 },
 
  computed:{
             ...mapState(['inputValue12','inputValue13','list2'])
            },
  methods:{
    logs(list2){
        var flag=0;
           list2.forEach((n)=>{
               if(n.id==this.inputValue12){
                   if(n.password==this.inputValue13){
                       flag=1
                   }
                      
               }   
           })
           if(flag==1){alert('登录成功') 
           this.$store.commit('guard',flag);
                        this.$router.push({path:'/Home'});}
                        else{alert('用户名或密码错误')}
                       

           },
       

   
    valuechange12(c){
this.$store.commit('setInputValue12',c.target.value)
    },
    valuechange13(c){
this.$store.commit('setInputValue13',c.target.value)
    }
 
  }
  }
</script>
<style>
.log{
   background-color:rgb(75, 185, 236);width:300px;text-align:center;height: 200px; justify-content: center;display: flex;
        align-items: center; 
}
</style>