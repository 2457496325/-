<template>
  <div class="home">
   <p>标题: <a-input placeholder="请输入标题" :value='inputValue6' @change='valuechange6'></a-input></p>
    <p>内容: <a-input placeholder="请输入内容" :value='inputValue7' @change='valuechange7'></a-input></p>
    <button @click="keep">保存</button>
  </div>
</template>

<script>
// @ is an alias to /src

import{mapState}from'vuex'
export default {
  name: 'newbowen',
  data(){
    return{}

 },
 computed:{
             ...mapState(["inputValue6","inputValue7"]),
            
             },
 
 
  methods:{
    keep(){
      if(this.inputValue6.trim().length<=0){
        return this.$message.warning('文本框内容不能为空!')

      }
      this.$store.commit('addItem');
 this.$router.push({path:'/Home'});
    },
     valuechange6(c){
this.$store.commit('setInputValue6',c.target.value)
    },
    valuechange7(c){
this.$store.commit('setInputValue7',c.target.value)
    },
  }
  }
</script>
<style>
.newbowen{
  width: 500px;height: 500px;
}
</style>