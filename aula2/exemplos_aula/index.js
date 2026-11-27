// ============================================================
// QUIZ DA COPA 2026 — GABARITO COMENTADO (Aula 1 · Ex1)
// Versão "tudo num arquivo só": dados + regras + fluxo juntos.
// Sistema de módulos: CommonJS (require / module.exports).
// Para rodar: npm install  e depois  npm start
// ============================================================

// require("prompt-sync") procura o pacote na pasta node_modules e traz o que ele exporta.
import promptSync from "prompt-sync";
// O pacote exporta uma FÁBRICA de funções; chamá-la com () devolve a função prompt() pronta para usar.
const prompt = promptSync();

// importar as outras partes do quiz:
import { perguntas } from "./dados.js";
import { verificar as conferir, mensagemFinal } from "./placar.js";
// import * as placar from "./placar.js"; // outra opção de import



// Traz o chalk, instalado com "npm install chalk@4" (versão 4 = CommonJS, funciona com require).
// A versão 4 foi FIXADA de propósito: na quinta veremos o que acontece com a versão mais nova.
import chalk from "chalk";

// ---------- 3) O FLUXO ----------
// Título em amarelo e negrito: chalk.bold.yellow(...) encadeia estilos.
console.log(chalk.bold.yellow("=== QUIZ DA COPA 2026 ==="));

// Contador de pontos. "let" porque o valor vai mudar (acertos++ mais abaixo).
let acertos = 0;

// Laço clássico: i vai de 0 até perguntas.length - 1 (um passo por pergunta).
for (let i = 0; i < perguntas.length; i++) {
  // Guarda a pergunta atual numa variável para não repetir perguntas[i] o tempo todo.
  const q = perguntas[i];

  // "\n" pula uma linha em branco; i + 1 mostra "1)", "2)"... (a contagem humana começa em 1).
  console.log(chalk.cyan(`\n${i + 1}) ${q.pergunta}`));

  // Percorre as opções; "indice" começa em 0, por isso mostramos indice + 1.
  q.opcoes.forEach(function (opcao, indice) {
    console.log(`   ${indice + 1}. ${opcao}`);
  });

  // Pausa o programa e espera a pessoa digitar + Enter. O resultado é uma STRING.
  const resposta = prompt("Sua resposta (1-4): ");

  // Chama a regra criada acima; devolve true ou false.
  if (conferir(resposta, q.correta)) {
    // Verde para acerto.
    console.log(chalk.green("✅ Acertou!"));
    // Soma 1 ponto (equivale a acertos = acertos + 1).
    acertos++;
  } else {
    // Vermelho para erro, revelando qual era a opção certa.
    console.log(
      chalk.red(`❌ Errou! A resposta certa era a opção ${q.correta}.`),
    );
  }
}

// Depois do laço: mensagem final em amarelo/negrito. O "\n" separa do resto.
console.log(chalk.bold.yellow("\n" + mensagemFinal(acertos, perguntas.length)));
