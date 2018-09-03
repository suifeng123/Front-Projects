<template>
  <div class="hello">

     <!-- 使用css展示一个六扇形状 -->
   
     <canvas></canvas>
  </div>
</template>

<script>
import myComponent from './myComponent'
import digui from './digui'
import  * as THREE from 'three' //
//进行引入相应
import overlay from './overlay'
export default {
  name: 'HelloWorld',
  mounted: function(){
  },
  data() {
    return {
      data:'121212',
      message:"hello world",
      show: true
    }
  },
  methods:{
       handleClick(){
       	console.log("this is a click");
       }
  },
  components:{
      overlay
  },
   mounted(){
      
    console.log(THREE)  
    var scene = new THREE.scene()
    var camera = new THREE.PerspectiveCamera(75,innerWidth/window.innerHeight,0.1,1000)
    var renderer = new Three.WebGLRenderer()
    render.setSize(window.innerWidth,window.innerHeight)

    document.body.appendChild(renderer.domElement)
    var geometry = new THREE.CubeGeomtry(1,1,1)
    var meterial = new THREE.MeshBasicMaterial({color:0x00ff00});
    var cube = new THREE.Mesh(geometry,material);
    scene.add(cube)
    camera.position.z = 5;
    function render(){
    	requestAnimationFrame(render)
    	cube.rotation.x += 0.1
    	cube.rotation.y += 0.1
    	renderer.render(scene,camera)
    }
    render()


   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   canvas{
   	width: 100%;
   	height: 100%;
   }
  .hello{

  }
  .aa{
    width: 0px;
    
    border:20px solid red;
    border-right-color: green;
    border-bottom-color: blue;
    border-left-color: black;
  }

  .border-style{
    width: 0;
    border:20px solid transparent;
    border-top-color: blue;
  }
  .border{

    width: 0;
    height:0;
    border-top: 20px solid blue;
    border-left: 20px solid red;
    border-right:20px solid green;
    border-bottom: none;
  }
</style>
