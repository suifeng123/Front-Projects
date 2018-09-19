<template>
<!-- 写一个组件用于展示input组件的css的作用-->
<div :class="[
     type === 'textarea' ? 'textarea' : 'input',
     {
     	'is-disabled': inputDisabled,
     	'input-group': $slots.prepend || $slot.append,
     	'input-group--append': $slots.append,
     	'input-group--prepend': $slots.prepend,
     	'input--prefix': $slots.prefix || prefixIcon,
     	'input--suffix': $slots.suffix || suffixIcon || clearable
     }
]"
      @mouseenter="hovering = true"
      @mouseleave="hovering = false"
>
   <!-- 按正常的 如果是正常的输入元素的时候  进行一个text的元素的编写 -->
   <template v-if="type !== 'textarea'">
          <!-- 进行前置元素的编写 -->
          <div class="input-group__prepend" v-if="$slots.prepend">
              <slot name="prepend"></slot>
          </div>
          <input :tabindex="tabindex"
               v-if="type !== 'textarea'"
               class="input__inner"
               v-bind="$attrs"
               :type="type"
               :disabled="inputDisabled"
               :readonly="readonly"
               :autocomplete="autoComplete"
               :value="currentValue"
               ref="input"
               @compositionstart="handleComposition"
               @compositionupdate="handleComposition"
               @compositionend="handleComposition"
               @input="handleInput"
               @focus="handleFocus"
               @blur="handleBlur"
               @change="handleChange"
               :aria-label="label"
               >
               <!--进行前置内容的显示-->
               <span class="input__prefix" v-if="$slots.prefix || prefixIcon">
                    <slot name="prefix"></slot>
                    <i class="input__icon" v-if="prefixIcon"
                    :class="prefixIcon">
                    </i>
               </span>
               <!--后置内容的显示 -->
               <span class="input__suffix"
                    v-if="$slots.suffix || suffixIcon || showClear || validateState &&
                    needStatusIcon">
                      <span class="input__suffix-inner">
                           <template v-if="!showClear">
                              <slot name="suffix"></slot>
                              <i class="input__icon" v-if="suffixIcon"
                                 :class="suffixIcon">
                              </i>
                           </template>
                           <i v-else
                               class="input__icon icon-circle-close input__clear"
                               @clear="clear">
                            </i>
                      </span>
                      <i class="input__icon"
                          v-if="validateState"
                          :class="['input__validateIcon',validateIcon]">
                      </i>
                </span>
                <!-- 进行后置元素 -->
                <div class="input-group__append" v-if="$slots.append">
                    <slot name="append"></slot>
                </div>
   </template>
    <!-- 如果不是正常的input的组件的话 就显示textarea 的显示 -->
    <textarea
       v-else
       :tabindex="tabindex"
       class="textarea__inner"
       :value="currentValue"
       @compositionstart="handleComposition"
       @compositionupdate="handleComposition"
       @compositionend="handleComposition"
       @input="handleInput"
       ref="textarea"
       v-bind="$attrs"
       :disabled="inputDisabled"
       :readonly="readonly"
       :style="textareaStyle"
       @focus="handleFocus"
       @blur="handleBlur"
       @change="handleChange"
       :aria-label="label"
       ></textarea>

</div>
</template>
<script>
import emitter from './emitter';
import Migrating from './migrating';
import calcTextareaHeight from './calcTextareaHeight';
import merge from './merge';
import { isKorean } from './shared';

export default{
	mixins: [emitter,Migrating],

	inheritAttrs: false,

	inject:{
		elForm:{
			default:''
		},
		elFormItem:{
			default:''
		}
	},

	data(){
		return {
			currentValue: this.value === undefined || this.value === null ? '': this.value,
			textareaStyle: {},
			hovering: false,
			focused:false,
			isOnComposition: false,
			valueBeforeComposition: null
		};
	},

	props:{
		value:[String,Number],
		size: String,
		resize: String,
		form: String,
		disabled: Boolean,
		readonly: Boolean,
		type:{
			type: String,
			default: 'text'
		},
		autosize:{
			type:[Boolean,Object],
			default: false
		},
		autoComplete:{
			type: String,
			default: 'off'
		},
		validateEvent: {
			type: Boolean,
			default: true
		},
		suffixIcon: String,
		prefixIcon: String,
		label: String,
		clearable:{
			type: Boolean,
			default: false
		},
		tabindex: String,
	},

	computed:{
		_elFormItemSize(){
			return (this.elFormItem || {}).elFormItemSize;
		},
		validateState(){
			return this.elFormItem ? this.elFormItem.validateState : ""
		},
		needStatusIcon(){
			return this.elForm ? this.elForm.statusIcon : false
		},
		validateIcon(){
			return {
				validating: 'icon-loading',
				success: 'icon-circle-check',
				error:'icon-circle-close'
			}[this.validateState];
		},
		textareaStyle(){
			return merge({},this.textareaStyle,{resize: this.resize});
		},
		inputSize(){
			return this.size || this._elFormItemSize ||(this.$ELEMENT || {}).size;
		},
		inputDisabled(){
			return this.disabled || (this.elForm || {}).disabled;
		},
		showClear(){
			return this.clearable && !this.disabled && !this.readonly && this.currentValue !== '' && (this.focused || this.hovering);
		}
	},

	watch:{
		value(val,oldValue){
			this.setCurrentValue(val);
		}
	},

	methods:{
		focus(){
			(this.$refs.input || this.$refs.textarea).focus();
		},
		blur(){
			(this.$refs.input || this.$refs.textarea).blur();
		},
		getMigratingConfig(){
			return {
				props: {
					'icon': 'icon is removed, use suffix-icon / prefix-icon instead.',
                    'on-icon-click': 'on-icon-click is removed.'
				},
				events:{
					'click': 'click is removed'
				}
			};
		},

		handleBlur(event){
			this.focused = false;
			this.$emit('blur',event);
			if(this.validateEvent){
				this.dispatch('ElFormItem','el.form.blur',[this.currentValue]);
			}
		},

		select(){
			(this.$refs.input || this.$refs.textarea).select();
		},

		resizeTextarea(){
			if(this.$isServer) return;
			const { autosize,type } = this;
			if(type !== 'textarea') return;
			if(!autosize){
				this.textareaCalcStyle = {
					minHeight: calcTextareaHeight(this.$refs.textarea).minHeight
				};

				return;
			}

			const minRows = autosize.minRows;
			const maxRows = autosize.maxRows;

			this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea,minRows,maxRows);
		},
		handleFocus(event){
			this.focused = true;
			this.$emit('focus',event);
		},
		handleComposition(event){
			if (event.type === 'tjhoicompositionend') {
          this.isOnComposition = false;
          this.currentValue = this.valueBeforeComposition;
          this.valueBeforeComposition = null;
          this.handleInput(event);
        } else {
          const text = event.target.value;
          const lastCharacter = text[text.length - 1] || '';
          this.isOnComposition = !isKorean(lastCharacter);
          if (this.isOnComposition && event.type === 'compositionstart') {
            this.valueBeforeComposition = text;
          }
        }
    },

    handleInput(event){
    	const value = event.target.value;
    	this.setCurrentValue(value);
    	if(this.isOnComposition) return;
    	this.$emit('input',value);
    },
    handleChange(event){
        this.$emit('change',event.target.value);
    },
    setCurrentValue(value){
    	if(this.isOnComposition && value === this.valueBeforeComposition) return;
    	this.currentValue = value;
    	if(this.isOnComposition) return;
    	this.$nextTick(this.resizeTextarea);
    	if(this.validateEvent && this.currentValue === this.value){
    		this.dipatch('ElFormItem','el.form.change',[value]);
    	}
    },
    calcIconOffset(place){
    	let elList = [].slice.call(this.$el.querySelectorAll(`.input__${place}`) || []);
        if(!elList.length) return;
        let el = null;
        for(let i = 0 ; i < elList.length; i++){
        	if(elList[i].parentNode === this.$el){
        		el = elList[i];
        		break;
        	}
        }
        if(!el) return;
        const pendantMap = {
        	suffix: 'append',
        	prefix: 'prepend'
        };


        const pendant = pendantMap[place];
        if(this.$slots[pendant]){
        	el.style.transform = `translateX(${place === 'suffix' ? '-' : ''}${this.$el.querySelector(`.input-group__${pendant}`).offsetWidth}px)`;
        } else {
          el.removeAttribute('style');
        }
    },
    updateIconOffset(){
    	this.calcIconOffset('prefix');
    	this.calcIconOffset('suffix');
    },
    clear(){
    	this.$emit('input','');
    	this.$emit('change','');
    	this.$emit('clear');
    	this.setCurrentValue('');
    	this.focus();
    }
 },

 created(){
 	this.$on('inputSize',this.select);
 },

 mounted(){
 	this.resizeTextarea();
 	this.updateIconOffset();
 },

 update(){
 	this.$nextTick(this.updateIconOffset);
 }
}

</script>
<style scoped>
.input {
	position: relative;
	font-size: 14px;
	display: inline-block;
	width: 100%;
}
.input-inner:focus{
	outline: none;
	border-color: #409eff;
}
.input-inner {
	-webkit-appearance:none;
	background-color: #fff;
	background-image: none;
	border-radius: 4px;
	border: 1px solid #dcdfe6;
	box-sizing: border-box;
	color: #606266;
	font-size: inherit;
	height: 40px;
	outline:none;
	padding: 0 15px;
	transition: border-color .2s cubic-bezier(.645,.045,.355,1);
	width: 100%;
}
</style>