let numeros = [];

function adicionarNumero() {
  const input = document.getElementById("numero");
  const valor = Number(input.value);

  if (!isNaN(valor)) {
    numeros.push(valor);
    atualizarLista();
    input.value = "";
    input.focus();
  } else {
    alert("Digite um número válido!");
  }
}

function atualizarLista() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "Números: " + numeros.join(", ");
}

function calcularMedia() {
  if (numeros.length === 0) {
    alert("Adicione ao um número antes de calcular.");
    return;
  }

  const soma = numeros.reduce((a, b) => a + b, 0);
  const media = soma / numeros.length;

  document.getElementById("resultado").innerHTML =
    "Média: " + media.toFixed(2);
}

function resetar() {
  numeros = [];
  document.getElementById("lista").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("numero").value = "";
}
