// ---------- 2) AS REGRAS ----------
// Função que decide se a resposta digitada está certa.
export function verificar(resposta, correta) {
  // prompt() SEMPRE devolve texto ("3"); "correta" é número (3). Com === "3" e 3 são diferentes.
  // Number("3") converte o texto em número 3, então a comparação funciona.
  return Number(resposta) === correta;
}

// Função que monta o texto do fim do jogo.
export function mensagemFinal(acertos, total) {
  // Template string (crase): ${...} insere o valor das variáveis no texto.
  return `Você acertou ${acertos} de ${total}! 🏆`;
}
