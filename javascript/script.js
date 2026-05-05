function RolarDado(lados) {
    var numero = Math.floor(Math.random() * lados ) +1;
    if  (lados == 20)  {
        document.getElementById("resultadod20").innerText = "Resultado: " + numero;
    }
    if (lados == 6) {
        document.getElementById("resultadod6").innerText = "Resultado: " + numero;
    }
}   

// Espera o DOM carregar para garantir que os elementos existem
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("character-form");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault(); // Impede o refresh da página
            CriarPersonagem();
        });
    }

    // Botão cancelar
    const btnCancel = document.getElementById("btn-cancel");
    if (btnCancel) {
        btnCancel.addEventListener("click", () => {
            window.location.href = "meus_personagens.html";
        });
    }
});

function PegarDadosFormulario() {
    // Pegando os valores com os IDs CORRETOS do seu HTML
    let nome = document.getElementById("character-name").value;
    let raca = document.getElementById("character-race").value;
    let classe = document.getElementById("character-class").value;
    let nivel = document.getElementById("character-level").value;
    
    const atributos = {
        forca: parseInt(document.getElementById("character-str").value) || 0,
        destreza: parseInt(document.getElementById("character-dex").value) || 0,
        constituicao: parseInt(document.getElementById("character-con").value) || 0,
        inteligencia: parseInt(document.getElementById("character-int").value) || 0,
        sabedoria: parseInt(document.getElementById("character-wis").value) || 0,
        carisma: parseInt(document.getElementById("character-cha").value) || 0
    };
    
    return {
        nome,
        raca,
        classe,
        nivel,
        atributos
    };
}

function CriarPersonagem() {
    const personagem = PegarDadosFormulario();
    SalvarPersonagem(personagem);
    // O redirecionamento agora funcionará pois o preventDefault segurou a página
    window.location.href = "meus_personagens.html";
}

function SalvarPersonagem(personagem) {
    const lista = JSON.parse(localStorage.getItem("personagens")) || [];
    lista.push(personagem);
    localStorage.setItem("personagens", JSON.stringify(lista));
}



