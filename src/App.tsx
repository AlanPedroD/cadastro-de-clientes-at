import { useState } from 'react'
import './App.css'

type Cliente = {
  nome: string
  email: string
}

function App() {
  const [nomeCliente, setNomeCliente] = useState("")
  const [emailCliente, setEmailCliente] = useState("")
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [clientesEstaoVisiveis, setClientesEstaoVisiveis] = useState(false)

  function cadastrarCliente() {
    if (nomeCliente.trim().length < 3 || emailCliente === "") {
      return
    }

    const cliente = {
      nome: nomeCliente,
      email: emailCliente
    }

    setClientes([...clientes, cliente])

    setNomeCliente("")
    setEmailCliente("")

    console.log(cliente)
  }
  return (
    <main>
      <h1>Cadastro de Clientes</h1>

      <form onSubmit={(e) => {
        e.preventDefault() // Evita que a página seja recarregada ao enviar o formulário
        cadastrarCliente()
      }}>
        <label>Nome do cliente</label>
        <input
          type="text"
          pattern="[A-Za-zÀ-ÿ ]+"
          value={nomeCliente}
          onChange={(evento) => setNomeCliente(evento.target.value)}
        />

        <label>E-mail do cliente</label>
        <input type="email" value={emailCliente} onChange={(e) => setEmailCliente(e.target.value)} />

        <button type="submit">Cadastrar Cliente</button>
      </form>

      <button
        type="button"
        onClick={() => setClientesEstaoVisiveis(!clientesEstaoVisiveis)}
      >
        {clientesEstaoVisiveis
          ? "Ocultar clientes"
          : "Ver clientes cadastrados"}
      </button>

      {clientesEstaoVisiveis && (
        <section className="clientes">
          <h2>Clientes cadastrados</h2>

          {clientes.length === 0 ? (
            <p>Nenhum cliente cadastrado.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>E-mail</th>
                </tr>
              </thead>

              <tbody>
                {clientes.map((cliente) => (
                  <tr key={cliente.email}>
                    <td>{cliente.nome}</td>
                    <td>{cliente.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      )}

      {/* Esses paragrafos abaixo vão mostrar o que o usuário digitou nos inputs acima. O React vai atualizar eles automaticamente, sem precisar de um botão de "Atualizar". são apenas para teste */}
      {/* <p>Nome: {nomeCliente}</p>
      <p>E-mail: {emailCliente}</p> */}
    </main>
  )
}

export default App

//* O useState é uma ferramenta do React para guardar e controlar informações que podem mudar na tela.

// No nosso cadastro de clientes, por exemplo, o usuário vai digitar:

// Nome: João

// O React precisa guardar esse "João". É aí que usamos o useState.
//* Um exemplo bem simples:
//? const [nomeCliente, setNomeCliente] = useState("")

//* Quando o usuário digitar
// Precisamos avisar ao React:
// "O usuário digitou alguma coisa. Atualize nomeCliente."
// Para isso usamos onChange: