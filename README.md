Repo List
Um aplicativo React que lista repositórios do GitHub com suas respectivas issues, permitindo filtrar e navegar entre os estados das issues (abertas, fechadas ou todas). Este projeto foi desenvolvido durante um curso de ReactJS e utiliza a API do GitHub para obter informações sobre os repositórios.

⚠️ Nota: A API do GitHub possui um limite de requisições sem autenticação. Caso atinja o limite, você precisará aguardar ou utilizar autenticação para realizar mais requisições.

🚀 Funcionalidades
Adicionar o slug de repositórios do GitHub (ex.: facebook/react).
Listar as issues de um repositório selecionado.
Filtrar issues por estado:
Abertas (exibidas com fundo verde);
Fechadas (exibidas com fundo vermelho);
Todas.
Navegar entre páginas de issues.
🛠️ Tecnologias Utilizadas
As seguintes tecnologias foram utilizadas no desenvolvimento do projeto:

React (v18.3.1): Biblioteca JavaScript para construção de interfaces.
Styled Components (v6.1.13): Para estilização de componentes.
React Router DOM (v6.28.0): Para gerenciamento de rotas.
React Icons (v5.3.0): Para ícones.
Axios (v1.7.7): Para consumo de APIs.
React Scripts (v5.0.1): Para configuração e scripts de build.
📦 Como Executar
Siga os passos abaixo para rodar o projeto localmente:

Clone este repositório:

bash
Copiar código
git clone https://github.com/aleafernandes/repo_list.git
Acesse o diretório do projeto:

bash
Copiar código
cd repo_list
Instale as dependências:

bash
Copiar código
npm install
Inicie o servidor de desenvolvimento:

bash
Copiar código
npm start
Abra o aplicativo no navegador:

Acesse: http://localhost:3000
📋 Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

✍️ Autor
Alexandre Fernandes

📧 E-mail: alexandre.cmsvoo@gmail.com
🌐 Instagram: @ale.a.fernandes

⚙️ Melhorias Futuras
Implementar suporte para dark mode.
Melhorar o design responsivo.
Adicionar autenticação para evitar limites da API do GitHub.
Adicionar animações para melhorar a experiência do usuário.
