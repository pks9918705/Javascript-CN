


const loadScript=(src)=>{

    return new Promise((resolve,reject)=>{

        let script=document.createElement("script")
        script.type="text/javascript"
        script.src=src
        document.body.appendChild(script)
        
        // onload 
        // script.onload=()=>{
        //     resolve(1)

        // }
        script.onload=()=>{resolve(1)}
 
        //on error
        script.onerror=()=>{
            reject(0)
        }
    })

}
setTimeout(()=>{

    let p1=loadScript("https://cdnmm.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" )

     p1.then((value)=>{
    console.log("Hurray!! Loaded ")
    document.body.innerText="Hurray!! Loaded :) "

}).catch((error)=>{
    console.log("Oops you have an error")
    document.body.style.color="red"
    document.body.innerText="OOOps :( "
})

},3000)
