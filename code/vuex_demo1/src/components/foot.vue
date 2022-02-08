<template>
 <div>
 <div id="footer" class="f" >
    {{studentName}}
 </div>
 </div>
</template>
<script>
     export default{
         name:'foot',
         data(){
         return{
             studentName:'杨本科',
           
         }
      }
    }
</script>
<style>
.f
	{
		background-color:rgb(75, 185, 236);width: 1200px;height: 20px; clear:both;text-align:center;
	}
</style>