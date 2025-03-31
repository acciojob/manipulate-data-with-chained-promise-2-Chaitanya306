//your JS code here. If required.
const output=document.getElementById("output")
function array(){
	return new Promise((res,rej)=>{ setTimeout(()=>res([1,2,3,4]),3000) })
}
function fT(arr){
	arr=arr.filter(e=>e%2==0)
	setTimeout(()=>output.textContent=arr,1000)
	arr=arr.map(e=>e*2)
	setTimeout(()=>output.textContent=arr,2000)
}
async function handling(){
	let firstP=await array()
	let secondP=await ft(firstP)
	//alert(firstP)
}
handling()