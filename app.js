let db=JSON.parse(localStorage.getItem('meevo')||'{}')
db.hospitais=db.hospitais||[]
db.pacientes=db.pacientes||{}
db.evolucoes=db.evolucoes||{}
db.agenda=db.agenda||[]
db.financas=db.financas||[]
db.rotina=db.rotina||[]
db.alertas=db.alertas||[]

function save(){localStorage.setItem('meevo',JSON.stringify(db));render()}

function go(id){
document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'))
document.getElementById(id).classList.add('active')
}

function addHospital(){
let nome=hospitalNome.value
db.hospitais.push(nome)
save()
}

function setHospital(){
db.hospitalAtivo=hospitalSelect.value
save()
}

function addPaciente(){
let nome=pacienteNome.value
db.pacientes[nome]={sexo:pacienteSexo.value}
save()
}

function setPaciente(){
db.pacienteAtivo=pacienteSelect.value
save()
}

function salvarEvolucao(){
let p=db.pacienteAtivo
db.evolucoes[p]=db.evolucoes[p]||[]
db.evolucoes[p].push(evolucao.value)
save()
}

document.querySelectorAll('#estado button').forEach(b=>{
b.onclick=()=>{
document.querySelectorAll('#estado button').forEach(x=>x.classList.remove('active'))
b.classList.add('active')
efTexto.innerText="GERAL: "+b.innerText
}
})

function addAgenda(){
db.agenda.push({t:agTitulo.value,d:agData.value,v:Number(agValor.value||0)})
db.financas.push({desc:agTitulo.value,val:Number(agValor.value||0)})
save()
}

function addFin(){
db.financas.push({desc:finDesc.value,val:Number(finVal.value||0)})
save()
}

function addRot(){
db.rotina.push({desc:rotDesc.value})
save()
}

function addAlerta(){
db.alertas.push({txt:alertaDesc.value})
save()
}

function render(){
hospitalSelect.innerHTML=db.hospitais.map(h=>`<option>${h}</option>`).join('')
pacienteSelect.innerHTML=Object.keys(db.pacientes).map(p=>`<option>${p}</option>`).join('')
agendaLista.innerHTML=db.agenda.map(e=>`<li>${e.t}</li>`).join('')
finLista.innerHTML=db.financas.map(e=>`<li>${e.desc} R$${e.val}</li>`).join('')
rotLista.innerHTML=db.rotina.map(e=>`<li>${e.desc}</li>`).join('')
listaAlertas.innerHTML=db.alertas.map(a=>`<li>${a.txt}</li>`).join('')
homeResumo.innerText=`Hospitais:${db.hospitais.length} | Pacientes:${Object.keys(db.pacientes).length}`
finResumo.innerText="Total: R$ "+db.financas.reduce((a,b)=>a+b.val,0)
}

render()
