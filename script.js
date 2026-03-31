function pegarValores() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let erro = document.getElementById("erro");

    erro.innerText = "";

    if (n1 === "" || n2 === "") {
        erro.innerText = "Preencha todos os campos!";
        return null;
    }

    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    if (isNaN(n1) || isNaN(n2)) {
        erro.innerText = "Digite apenas números válidos!";
        return null;
    }

    return { n1, n2 };
}

function mostrarResultado(valor) {
    document.getElementById("resultado").innerText = "Resultado: " + valor;
}

function somar() {
    let valores = pegarValores();
    if (!valores) return;

    let resultado = valores.n1 + valores.n2;
    mostrarResultado(resultado);
}

function subtrair() {
    let valores = pegarValores();
    if (!valores) return;

    let resultado = valores.n1 - valores.n2;
    mostrarResultado(resultado);
}

function multiplicar() {
    let valores = pegarValores();
    if (!valores) return;

    let resultado = valores.n1 * valores.n2;
    mostrarResultado(resultado);
}

function dividir() {
    let valores = pegarValores();
    if (!valores) return;

    if (valores.n2 === 0) {
        document.getElementById("erro").innerText = "Não é possível dividir por zero!";
        return;
    }

    let resultado = valores.n1 / valores.n2;
    mostrarResultado(resultado);
}

function limpar() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado").innerText = "Resultado: ";
    document.getElementById("erro").innerText = "";
}