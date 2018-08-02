function jsonp({url, param, cb}){
    return new Promise((resolve, reject)=>{
        let script = document.createElement('script')
        window[cb] = function(data){
            resolve(data);
            document.body.removeChild(script)
        }
        params = {...params, cb}
        let arrs = [];
        for(let key in params){
            arrs.push(`${key}=${params[key]}`)
        }
        script.src = `${url}?${arrs.join('&')}`
        document.body.appendChild(script)
    })
}
jsonp({
    url: 'http://localhost:3000/say',
    params: {wd: 'haoxl'},
    cb: 'show'
}).then(data=>{
    console.log(data)
})

作者：An_an
链接：https://juejin.im/post/5b5ff1dfe51d4519610e26ec
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。