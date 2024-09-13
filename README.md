## Como iniciar a API

No terminal de um "npm install" depois "json-server --watch mocks/db.json" para roda a api fake, em outro terminal diferente "ng serve" para iniciar o projeto
http://localhost:4200/

## O que foi feito

Tela Inicial
Listagem das solicitações de abertura de empresa, podendo ser visualizar os principais dados de uma dada empresa, caso clique em 'Visualizar' e caso clique em 'Editar' redirecionar para a página específica.
A uma opção para cadastro de solicitações clicando em 'Solicitar Abertura'.

Tela de Adição/Edição de solicitações

Uma página com formulário dos dados pessoais, endereço e dados de empresa para preenchimento ou já preenchidas caso seja edição.
Ao finalizar o preenchimento e estando válido o formulário ao clicar em 'Salvar' deve:

Salvar a solicitação com o endpoint post da api fake.
Exibir modal com mensagem de sucesso ao fecha o modal e redirecionado para a tela inicial listando as solicitações salvas.

Configuração do Projeto
Prettier;
Lib UI Bootstrap;
Framework Angular, versão version 14.2.7.

## O que Não foi feito

O botão de enviar não está bloqueando o formulário, isso permite no envio do formulário, alguns detalhes no layout para ficar melhor o visual,não fiz teste unitario,esses são os pontos de melhoria.
