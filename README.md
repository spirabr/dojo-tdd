# Dojo - TDD + Jest

## Explicação simples

TDD (_Test Driven Development_) é uma técnica de programação no qual o foco principal são os testes. Os testes são escritos antes mesmo do código das funcionalidades.

A técnica se resume a um ciclo curto: `red-green-refactor`
- `red`: criar um teste que falha;
- `green`: faça mudanças no código para que o teste passe (e nada mais do que isso!);
- `refactor`: refatore a base de código que tem no momento, tornando-a mais clara e limpa. O objetivo é **refatorar**! Não vale adicionar mais funcionalidades!

## Pontos positivos

- Testes são criados constantemente;
- Testes são rodados constantemente;
- Faz com que o código seja bem modularizado e testável;

## Pontos negativos

- Não garante que o código está livre de erros! Bugs podem aparecer por bibliotecas externas ou corner-cases não mapeados;
- Não funciona 100% do tempo! Funciona bem para testes unitários, mas há outros tipos de teste (aceitação, regressão, até manual).
