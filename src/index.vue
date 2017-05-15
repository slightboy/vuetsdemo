<template>

  <div id="app">
<el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark">
	
	<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
	<el-menu-item index="1">处理中心</el-menu-item>
	<el-submenu index="2">
		<template slot="title">我的工作台</template>
		<el-menu-item index="2-1">选项1</el-menu-item>
		<el-menu-item index="2-2">选项2</el-menu-item>
		<el-menu-item index="2-3">选项3</el-menu-item>
	</el-submenu>
	<el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
	</el-menu>
  
  </div></el-col>
</el-row>

<el-row class="content">
  <el-col :span="4">
	  <div class="grid-content bg-purple">
	  <router-link to="/lesson3">3.Template Syntax 模板语法</router-link>
	  
	  </div>
  </el-col>
  <el-col :span="20"><div class="grid-content bg-purple-light">
  <router-view></router-view>
  </div></el-col>
</el-row>

	
    
  </div>
</template>

<script lang="ts">
import App from './index';
export default App;
</script>


<style>
#app {
  margin-top: 0px;
}
.content {
  margin-top: 10px;
}
</style>
