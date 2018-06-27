/**
 * Created by Administrator on 2018/6/27.
 */
export default class Element{
  constructor(tag,props,children,key){
    this.tag = tag;
    this.props = props;
    if(Array.isArray(children)){
      //如果children 是数组的话，进行必要的处理
      this.children = children;
    }else if(isString(children)){
      this.key = children;
      this.children = null;
    }
    if(key) this.key = key;
  }
  //进行渲染
  render(){
    let root = this._createElement(
      this.tag,
      this.props,
      this.children,
      this.key
    )

    document.body.appendChild(root);
    return root
  }

  create(){
    return this._createElement(this.tag,this.children,this.key)
  }

  //进行创建节点的操作
  _createElement(tag,props,child,key){
    //通过tag 创建节点
    let el = document.createElement(tag);
    //设置节点属性
    for(const key in props){
      if(props.hasOwnProperty(key)){
        const value = props[key];
        el.setAttribute(key,value);
      }
    }
    if(key){
      el.setAttribute('key',key)
    }
    //递归节点
    if(child){
      child.forEach(element => {
           let child;
          if(element instanceof Element){
            child = this._createElement(
              element.tag,
              element.props,
              element.children,
              element.key
            )
          }else {
            child = document.createTextNode(element)
          }

         el.appendChild(child);

      })
    }
    return el;
  }
}
