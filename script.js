//your JS code here. If required.
const output=document.getElementById("output")
function array(){
	return new Promise((res,rej)=>{ setTimeout(()=>res([1,2,3,4]),3000) })
}
function fT(arr){
	arr=arr.filter(e=>e%2==0)
	return new Promise((res,rej)=>{
		setTimeout(()=>{
		output.innerHTML=arr
		res(arr)
		},1000)
	})
	
	
}
function fP(arr){
	arr=arr.map(e=>e*2)
	
	return new Promise((res,rej)=>{
		setTimeout(()=>{
		output.innerHTML=arr
		res(arr)
		},2000)
	})
}
async function handling(){
	let firstP=await array()
	let secondP=await fT(firstP)
	let thirdP=await fP(secondP)
	
	//alert(firstP)
}
handling()