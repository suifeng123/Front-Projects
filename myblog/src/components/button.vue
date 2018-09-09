<template>
<!-- 进行button的显示 -->
<button class="button" @click="handleClick" :disabled="buttonDisabled || loading"
     :autofocus="autofocus" :type="nativeType" :class="[
         type ? 'button--' + type :'',
         buttonSize ? 'button--' + buttonSize :'',
         {
         	'is-disabled': buttonDisabled,
         	'is-loading': loading,
         	'is-plain': plain,
         	'is-round': round,
         	'is-circle': circle
         }
     ]"
     >
     <i class="icon-loading" v-if="loading"></i>
     <i :class="icon" v-if="icon && !loading"></i>
     <span v-if="$slots.default"><slot></slot></span>
</button>
</template>
<style scoped>
.button {
	display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    border-color: #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
}

.button--primary {
	color: #fff;
	background-color: #409eff;
	border-color: #409eff;
}

.button:hover{
	color: #409EFF;
	border-color: #409EFF;
	background-color:#409EFF;
}
</style>
<script>
export default {
	name: 'MyButton',

	inject:{
		elForm:{
			default:''
		},
		elFormItem:{
			default:""
		}
	},


	props:{
		type:{
			type:String,
			default: 'default',
		},
		size: String,
		icon:{
			type: String,
			default: ''
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
			return (this.elFormItem || {}).elFormItemSize;
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