
function show(id){
document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'))
document.getElementById(id).classList.add('active')
}

document.querySelectorAll('#estado button').forEach(b=>{
b.onclick=()=>{
document.querySelectorAll('#estado button').forEach(x=>x.classList.remove('active'))
b.classList.add('active')
update()
}
})

function normal(){
let b=document.querySelector('#estado button')
if(b){
b.classList.add('active')
update()
}
}

function update(){
let est=document.querySelector('#estado .active')?.innerText||""
document.getElementById('texto').innerText="GERAL: "+est
}

function copiar(){
navigator.clipboard.writeText(document.getElementById('texto').innerText)
}

function addAgenda(){
let d=document.getElementById('agendaDesc').value
let v=document.getElementById('agendaVal').value
let li=document.createElement('li')
li.innerText=d+" - R$ "+v
document.getElementById('listaAgenda').appendChild(li)
}

function addFin(){
let d=document.getElementById('finDesc').value
let v=document.getElementById('finVal').value
let li=document.createElement('li')
li.innerText=d+" - R$ "+v
document.getElementById('listaFin').appendChild(li)
}

function addTask(){
let t=document.getElementById('taskInput').value
let li=document.createElement('li')
li.innerText=t
document.getElementById('listaTask').appendChild(li)
}
