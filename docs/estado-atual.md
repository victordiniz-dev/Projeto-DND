# Estado Atual do Projeto

## 1. VISÃO GERAL

O projeto apresenta-se como um protótipo de hub para uma mesa de Dungeons & Dragons, com foco em organizar uma experiência inicial para navegação entre páginas de personagens, campanhas, monstros e criação de fichas. A estrutura atual sugere uma interface institucional, com destaque visual em tema escuro, elementos de navegação e telas voltadas a um uso mais conceitual do que funcional.

### Estrutura de pastas e arquivos atual

- [index.html](../index.html): página inicial com apresentação geral e acesso rápido.
- [criar_personagem.html](../criar_personagem.html): página dedicada ao cadastro de personagem.
- [meus_personagens.html](../meus_personagens.html): página de listagem de personagens.
- [campanhas.html](../campanhas.html): arquivo presente, mas sem conteúdo relevante.
- [monstruario.html](../monstruario.html): arquivo presente, mas sem conteúdo relevante.
- [css/style.css](../css/style.css): folha de estilos central do projeto.
- [javascript/script.js](../javascript/script.js): arquivo de script com lógica antiga e incompleta.
- [docs/estado-atual.md](estado-atual.md): relatório atual do estado do repositório.

## 2. FUNCIONALIDADES

### Funcionalidades já existentes e aparentemente operacionais

- Navegação entre páginas por meio de uma barra superior com links principais.
- Página inicial com seção de destaque visual, mensagem de abertura e cards de acesso rápido.
- Página de personagens com cabeçalho, botão de criação e estado vazio para quando ainda não existem fichas.
- Página de criação de personagem com formulário estruturado para dados básicos e atributos.
- Estilização visual consistente em tema escuro, com identidade visual própria baseada em cores douradas e contraste alto.
- Comportamentos de responsividade básicos para telas menores, especialmente nas páginas com formulário e cards.

### Funcionalidades incompletas ou quebradas

- As páginas de campanhas e monstruário não foram implementadas de forma útil; elas aparecem como páginas quase vazias.
- Os links que apontam para campanhas e monstros não levam a uma experiência real, pois ainda não existem telas completas para esses módulos.
- A página de criação de personagem exibe um formulário, mas não há fluxo real de envio, validação de persistência ou atualização da lista de personagens.
- A página de personagens não exibe personagens reais, porque não há origem de dados, armazenamento nem renderização dinâmica.
- O arquivo de script não está conectado às páginas atuais de forma útil; ele parece ser um rascunho antigo e não participa do fluxo principal da interface.
- Em [javascript/script.js](../javascript/script.js), o código busca atualizar elementos que não correspondem ao conteúdo atual das páginas, o que indica uma lógica desatualizada.

## 3. ESTRUTURA DO CÓDIGO

### HTML

O HTML está organizado em páginas separadas, cada uma com uma responsabilidade específica: entrada, criação de personagem e lista de personagens. Há uso de elementos semânticos como navegação, seção principal, formulário e título, o que é positivo. No entanto, o padrão ainda faz bastante uso de elementos genéricos para estruturar conteúdo, o que torna a leitura do markup menos clara do que seria ideal em um projeto maior.

A repetição da barra superior em várias páginas é um ponto de atenção, porque o mesmo bloco de navegação é reescrito manualmente em cada arquivo. Isso funciona, mas limita a manutenção. Além disso, algumas páginas ainda estão incompletas e parecem servir como espaço reservado.

### CSS

O CSS está concentrado em um único arquivo compartilhado, o que facilita a padronização visual do projeto. A folha de estilos utiliza variáveis para cores, separação por seções e media queries para adaptações responsivas. Isso mostra uma organização relativamente boa para um projeto pequeno.

Mesmo assim, há sinais de repetição: estilos similares para botões, formulários e cards aparecem em mais de um contexto, e a estrutura de classes é bem extensa. O projeto usa classes customizadas combinadas com componentes do Bootstrap, o que é funcional, mas mistura duas abordagens de estilização em um mesmo fluxo.

### JavaScript

O JavaScript está muito simples e pouco integrado ao restante do projeto. Há funções isoladas, sem um padrão claro de inicialização, sem organização em módulos e sem camada de estado. A lógica atual não acompanha o fluxo das páginas HTML que foram montadas no projeto, o que sugere que o script foi deixado como esboço ou como código antigo.

A ausência de listeners de eventos claros para o formulário de personagem e para a lista de personagens mostra que a camada interativa ainda está muito incompleta.

## 4. PROBLEMAS IDENTIFICADOS

- O projeto está em estágio de protótipo visual, mas não em estágio de aplicação funcional. A interface é bonita, porém a parte dinâmica ainda não está conectada ao comportamento esperado.
- Em [criar_personagem.html](../criar_personagem.html), o formulário existe, mas não há uma lógica de processamento que transforme os dados em uma ficha persistente ou visível na página de personagens.
- Em [meus_personagens.html](../meus_personagens.html), a seção de listagem está preparada para receber conteúdo, mas não há mecanismo que gere ou recupere personagens reais. O estado mostrado é apenas um placeholder visual.
- Em [campanhas.html](../campanhas.html) e [monstruario.html](../monstruario.html), o conteúdo é praticamente inexistente. Isso compromete a coerência do hub, porque as páginas principais do menu não entregam uma experiência completa.
- Em [css/style.css](../css/style.css), há uso de altura fixa para a área das páginas de personagens, o que pode causar problemas visuais em telas menores ou com conteúdo maior do que o espaço disponível.
- Em [javascript/script.js](../javascript/script.js), a lógica parece ter sido escrita para um contexto anterior do projeto. Ela tenta manipular elementos que não fazem parte do fluxo atual das páginas, o que indica uma desatualização entre HTML e script.
- Há sinais de falta de fundamentação em alguns pontos de interação: o formulário sugere uma ação de criação, mas não há caminho real para concluir esse processo; a lista de personagens sugere conteúdo, mas não há fonte de dados; os links de navegação apontam para áreas que ainda não foram implementadas.

## 5. DEPENDÊNCIAS E TECNOLOGIAS

- HTML5 para estrutura das páginas.
- CSS3 para estilização, com uso de variáveis, gradientes, grid e media queries.
- Bootstrap 5 carregado via CDN para componentes de navegação, layout e responsividade.
- Fonte externa do Google Fonts para a tipografia utilizada no projeto.
- SVG inline para o ícone da marca.
- Não há backend, banco de dados, framework JavaScript moderno, armazenamento local ou APIs externas em funcionamento no repositório atual.
