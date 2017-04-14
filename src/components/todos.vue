<template>
<div id="app-4">

	<el-input v-model="input" placeholder="请输入内容" @keyup.enter.native="add"></el-input>
 <div style="margin: 15px 0;"></div>
<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="checkAllChange">全选</el-checkbox>

	<el-checkbox-group class="todos" v-model="checked"  @change="checkeChange">
		<el-checkbox v-for="(todo, index) in todos" :key="index" :label="index" class="todo">{{ todo.text }} <i class="el-icon-delete" @click="del(index)" ></i></el-checkbox>
	</el-checkbox-group>



</div>


</template>

<script lang="ts">
import App from './todos.ts';
export default App;
</script>

<style>

.todo i {
	visibility: hidden;
	cursor: pointer;
}
.todo:hover i {
	visibility:visible;
}
</style>
