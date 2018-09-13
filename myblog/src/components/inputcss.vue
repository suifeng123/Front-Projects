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