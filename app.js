let db = JSON.parse(localStorage.getItem('meevo')||'{}');
db.pacientes=db.pacientes||[];
db.agenda=db.agenda||[];
db.financas=db.financas||[];
db.rotina=db.rotina||[];
db.alertas=db.alertas||[];

function save(){localStorage.setItem('meevo',JSON.stringify(db));update();}

function nav(id){
document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
document.getElementById(id).classList.add('active');
}

document.querySelectorAll('#estado button').forEach(b=>{
b.onclick=()=>{
document.querySelectorAll('#estado button').forEach(x=>x.classList.remove('active'));
b.classList.add('active');
updateEF();
}
});

function updateEF(){
let est=document.querySelector('#estado .active')?.innerText||"";
document.getElementById('ef_out').innerText="GERAL: "+est;
}

function addPaciente(){
db.pacientes.push({
nome:document.getElementById('p_nome').value,
sexo:document.getElementById('p_sexo').value
});
save();
}

function addAgenda(){
db.agenda.push({
desc:ag_desc.value,
data:ag_data.value,
inicio:ag_inicio.value,
fim:ag_fim.value,
valor:Number(ag_valor.value||0)
});
save();
}

function addFin(){
db.financas.push({
desc:fin_desc.value,
valor:Number(fin_valor.value||0),
tipo:fin_tipo.value
});
save();
}

function addRotina(){
db.rotina.push({
desc:rot_desc.value,
dia:rot_dia.value,
hora:rot_hora.value
});
save();
}

function addAlerta(){
db.alertas.push({
txt:alerta_txt.value,
time:Number(alerta_time.value||0),
data:Date.now()
});
save();
renderAlertas();
}

function renderAlertas(){
let ul=document.getElementById('listaAlertas');
ul.innerHTML='';
db.alertas.forEach(a=>{
let li=document.createElement('li');
li.innerText=a.txt;
ul.appendChild(li);
});
}

function update(){
document.getElementById('listaAgenda').innerHTML=db.agenda.map(e=>"<li>"+e.desc+"</li>").join('');
document.getElementById('listaFin').innerHTML=db.financas.map(e=>"<li>"+e.desc+" R$"+e.valor+"</li>").join('');
document.getElementById('listaRotina').innerHTML=db.rotina.map(e=>"<li>"+e.desc+"</li>").join('');
document.getElementById('fin_resumo').innerText="Total: R$ "+db.financas.reduce((a,b)=>a+b.valor,0);
document.getElementById('resumo').innerText="Pacientes: "+db.pacientes.length+" | Agenda: "+db.agenda.length;
renderAlertas();
}

update();
