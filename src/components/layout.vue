<template>
	<div class="main">
		<!-- 头部 -->
			<div class="layout">
			<nav class="navbar navbar-inverse" role="navigation">
			  <!-- Brand and toggle get grouped for better mobile display -->
			  <div class="navbar-header">
					<router-link :to="{path: '/'}">
						<a class="navbar-brand" >Vue_welcoming</a>
					</router-link>
			  </div>

			  <!-- Collect the nav links, forms, and other content for toggling -->
			  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			    <ul class="nav navbar-nav navbar-right">
			      <li><a href="javascript:void(0)" >{{username}}</a></li>
			      <li v-if="username !==''"><a href="javascript:void(0)">退出</a></li>
			      <li @click="logClick" v-if="username ==''"><a href="javascript:void(0)" >登录</a></li>
			      <li @click="regClick" v-if="username ==''"><a href="javascript:void(0)">注册</a></li>
			      <li @click="aboutClick"><a href="javascript:void(0)">关于</a></li>
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
		<!-- about -->
		<my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
			 <p>about</p>
		</my-dialog>

		<my-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
			 <logForm @has-log="onSuccess"></logForm>
		</my-dialog>

		<my-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
			 <p>reg</p>
		</my-dialog>
	</div>
</template>
<script>
	import Dialog from './base/dialog'
	import logForm from './login.vue'
	export default {
		data(){
			return {
				isShowAboutDialog: false,
				 isShowLogDialog: false,
				 isShowRegDialog: false,
				 username: ''
			}
		},
		components:{
			myDialog: Dialog,
			logForm
		},
		methods:{
			closeDialog(){
				this.isshowDialog =false
			},
			aboutClick(){
				this.isShowAboutDialog =true
			},
			logClick(){
				this.isShowLogDialog =true
			},
			regClick(){
				this.isShowRegDialog =true
			},
			closeDialog(attr){
				this[attr] = false
			},
			onSuccess(res){
				// console.log(res);
				this.closeDialog ('isShowLogDialog')
				this.username = res.username;

			}
		}
	}
</script>
<style lang="less" scoped>
	.main{
		.content{
		}
	}
</style>
