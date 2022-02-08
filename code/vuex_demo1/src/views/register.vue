<template>
  <div class="register">
   <p>账号: <a-input placeholder="请输入账号"  @change='valuechange10'></a-input></p>
    <p>密码: <a-input type="password" placeholder="请输入密码"  @change='valuechange11'></a-input></p>
      <p>手机号: <a-input placeholder="请输入手机号"  @change='valuechange14'></a-input></p><button>发送验证码</button>
        <p>验证码: <a-input placeholder="请输入验证码"  @change='valuechange15'></a-input></p>
    <button @click="registers(list2)">注册</button>
  </div>
</template>

<script>
// @ is an alias to /src

import{mapState}from'vuex'
export default {
  name: 'register',
  data(){
    return{}

 },
 computed:{
             ...mapState(["inputValue10","inputValue11","inputValue14","inputValue15","list2"]),
            
             },
 
 
  methods:{
    registers(list2){
        var flag=0;
      if(this.inputValue10.trim().length<=0||this.inputValue11.trim().length<=0||this.inputValue14.trim().length<=0||this.inputValue15.trim().length<=0){
        return this.$message.warning('文本框内容不能为空!')

      }
      else{list2.forEach((n)=>{
               if(n.id==this.inputValue10){
              
                       flag=1                     
               }   
           })
           if(flag==1){alert('用户名已被占用') }
        if(flag==0){
            this.$store.commit('addItem2');
      alert('注册成功');
 this.$router.push({path:'/log'});}
}
     
            

    },
     valuechange10(c){
this.$store.commit('setInputValue10',c.target.value)
    },
    valuechange11(c){
this.$store.commit('setInputValue11',c.target.value)
    },valuechange14(c){
this.$store.commit('setInputValue14',c.target.value)
    },
    valuechange15(c){
this.$store.commit('setInputValue15',c.target.value)
    },
  }
  }
</script>
<style>
.register{
  width: 500px;height: 500px;
}
</style>