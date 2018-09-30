<template>
  <button 
     class="my-button"
     @click="handleClick" :disabled="buttonDisabled || loading"
     :autofocus="autofocus" :type="nativeType"
     :class="[
          type ? 'my-button--' + type : '',
          buttonSize ? 'my-button--'+buttonSize:'',
          {
          	'is-disabled': buttonDisabled,
          	'is-loading': loading,
          	'is-plain': plain,
          	'is-round': round,
          	'is-circle': circle
          }
     ]">
       <!-- 进行展示进行加载的图标的展示 -->
       <i class="my-icon-loading" v-if="loading"></i>
       <i :class="icon" v-if="icon && !loading"></i>
       <!-- 如果没有添加名字的话 就进行屏蔽的操作  -->
       <span v-if="$slots.default"><slot></slot></span>
     </button>
</template>

<style scoped>
/**进行基本css的设置 ***/
/**进行展示进行加载的展示 ***/
.my-button.is-loading{
	position: relative;
	pointer-events: none;
}

.my-icon-loading{
	animation: rotating 2s;
}
.my-icon-loading:before{
	content:'\E61E';
}
/**进行一个圆的设置  ***/
.my-button.is-circle{
	border-radius: 50%;
	padding: 12px;
}
[class^=el-icon]{
	speak: none;
	font-style: normal;
	font-weight: 400;
	font-variant:normal;
	text-transform: none;
	line-height: 1;
	vertical-align: baseline;
	display: inline-block;
	--webkit-font-smoothing: antialiased;
}

/**进行文字背景的设置**/
.my-button.my-button--text,.my-button.my-button--text:hover,.my-button--text:focus{
	border-color: transparent;
	color: #409eff;
	background: transparent;
	padding-left: 0;
	padding-right: 0;
}

.my-button.is-disabled,.my-button.is-disabled:focus,.my-button.is-disabled:hover{
	color: #c0c4cc;
	cursor: not-allowed;
	background-image: none;
	background-color: #fff;
	border-color: #ebeef5;
}
.my-icon-search:before{
	content:"\E619";
}
.my-button:hover{
	color: #409eff;
	border-color: #c6e2ff;
	background-color: #ecf5ff;
}
.my-button--primary.is-plain{
	color:#409eff;
	background:#ecf5ff;
	border-color: #b3d8ff;
}

.my-button--info.is-plain{
	color: #909399;
	background: #f4f4f5;
	border-color: #f4f4f5;
}
.my-button.my-button--warning.is-plain:hover{
	background: #e6a23c;
	border-color: #e6a23c;
	color: #fff;
}

.my-button.is-round{
	border-radius: 20px;
	padding: 12px 23px;
}

.my-button--warning.is-plain{
	color: #e6a23c;
	background: #fdf6cc;
    border-color: #f5dab1;
}
.my-button.is-plain:hover{
	background: #fff;
	border-color: #409eff;
	color:#409eff;
}
.my-button.my-button--success{
	color: #fff;
	background-color:#67c23a;
	border-color: #67c23a;
}
.my-button.my-button--info{
	color: #fff;
	background-color: #909399;
	border-color: #909399;
}
.my-button.my-button--warning{
	color: #fff;
	background-color: #e6a23c;
	border-color: #e6a23c;
}
.my-button.my-button--danger{
	color:#fff;
	background-color: #f56c6c;
	border-color: #f56c6c;
}
.my-button.my-button--primary{
	color: #fff;
	background-color: #409eff;
	border-color: #409eff;
}
.my-button{
	display: inline-block;
	line-height: 1;
	white-space: nowrap;
	cursor: pointer;
	background: #fff; 
	border: 1px solid #dcdfe6;
	border-color:#dcdfe6; 
	color: #606266; 
	-webkit-appearance: none;
	text-align: center;
	box-sizing: border-box;
	outline: none;
	margin: 0;
	transition: .2s;
	font-weight: 500;
	-webkit-user-select: none;
	padding: 12px 20px;
	font-size: 14px;
	border-radius: 4px;
}
</style>

<script>
export default {
	inject: {
		elForm:{
			default:''
		},
		elFormItem:{
			default:''
		}

	},

	props:{
		type:{
			type: String,
			default:'default'
		},
		size: String,
		icon:{
			type: String,
			default:''
		},
		nativeType:{
			type: String,
			default:'button'
		},
		loading: Boolean,
		disabled: Boolean,
		plain: Boolean,
		autofocus: Boolean,
		round: Boolean,
		circle: Boolean
	},

	computed:{
		_elFormItemSize(){
			return (this.elFormItem || {})._elFormItemSize;
		},
		buttonSize(){
			return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
		},
		buttonDisabled(){
			return this.disabled || (this.elForm || {}).disabled
		}
	},

	methods:{
		handleClick(evt){
			this.$emit('click',evt);
		}
	}
}
</script>