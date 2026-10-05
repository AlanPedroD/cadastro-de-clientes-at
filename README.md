# Cadastro de Clientes

Um programa simples para cadastrar clientes, ver a lista e corrigir os dados quando algo for digitado errado.

Feito com **React** e **TypeScript**.

🔗 **Acesse online:** https://alanpedrod.github.io/cadastro-de-clientes-at/

## O que ele faz

- Cadastra clientes com nome e e-mail
- Mostra ou oculta a lista de clientes cadastrados
- Permite editar um cliente já cadastrado
- Permite cancelar a edição sem alterar nada

## Como usar

**Cadastrar um cliente**
1. Digite o nome e o e-mail.
2. Clique em **Cadastrar Cliente**.

**Ver os clientes**
- Clique em **Ver clientes cadastrados**. Para esconder a lista, clique em **Ocultar clientes**.

**Editar um cliente**
1. Abra a lista de clientes.
2. Clique em **Editar** na linha do cliente.
3. Os dados vão aparecer no formulário. Corrija o que precisar.
4. Clique em **Salvar alterações**. Se desistir, clique em **Cancelar**.

## Regras do formulário

- O nome precisa ter pelo menos 3 letras.
- O nome aceita apenas letras e espaços.
- O e-mail precisa ser preenchido e ter um formato válido.

## Como rodar o projeto

Você precisa ter o [Node.js](https://nodejs.org) instalado.

```bash
# 1. Instale as dependências
npm install

# 2. Inicie o programa
npm run dev
```

Depois, abra no navegador o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

## Tecnologias utilizadas

- [React](https://react.dev): para construir a interface
- [TypeScript](https://www.typescriptlang.org): para deixar o código mais seguro
- [Vite](https://vite.dev): para rodar e montar o projeto
- CSS: para o visual da página

## Observação

Os clientes ficam guardados apenas enquanto a página está aberta. Se você recarregar ou fechar a página, a lista é apagada.

## Autor

Alan Dias