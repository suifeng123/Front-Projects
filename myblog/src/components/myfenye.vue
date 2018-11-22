<template>
  <div class="page" v-show="show">
      <div class="pagelist">
         <span class="jump"v-show="current_page>1">上一页</span> 
 6         <span v-show="current_page>5" class="jump" @click="jumpPage(1)">1</span> 
 7         <span class="ellipsis"  v-show="efont">...</span> 
 8         <span class="jump" v-for="num in indexs" :class="{bgprimary:current_page==num}" @click="jumpPage(num)">{{num}}</span> 
 9         <span class="ellipsis"  v-show="efont&&current_page<pages-4">...</span> 
10  
11         <span class="jump">下一页</span> 
12         <span v-show="current_page<pages-1" class="jump" @click="jumpPage(pages)">{{pages}}</span> 
13  
14         <span class="jumppoint">跳转到：</span> 
15         <span class="jumpinp"><input type="text" v-model="changePage"></span> 
16         <span class="jump gobtn" @click="jumpPage(changePage)">GO</span> 
      </div>
  </div>
</template>
<style>
.page { 
  font-weight: 900; 
  height: 40px; 
  text-align: center; 
  color: #888; 
  margin: 20px auto 0; 
  background: #f2f2f2; 
} 
 
.pagelist { 
  font-size: 0; 
  background: #fff; 
  height: 50px; 
  line-height: 50px; 
} 
 
.pagelist span { 
  font-size: 14px; 
} 
 
.pagelist .jump { 
  border: 1px solid #ccc; 
  padding: 5px 8px; 
  -webkit-border-radius: 4px; 
  -moz-border-radius: 4px; 
  border-radius: 4px; 
  cursor: pointer; 
  margin-left: 5px; 
} 
 
.pagelist .bgprimary { 
  cursor: default; 
  color: #fff; 
  background: #337ab7; 
  border-color: #337ab7; 
} 
 
.jumpinp input { 
  width: 55px; 
  height: 26px; 
  font-size: 13px; 
  border: 1px solid #ccc; 
  -webkit-border-radius: 4px; 
  -moz-border-radius: 4px; 
  border-radius: 4px; 
  text-align: center; 
} 
 
.ellipsis { 
  padding: 0px 8px; 
} 
 
.jumppoint { 
  margin-left: 30px; 
} 
 
.pagelist .gobtn {} 
 
.bgprimary { 
  cursor: default; 
  color: #fff; 
  background: #337ab7; 
  border-color: #337ab7; 
}
</style>
<script> 
export default{ 
  data: { 
    current_page: 1, //当前页 
    pages: 50, //总页数 
    changePage:'',//跳转页 
    nowIndex:0 
  }, 
  computed:{ 
     show:function(){ 
         return this.pages && this.pages !=1 
     }, 
     efont: function() { 
       if (this.pages <= 7) return false; 
       return this.current_page > 5 
     }, 
     indexs: function() { 
 
       var left = 1, 
         right = this.pages, 
         ar = []; 
       if (this.pages >= 7) { 
         if (this.current_page > 5 && this.current_page < this.pages - 4) { 
           left = Number(this.current_page) - 3; 
           right = Number(this.current_page) + 3; 
         } else { 
           if (this.current_page <= 5) { 
             left = 1; 
             right = 7; 
           } else { 
             right = this.pages; 
 
             left = this.pages - 6; 
           } 
         } 
       } 
       while (left <= right) { 
         ar.push(left); 
         left++; 
       } 
       return ar; 
     }, 
   }, 
  methods: { 
    jumpPage: function(id) { 
      this.current_page = id; 
    }, 
  } 
} 
</script>