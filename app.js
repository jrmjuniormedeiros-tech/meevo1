function parseLab() {
  let input = document.getElementById("labInput").value;

  let exames = [
    "Hb", "Ht", "Leuco", "Plaqt", "Cr", "Ur",
    "Na", "K", "Mg", "Ca", "Cl",
    "TGO", "TGP", "INR", "PCR", "Lac"
  ];

  let output = "";

  exames.forEach(e => {
    let regex = new RegExp(e + "\\s*:?\\s*(\\d+\\.?\\d*)", "i");
    let match = input.match(regex);
    if (match) output += `${e}: ${match[1]}\n`;
  });

  document.getElementById("labOutput").innerText = output;
}

function calcDVA() {
  let peso = document.getElementById("peso").value;
  let dose = document.getElementById("dose").value;

  let resultado = peso * dose;
  document.getElementById("resultadoDVA").innerText =
    `Dose total: ${resultado} mcg/min`;
}

function calcSed() {
  let peso = document.getElementById("pesoSed").value;
  let dose = document.getElementById("doseSed").value;

  let resultado = peso * dose;
  document.getElementById("resultadoSed").innerText =
    `Dose: ${resultado}`;
}

function organizarPrescricao() {
  let texto = document.getElementById("prescInput").value.toLowerCase();

  let categorias = {
    "Antibióticos": ["cef", "piper", "mero"],
    "Anti-hipertensivos": ["losartan", "enalapril"],
    "Psicotrópicos": ["diazepam", "haloperidol"]
  };

  let output = "";

  for (let cat in categorias) {
    output += `\n${cat}:\n`;

    categorias[cat].forEach(droga => {
      if (texto.includes(droga)) {
        output += "- " + droga + "\n";
      }
    });
  }

  document.getElementById("prescOutput").innerText = output;
}
