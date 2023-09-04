// Mude a cor da tela para azul e depois para vermelho a cada 2s.

export default function addClass() {
  document.body.classList.toggle('active');
}

setInterval(addClass, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
