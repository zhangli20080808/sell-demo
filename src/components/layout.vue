<template>
	<div class="main">
		<!-- 头部 -->
			<div class="layout">
			<nav class="navbar navbar-default" role="navigation">
			  <!-- Brand and toggle get grouped for better mobile display -->
			  <div class="navbar-header">
			    <a class="navbar-brand" href="#">Brand</a>
			  </div>

			  <!-- Collect the nav links, forms, and other content for toggling -->
			  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			    <ul class="nav navbar-nav navbar-right">
			      <li><a href="#">登录</a></li>
			      <li><a href="#">注册</a></li>
			      <li><a href="#">关于</a></li>
			    </ul>
			  </div><!-- /.navbar-collapse -->
			</nav>
		</div>
		<!-- content-->
		<div class="content">
			<keep-alive>
     	 	  <router-view></router-view>
   		    </keep-alive>
		</div>
		<!--底部-->
		<div class="foot">
			 <p class="text-center">© 2016 fishenal MIT</p>
		</div>
	</div>
</template>
<style lang="less" scoped>
	.main{
		.content{
			height: 900px;
		}
	}
</style>