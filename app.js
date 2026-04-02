function activate(group){
let buttons=document.querySelectorAll('#'+group+' button')
buttons.forEach(b=>{
b.onclick=()=>{
buttons.forEach(x=>x.classList.remove('active'))
b.classList.add('active')

if(group==='hidratacao'){
document.getElementById('grau').classList.toggle('hidden',b.innerText!=='Desidratado')
}
if(group==='consciencia'){
document.getElementById('glasgow').classList.toggle('hidden',b.innerText==='Sedado')
}
update()
}
})
}

['estado','hidratacao','consciencia','ao','rv','rm','grau'].forEach(activate)

function get(id){
return document.querySelector('#'+id+' .active')?.innerText||""
}

function update(){
let txt=""

let est=get('estado')
let hidr=get('hidratacao')
let grau=get('grau')

if(hidr==="Desidratado" && grau){
hidr+=` (${grau}/4+)`
}

txt+=`GERAL: ${[est,hidr].filter(Boolean).join(", ")}.\n`

let cons=get('consciencia')
let ao=get('ao')
let rv=get('rv')
let rm=get('rm')

let soma=Number(ao)+Number(rv)+Number(rm)

if(cons && cons!=="Sedado"){
txt+=`AN: ${cons}. ECG ${soma}.`
}else{
txt+=`AN: ${cons}.`
}

document.getElementById('out').innerText=txt
}
