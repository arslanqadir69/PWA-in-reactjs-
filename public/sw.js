let cacheData="AppV1";
this.addEventListener("install", (event)=>{
    event.waitUntil(caches.open(cacheData).then((chache)=>{
        chache.addAll([
            '/static/js/main.chunk.js',
            '/static/js/0.chunk.js',
            '/static/js/.bundle.js',
            '/index.html',
            '/',
            '/About'
        ])
    })
    
    )
})

this.addEventListener("fetch",(event)=>{
    if(!navigator.onLine){
        event.respondWith(
            caches.match(event.request).then((resp)=>{
                if(resp){
                    return resp
                }
                // let requestUrl=event.request.clone();
                // fetch(requestUrl).then((res)=>{
                //     return res
                // });
            })
        )
    }
   
})