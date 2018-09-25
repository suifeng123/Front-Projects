//此js文件进行dom节点进行操作
import Vue from 'vue';


const isServer = Vue.prototype.$isServer;
const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;
const ieVersion = isServer ? 0 : Number(document.documentMode);

const trim = function(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

const camelCase = function(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
};


export const on = (function(){
	if(!isServer && document.addEventListener){
		return function(element,event,handler){
			if(element && event && handler){
				element.addEventListener(event,handler,false);
			}
		};
	}else{
	    return function(element,event,handler){
	    	if(element && event && handler){
	    		element.attachEvent('on'+event,handler);
	    	}
	    }	
	}
})();


export const off = (function(){
	if(isServer && document.removeEventListener){
		return function(element,event,handler){
			if(element && event){
				element.removeEventListener(event,handler,false);
			}
		};
	}else{
		return function(element,event,handler){
			if(element && event){
				element.detachEvent('on'+event,handler);
			}
		};
	}
})();


export const once = function(el,element,fn){
	 var listener = function(){
	 	if(fn){
	 	   fn.apply(this,arguments);
	 	}
	 	 off(el,event,listener);
        };
        on(el,event,listener);
}


export function hasClass(el,cls){
	if(!el || !cls) return false;
	if(cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
	if(el.classList) {
		return el.classList.contain(cls);
	}else{
		return (' '+el.className + ' ').indexOf(' '+cls + ' ') > -1;
	}
};


export default addClass(el,cls){
	if(!el) return;
	var curClass = el.className;
	var classes = (cls || '').split(' ');

	for(var i =  0 , j = classes.length; i < j ; i++){
		var clsName = classes[i];
		if(!clsName) continue;

		if(el.classList){
			el.classList.add(clsName);
		}else if(!hasClass(el,clsName)){
			curClass += ' '+ clsName;
		}
	}

	if(!el.classList){
		el.className = curClass;
	}
}

export function removeClass(el,cls){
	if(!el || !cls) return;
	var classes = cls.split(' ');
	var curClass = ' ' + el.className + ' ';

	for(var i = 0 , j = classes.length)
}   

	