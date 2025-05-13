function resolvein25(){
    return  new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve("resolved")
        },2000)
    })
}
async function call() {
    console.log("calling....")
    const aycnccall=await resolvein25()
    console.log(aycnccall)
}
call()