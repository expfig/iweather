# Test com Jest e Expo

feedbacks
[
  "getByTestId" => quando propiedade não e encontrada ele lança uma exeção de error,
  "queryByTestId" => quando propiedade não e encontrada ele não retorna uma exeção de error,
  "getByText" => quando propiedade for igual a passada ele retorna o componente em si,
]

## Instalação

1 -> npx expo install jest-expo jest
2 -> npm install --save-dev @types/jest
3 -> npm install --save-dev @testing-library/react-native --force
4 -> npm install --save-dev @testing-library/jest-native --force
5 -> npm install --save-dev jest-transformer-svg

## Teste unitários

Tal ....

## Teste de componente

 Tal como os teste unitários, vamos testar unidades. Essas unidades são os componentes que compõe a interface da nossa aplicação. Sendo assim, vamos testar cada componente separadamente.

## Mocks com Jests

  Permite substitui um obejto real e criar uma simulação durante a execução dos testes. E usado para isolar o código que estar sendo testado, fornecendo um comportamento predefenido e para não depender de fatores externos.

## Testando Hooks

## Cobertura de código

  É um relatório que fornece informações sobre a cobertura do código pelos testes. Ele mostra a porcentagem de linhas de código, funções, instruções ou ramificações que foram executadas durante a execução dos testes. O objetivo do coverage report é avaliar o quanto só código está sendo testado pelos testes automatizados.

## Teste de integração

  Verifica a interação e a comunicação correta entre diferentes componentes, módulos ou sistemas que podem surgir quando os componentes são integrados e testar o comportamento do sistema como um todo.
