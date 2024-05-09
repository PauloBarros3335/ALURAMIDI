// Selecionar todas as teclas com a classe 'tecla'
const teclas = document.querySelectorAll(".tecla");

// Função para tocar o som correspondente à tecla
function tocarSom(tecla) {
  // Encontra o áudio correspondente à tecla com base no ID
  const som = document.getElementById(`som_${tecla.classList[1]}`);
  if (som) {
    // Reproduzir o som se encontrado
    som.currentTime = 0; // Reinicia o som para tocar do início
    som.play();
  }
}

// Função para ativar a animação da tecla
function ativarTecla(tecla) {
  tecla.classList.add("ativa");
}

// Função para desativar a animação da tecla
function desativarTecla(tecla) {
  tecla.classList.remove("ativa");
}

// Adicionar eventos de clique e toque às teclas
teclas.forEach((tecla) => {
  tecla.addEventListener("click", () => {
    // Tocar o som ao clicar na tecla
    tocarSom(tecla);
    // Ativar a animação ao clicar na tecla
    ativarTecla(tecla);
    // Desativar a animação após um breve atraso
    setTimeout(() => desativarTecla(tecla), 200);
  });

  tecla.addEventListener("touchstart", (evento) => {
    // Impedir o comportamento padrão de toque
    evento.preventDefault();
    // Tocar o som ao tocar na tecla
    tocarSom(tecla);
    // Ativar a animação ao tocar na tecla
    ativarTecla(tecla);
    // Desativar a animação após um breve atraso
    setTimeout(() => desativarTecla(tecla), 200);
  });
});
