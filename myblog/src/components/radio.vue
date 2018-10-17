//进行编写一个radio的组件  仿照element-ui  学习element-ui 源码
<template>
    <label class="el-radio-button"
         :class="[
	      size ? 'el-radio-button--' + size : '',
	      { 'is-active': value === label },
	      { 'is-disabled': isDisabled },
	      { 'is-focus': focus }
	 ]"
	  role="radio"
	  :aria-checked="value === label"
	  :aria-disabled="isDisabled"
	  :tabindex="tabIndex"
	  @keydown.space.stop.prevent="value=isDisabled ? value : label"
	  >
     </label>
</templte>
