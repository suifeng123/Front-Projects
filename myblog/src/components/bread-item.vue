<template>
<!-- 进行书写一个面包屑的操作 -->
  <span class="my-breadcrumb__item">
       <!-- 进行预留的一个跳转 -->
     <span :class="['el-breadcrumb__inner',to ? 'is-link':'']"
            ref="link"
            role="link">
     </span>
     <!-- 这是一个关于提交分离配置器的选择 -->
     <i v-if="separatorClass" class="el-breadcrumb__separator" :class="separatorClass"></i>
     <span v-else class="el-breadcrumb__separator" role="presentation">{{separator}}</span>
  </span>
</template>
<script>
  export default {
  	name: 'ElBreadcrumb'
  }
</script>