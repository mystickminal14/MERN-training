function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('greates'),1000)
    })
}
async function getData(){
    const data = await fetchData()
    console.log(data)
}
getData()
const number=[1,5,6,9]
const arr=number.find((val,indes)=>{
    
    return val>4
})

console.log(arr)
const fil=number.filter(val=>val>4)
console.log(fil)
const vuln=[1,2,2,4,5]
const fir=vuk