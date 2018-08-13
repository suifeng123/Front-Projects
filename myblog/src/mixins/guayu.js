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

