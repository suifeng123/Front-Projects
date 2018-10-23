//进行threejs的一般方式的书写
function init(){
    

    //进行场景的设置
    var scene = new THREE.Scene();
    

    //进行设置摄像机的设置
    var camera = new THREE.PerspectiveCamera(45,window.innerWidth / window.innerHeight,0.1,1000);

    //进行渲染器的设置
    var webGLRenderer = new THREE.WebGLRenderer();
    webGLRenderer.setClearColor(new THREE.Color(0xEEEEEE,1.0));
    webGLRenderer.setSize(window.innerWidth,window.innerHeight);
    webGLRenderer.shadowMapEnabled = true;

}
