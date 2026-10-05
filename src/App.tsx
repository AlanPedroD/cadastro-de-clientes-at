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
  const [indiceEditando, setIndiceEditando] = useState<number | null>(null)

  function cadastrarCliente() {
    if (nomeCliente.trim().length < 3 || emailCliente === "") {
      return
    }

    const cliente = {
      nome: nomeCliente,
      email: emailCliente
    }

    if (indiceEditando === null) {
      setClientes([...clientes, cliente])
    } else {
      setClientes(
        clientes.map((clienteAtual, indice) =>
          indice === indiceEditando ? cliente : clienteAtual
        )
      )
      setIndiceEditando(null)
    }

    setNomeCliente("")
    setEmailCliente("")

    console.log(cliente)
  }

  function editarCliente(indice: number) {
    setNomeCliente(clientes[indice].nome)
    setEmailCliente(clientes[indice].email)
    setIndiceEditando(indice)
  }

  function cancelarEdicao() {
    setNomeCliente("")
    setEmailCliente("")
    setIndiceEditando(null)
  }

  function enviarFormulario(evento: React.SubmitEvent<HTMLFormElement>) {
    evento.preventDefault()
    cadastrarCliente()
  }

  return (
    <main>
      <h1>Cadastro de Clientes</h1>

      <form onSubmit={enviarFormulario}>
        <label>Nome do cliente</label>
        <input
          type="text"
          pattern="[A-Za-zÀ-ÿ ]+"
          value={nomeCliente}
          onChange={(evento) => setNomeCliente(evento.target.value)}
        />

        <label>E-mail do cliente</label>
        <input type="email" value={emailCliente} onChange={(e) => setEmailCliente(e.target.value)} />

        <button type="submit">
          {indiceEditando === null ? "Cadastrar Cliente" : "Salvar alterações"}
        </button>

        {indiceEditando !== null && (
          <button type="button" onClick={cancelarEdicao}>
            Cancelar
          </button>
        )}
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
                  <th>Ações</th>
                </tr>
              </thead>

              <tbody>
                {clientes.map((cliente, indice) => (
                  <tr key={cliente.email}>
                    <td>{cliente.nome}</td>
                    <td>{cliente.email}</td>
                    <td>
                      <button type="button" onClick={() => editarCliente(indice)}>
                        Editar
                      </button>
                    </td>
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
