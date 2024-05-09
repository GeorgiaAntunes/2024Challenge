import React, { useEffect, useState } from 'react'

interface UserProps {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    name: string;
    bio: string;
    followers: number;
    following: number;
    public_repos: number;

}


const GitHubProfile: React.FC = () => {
    const [user, setUser] = useState<UserProps | null >(null);
    const username = 'GeorgiaAntunes'
  
    useEffect(() => {
    const fetchData = async () => {
        try {
            const data = await fetch(`https://api.github.com/users/${username}`)
            const response = await data.json()
            setUser(response);
            console.log(response)
        
        } catch (err) {
            console.log("Erro ao buscar dados do usuario: " + err)
        }

    }

    fetchData();
    },[username])

    return (
        <div> { user ? (
            <div>
            <img src={user.avatar_url} alt="Avatar" style={{ width: 100, height: 100, borderRadius: '50%' }} />
            <p>Nome: {user.name}</p>
            <p>Biografia: {user.bio}</p>
            <p>Seguidores: {user.followers}</p>
            {/* Adicione mais informações conforme necessário */}
            </div>
        ) : (<p> Carregando </p>) }</div>
    )
}

export default GitHubProfile;

// Exercício: Crie um componente React que faça uma requisição para a API do GitHub para obter informações 
// de um usuário e exiba essas informações na tela.

// Descrição:

// Crie um novo componente funcional chamado GitHubProfile.
// Use o useState para definir um estado para armazenar os dados do usuário (como nome, avatar, bio, etc.).
// Use o useEffect para fazer uma requisição GET para a API do GitHub quando o componente for montado.
// Atualize o estado com os dados do usuário obtidos da resposta da API.
// Exiba os dados do usuário na tela, como nome, avatar, bio, etc.
// Dicas:

// Você pode usar a biblioteca Axios para fazer a requisição HTTP para a API do GitHub.
// Utilize o endpoint da API do GitHub para obter informações de um usuário específico: https://api.github.com/users/{username}.
// Este exercício permitirá que você pratique o uso de useEffect para fazer uma requisição de API e atualizar o estado
// do componente com os dados obtidos. Além disso, você terá a oportunidade de trabalhar com a renderização 
// condicional para exibir os dados na tela somente após eles terem sido carregados da API.
