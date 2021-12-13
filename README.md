# Entrega - Lista de Produtos - Continuação

Para começar faça clone deste repositório.

> **Aviso!**
> 
> Ao clonar o projeto você verá dois arquivos JavaScript, sendo um deles para armazenar exclusivamente os dados que você irá utilizar e o segundo onde irá ser inserido sua lógica, lembre-se que a organização do seu projeto é tão importante quanto seu código. Nem sempre será só você que irá utilizar o projeto

Agora que já está bem fixado o conceito de DOM, vamos avançar com a nossa **Lista de Produtos** criada anteriormente.

Na lista passada, viamos uma listagem de produtos e alguns filtros que no final resultavam em um valor total.

Vamos trazer nosso projeto para mais próximo de um projeto real, adicionando mais algumas funcionalidades e refatorando outras.

Veja qual é a ideia final da nossa listagem de produtos:

![Layout lista produtos continuação](./src/img/lista-frutas-continuacao.gif)

> **Importante!**
> 
> Assim como a entrega passada, o foco principal é a manipulação de DOM e o Javascript, ou seja, **as melhoras do CSS são opcionais**.

Nesta entrega, teremos algumas alterações não só visuais, mas também na nossa base de dados(lista de produtos). Agora, além de iterar sobre a lista de produtos, você também irá iterar sobre uma lista de nutrientes, em cada objeto produto.

Você pode ir até o arquivo que contém a nossa base de dados, `dataProdutos.js`, e ver o que foi modificado!

## Tarefas

Para avançarmos com a nossa Lista de Produtos, teremos algumas tarefas. Vamos melhorar refatorar algumas funcionalidades e adicionar algumas também:

1. Refatorar função que lista os produtos, para que:
   1. Insirá um botão para adicionar produto ao carrinho;
   2. Faça a listagem dos nutrientes do produto;
2. Refatoração do filtro por **Campo de Busca**: fazer com que a busca seja feita, não apenas por nome do produto, mas também por categoria ou seção;
3. Implementação da funcionalidade do carrinho;
4. Refatoração da funcionalidade **Preço Total**: agora o cáculo deverá ser feito em cima dos produtos adicionados no carrinho.

## Passo a Passo

### Passo 1 - Refatorar função que lista os produtos

Na entrega passada, vimos como construir uma função que faz a listagem dos produtos através do DOM. Agora como nossos produtos possuem mais propriedades, precisamos atualizar nossa função, para que todas essas propriedade sejam listadas também!

#### Inserir botão para adicionar produto ao carrinho

Primeiro, refatore a sua função fazendo com que cada produto tenha um botão "Adicionar ao carrinho", que futuramente será responsável por fazer a adição dos produtos ao carrinho, a partir do seu clique.

#### Listagem dos nutrientes

Em seguida, você também vai precisar imprimir os nutrientes de cada produto no card de produto. Cada objeto produto agora possui uma array de nutrientes, você vai precisar percorrer essa array para cosneguir mostrar cada um dos nutrientes na página HTML.

### Passo 2 - Refatoração do filtro por Campo de Busca

Nesse passo, iremos subir o nível do nosso filtro por campo de busca. Você vai precisar pensar em uma forma de procurar por produtos que possuam a palavra-chave pesquisada pelo usuário, não apenas no nome do produto, mas também, na categoria ou seção.

### Passo 3 - Implementação da funcionalidade do carrinho

Agora sim, chegamos em uma nova funcionalidade desta entrega! Como todo e-commerce, deve ser possível adicionar os produtos desejados no carrinho, para que o usuário possa dar continuidade a sua compra.

Então, vamos implementar essa funcionalidade!

A partir do clique no botão "Adicionar ao Carrinho", que você já implementou no card de produtos no passo anterior, faça com o que esse produto, que recebeu o clique, seja adicionar no carrinho.

**É importante ressaltar que, os produtos não podem ser removido da listagem de produtos!**

### Passo 4 - Refatoração da funcionalidade Preço Total

E para finalizar, agora que nossa lista de produtos possui um carrinho, também precisamos atualizar a funcionalidade faz o cálculo do preço total. Agora, esse cálculo será **apenas em cima dos produtos adicionados, pelo usuário, no carrinho**, e não mais em cima de todos os produtos listados.

> **Dica!**
> 
> Lembre-se que como visto antes, quando trabalhamos com arrays e objetos, temos muitas possibilidades de métodos para nos auxiliar a deixar nosso código mais enxuto e de fácil leitura. Escolha o mais adequado para as situações propostas.

## Extra

Agora que você já fez os pontos principais da entrega, sinta-se a vontade para criar mais tipos de filtros e deixar sua entrega ainda mais dinâmica.

## Envio

Faça o push do código para o seu repositório GitHub e implemente-o GitHub pages. No Canvas, por favor, envie sua url do GitHub Pages e envie o link do seu repositório nos comentários. Deixe o link do seu repositório como internal.