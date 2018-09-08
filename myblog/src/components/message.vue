<template>
<transition name="el-message-fade">
<div v-show="visible" @mouseenter="clearTimer"
     @mouseleave="startTimer" role='alert'>
     <!-- 这个组件的重要的角色还是alert的作用 -->
     <i :class="iconClass" v-if="iconClass"></i>
     <i :class="typeClass" v-else></i>
     <slot>
        <p v-if="!dangerouslyUseHTMLString">{{message}}</p>
        <p v-else v-htm="message"></p>
     </slot>
      <i v-if="showClose" @close="close"></i>
</div>
</transition>
</template>
<script>
//手写一个关于message 的组件
const typeMap = {
	success: 'success',
	info: 'info',
	warning: 'warning',
	error:'error'
};
export default {
	name:'myMessage',
	data(){
		return {
			visible: true,
			message:'',
			duration: 3000,
			type: 'info',
			iconClass:'',
			customClass:"",
			onClose: null,
			showClose: false,
			closed: false,
			timer: null,
			dangerouslyUseHTMLString: false,
			center: false
		}
	},
	computed:{
		//进行计算属性的
		typeClass(){
			return this.type && !this.iconClass ? `el-message__icon el-icon-${ typeMap[this.type] }` :'';
		}
	},
	watch:{
		closed(newVal){
			if(newVal){
				this.visible = false;
				this.$el.addEventListener('transitionend',this.destroyElement);
			}
		}
	},
	methods:{
		destroyElement(){
			this.$el.removeEventListener('transitionend',this.destroyElement);
			this.$destroy(true);
			this.$el.parentNode.removeChild(this.$el);
		},
		close(){
			this.closed = true;
			if(typeof this.onClose === 'function'){
				this.onClose(this);
			}
		},

		clearTimer(){
			clearTimeout(this.timer);
		},

		startTimer(){
			if(this.duration > 0){
				this.timer = setTimeout(() => {
					if(!this.closed){
						this.close();
					}
				},this.duration);
			}
		},
		keydown(e){
			if(e.keyCode === 27){
				if(!this.closed){
					this.close()
				}
			}
		}
	},
	mounted(){
		this.startTimer();
		document.addEventListener('keydown',this.keydown);
	},
	beforeDestroy(){
		document.addEventListener('keydown',this.keydown);
	}
}
</script>