<template>
<div class="farme" v-if="loading">
	<div class="loading">
		<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
	</div>
</div>
</template>

<script lang="ts">
import App from './loading'
export default App
</script>

<style>
.farme {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1000;
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 100%;
    border: none;
    background-color: rgba(230, 233, 236, 0.8);
    cursor: wait;
    opacity: 1;
}

.loading {
 top: 20%;
    left: 50%;
	box-sizing: content-box !important;
	margin-top:100px;
	z-index: 1001;
	position:absolute;
	text-align: center;
}
.loading span {
	display: inline-block;
	width: 8px;
	height: 100%;
	border-radius: 4px;
	background: lightgreen;
	-webkit-animation: load 1s ease infinite;
}
@-webkit-keyframes load {
	0%,100%{
		height: 40px;
		background: lightgreen;
	}
	50%{
		height: 70px;
		margin: -15px 0;
		background: lightblue;
	}
}
.loading span:nth-child(2) {
	-webkit-animation-delay:0.2s;
}
.loading span:nth-child(3) {
	-webkit-animation-delay:0.4s;
}
.loading span:nth-child(4) {
	-webkit-animation-delay:0.6s;
}
.loading span:nth-child(5) {
	-webkit-animation-delay:0.8s;
}



</style>