<!-- 进行递归组件的编写 -->
<template>
<div>
	<my-trees :list="list"></my-trees>
</div>
</template>
<script>
import myTrees from './treeMenu2'; //进行递归组件
//进行递归组件的编写
export default{
    name: 'digui',
    components:{
    	myTrees
    },
    data(){
    	return {
    		list:[
                {
                	name:'黄焖鸡米饭',
                	cList:[
                       {name:'二级黄焖鸡米饭'},
                       {name:"one chicken",cList:[
                          {name:'三级黄焖鸡米饭',cList:[
                          {name:"四级黄焖鸡米饭"}
                          ]}
                          
                       ]}

                	]
                }
    		]
    	}
    }

}
</script>