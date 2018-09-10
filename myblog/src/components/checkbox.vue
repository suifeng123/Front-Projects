<template>
<label 
    class="el-checkbox"
    :class="[
        border && checkboxSize ? 'el-checkbox--'+ checkboxSize :'',
        {'is-disabled': isDisabled},
        {'is-bordered': border},
        {'is-checked': isChecked}
    ]"
    role="checkbox"
    :aria-checked="indeterminate ? 'mixed': isChecked"
    :aria-disabled="isDisabled"
    :id="id">
    <span class="el-checkbox__input"
        :class="{
           'is-disabled': isDisabled,
           'is-checked': isChecked,
           'is-indeterminate': indeterminate,
           'is-focus': focus
        }"
        aria-checked="mixed">
        <span class="el-checkbox__inner"></span>
        <input v-if="trueLabel || falseLabel"
            class="el-checkbox__original"
            type="checkbox"
            aria-hidden="true"
            :name="name"
            :disabled="isDisabled"
            :true-value="trueLabel"
            :false-value="falseLabel"
            v-model="model"
            @change="handleChange"
            @focus="focus = true"
            @blur="focus = false">
        <input v-else
               class="el-checkbox__original"
               type="checkbox"
               aria-hidden="true"
               :disabled="isDisabled"
               :value="label"
               :name="name"
               v-model="model"
               @change="handleChange"
               @focus="focus = true"
               @blur="focus = false">
       </span>
       <span class="el-checkbox__label" v-if="$slots.default || label">
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
       </span>
</template>
<script>
import Emitter from './emitter';

export default {
	mixins:[Emitter],
    name:'ElCheckbox',
	inject:{
		elForm:{
			default:''
		},
		elFormItem:{
			default:''
		}
	},

	componentName:'ElCheckbox',

	data(){
		return {
		    selfModel: false,
		    focus: false,
		    isLimitExceeded: false	
		}
	},

	computed: {
		model:{
			get(){
				
			}
		}
	}
}
</script>