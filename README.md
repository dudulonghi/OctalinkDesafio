
# Crud Completo com Angular - Octalink

O projeto é responsável por realizar um CRUD utilizando o Dummy JSON. Inclui operações de criar, deletar, visualizar e atualizar dados.

## Status do Projeto
*Status atual: Em desenvolvimento* 

## Funcionalidades
- [x] Visualizar os Dados
- [x] Adicionar os Dados
- [x] Deletar os Dados
- [x] Buscar os Dados
- [ ] Atualizar os Dados

## Tecnologias Utilizadas
- Frontend: Angular

## Visual do Projeto

### Interface do Usuário

Aqui está o processo de desenvolvimento da interface do projeto, desde o design no Figma até a tela final:

1. **Design no Figma**
   - Primeiramente, foi criado o design de todas as telas e fluxos de usuário no Figma para planejar a interface e a navegação.

     - **Protótipo de Design - Tela Principal**:
       ![Protótipo Figma](https://ibb.co/VHXcvZ5)
       
     - **Protótipo de Design - Tela de Cadastro **:
       ![Protótipo Figma](https://ibb.co/2SfLvv7)
       
     - **Protótipo de Design - Tela de Confirmar Delete**:
       ![Protótipo Figma](https://ibb.co/St22T1G)


2. **Componentização**
   - Depois do design, realizaei a componentização das partes principais da interface para reutilização e manutenção.

     - **Componentização da Tela Principal**:
       ![Componente Header](https://ibb.co/dGjCCqj)

     - **Componentização das Telas de Cadastro e Delete**:
       ![Componente Tabela de Dados](https://ibb.co/K06CK7f)


3. **Tela Final**
   - Aqui está a tela final em funcionamento com todos os componentes integrados.

     - **Página Inicial**:
       ![Página Inicial](https://ibb.co/V2FQjGL)
       
     - **Página Inicial com Cadastro**:
       ![Página Inicial-cadastro](https://ibb.co/dGV8xhz)
       
     - **Página Inicial com Delete**:
       ![Página Inicial-delete](https://ibb.co/Jmj99rk)

## Pré-requisitos
- Node.js
- Angular 14

## Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/dudulonghi/OctalinkDesafio.git
   
2. Entre no projeto :
		Entre na pasta DesafioOctalink

3. Instale as Dependências :
	 ```bash
	 npm install
4. Rode na sua máquina com :
	 ```bash
	 ng serve
5. Acesse o projeto no navegador pelo endereço: [http://localhost:4200/](http://localhost:4200/).

## Como Usar

Aqui está uma explicação de como utilizar cada funcionalidade do projeto:

### Visualizar Dados
- Ao acessar a página inicial do projeto, você verá uma lista de dados exibida em uma tabela.
- Cada linha representa um item, mostrando todos os dados [exceto os que tinham as categorias indesejadas].
- O Lazy loading foi utilizado de maneira onde cada vez que passar a página da tabela, carrega 6 itens de cada vez, e não todos os dados.
![Lazy](https://ibb.co/ScpxX9g)

### Adicionar Dados
- Para adicionar um novo item, clique no botão "Adicionar" localizado no topo da tabela.
- Preencha as informações solicitadas no formulário que será exibido.
- Após preencher todos os campos, clique em "Salvar" para adicionar o novo item à lista.
- Lembrando que como estou utilizando o https://dummyjson.com/ os dados não são salvos no servidor, mas podemos ver o retorno da API. 

### Deletar Dados
- Para deletar um item, clique no ícone de lixeira ao lado do item desejado na tabela.
- Confirme a exclusão quando solicitado.
- O item será removido da lista imediatamente após a confirmação.
- Lembrando que não é possível deletar os dados do servidor, pois estou utilizando o https://dummyjson.com/, para verificar podemos olhar o retorno. E para o delete, o dado é removido da tabela temporariamente, após atualizar a página ele volta.

### Buscar Dados
- Use o campo de busca no topo da página para procurar por itens específicos.
- Digite o termo de pesquisa, ele irá exibir os dados em uma lista, vinculado com a tabela. Lembrando que é possível pesquisar por: Nome, Categoria, Preço e Descrição

### Atualizar Dados
- Para atualizar um item existente, clique no ícone de lápis ao lado do item desejado na tabela.
- O formulário de edição será exibido com os dados atuais do item preenchidos.
- Atualize as informações conforme necessário e clique em "Salvar" para aplicar as mudanças.
- Lembrando que o dado não vai ser atualizados no servidor mas podemos verificar a resposta da API

Cada funcionalidade foi projetada para ser intuitiva, facilitando o gerenciamento dos dados de forma rápida e eficiente.

## Explicação do Código

Todo o código deste projeto foi escrito em inglês para facilitar o entendimento por uma audiência global. Isso ajuda a garantir que desenvolvedores, colaboradores e revisores de diferentes lugares possam entender e contribuir facilmente com o projeto.

### Estrutura do Código
- **Componentes Modulares**: Cada funcionalidade foi dividida em componentes reutilizáveis, o que permite uma organização mais limpa e facilita a manutenção do código.
- **Serviços para Manipulação de Dados**: As operações de CRUD (Criar, Ler, Atualizar e Deletar) foram implementadas através do serviço (Cadastro.service), garantindo uma separação clara entre a lógica de negócios e a interface do usuário.
## Estrutura do Código

Aqui está uma visão da estrutura de pastas e arquivos do projeto para facilitar o entendimento da organização do código.

![Estrutura do Código](https://ibb.co/vLsGStt)

- **src/app**: Contém os componentes principais, serviços, modals e interfaces utilizados no projeto.

![Estrutura do Código app](https://ibb.co/z50S2z5)

Essa organização permite uma divisão clara das funcionalidades, facilitando a manutenção e a escalabilidade do projeto.
## Conclusão

Obrigado por esse projeto! Espero que ele cumpra todas as exigências. Se você tiver sugestões ou dúvidas, pode entrar em contato comigo.

### Desenvolvedor

Desenvolvido por:

![Minha Imagem](https://ibb.co/brBKQxS)

Você pode me encontrar no [LinkedIn](https://www.linkedin.com/in/eduardolonghi/) ou entrar em contato via [email](mailto:contato.eduardolonghi@gmail.com).

### Licença

Este projeto está licenciado sob a MIT License. 





