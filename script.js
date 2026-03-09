let build=0
let deploy=0

async function runPipeline(){

activate("s1")
await wait()

activate("s2")
build++
document.getElementById("build").innerText=build
await wait()

activate("s3")
await wait()

activate("s4")
deploy++
document.getElementById("deploy").innerText=deploy

}

function activate(id){

let stages=document.querySelectorAll(".stage")
stages.forEach(s=>s.classList.remove("active"))

document.getElementById(id).classList.add("active")

}

function wait(){
return new Promise(resolve=>setTimeout(resolve,1500))
}
