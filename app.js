let db = JSON.parse(localStorage.getItem('meevo')||'{}');
db.pacientes=db.pacientes||{};
db.agenda=db.agenda||[];
db.financas=db.financas||[];

function save(){localStorage.setItem('meevo',JSON.stringify(db));render();}

function nav(id){
document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
document.getElementById(id).classList.add('active');
}

function setPaciente(){
let p=document.getElementById('paciente').value;
db.pacienteAtivo=p;
db.pacientes[p]=db.pacientes[p]||[];
save();
}

function salvarEvolucao(){
let txt=document.getElementById('evolucao').value;
db.pacientes[db.pacienteAtivo].push(txt);
save();
}

function addAgenda(){
let desc=agDesc.value;
let val=Number(agValor.value||0);
db.agenda.push({desc,val});
db.financas.push({desc,val});
save();
}

document.getElementById('pdfInput').addEventListener('change', function(e){
let file=e.target.files[0];
let reader=new FileReader();
reader.onload=function(){
document.getElementById('pdfText').innerText=reader.result.slice(0,1000);
};
reader.readAsText(file);
});

function render(){
listaAgenda.innerHTML=db.agenda.map(e=>"<li>"+e.desc+"</li>").join('');
listaFin.innerHTML=db.financas.map(e=>"<li>"+e.desc+" R$"+e.val+"</li>").join('');
}

render();
