function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('greates'),1000)
    })
}
async function getData(){
    const data = await fetchData()
    console.log(data)
}