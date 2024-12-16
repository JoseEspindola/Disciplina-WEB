const DetalhesUsuario = () => {
    const pessoas = [
        {
        id: 0,
        pessoa: {
            nome: "João",
            idade: 11,
            profissoes: ["Youtuber","Estudante"]
            }
        },
        {
          id: 1,
          pessoa: {
            nome: "Julius",
            idade: 45,
            profissoes: ["Padeiro", "Faxineiro", "Motorista"]
          }
        }
    ]
    return (
        <div className="conteudo">
          <ul>
            {
              pessoas.map((item) => (
                <li key={item.id}>
                    <strong>Nome: {item.pessoa.nome}</strong> <br/>
                    <strong>Idade: {item.pessoa.idade} anos </strong> <br/>
                    <strong>Profissões</strong>
                    <ul>
                        {item.pessoa.profissoes.map((profisao,index) => (
                            <li key={index}>{profisao}</li>
                        ))}
                    </ul>
                    {item.pessoa.idade >= 18 ? 
                    (<p>Pode tirar carteira de habilitação</p>)
                    :
                    (<p>Não pode tirar carteira de habilitação</p>)
                    }                    
                </li>
              ))
            }
          </ul>
        </div>
      );
}
export default DetalhesUsuario;