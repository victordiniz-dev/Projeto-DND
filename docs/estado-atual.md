# Planejamento do Projeto — Site de Fichas de D&D

## Convenções do Documento

**[Definido]**
Decisão já assumida para o projeto.

**[Pendente]**
Ponto que ainda precisa ser melhor definido.

**[Ideia futura]**
Funcionalidade desejada, mas que não deve travar o desenvolvimento inicial.

**[Observação]**
Comentário importante para manter contexto ou evitar confusão futura.

---

## Visão Geral

**[Definido]**

Este é um projeto pessoal de estudo desenvolvido com **HTML, CSS e JavaScript puro**, sem framework no início.

O objetivo é criar um **site de fichas de personagem de D&D**, inspirado no C.R.I.S., mas com identidade e implementação próprias.

O projeto está em fase de planejamento e ainda não possui código escrito nesta nova versão.

Existe uma versão antiga do projeto, mas ela está arquivada e **não deve ser usada como referência de estrutura, arquitetura ou decisões**.

Inicialmente, o site será usado apenas pelo próprio desenvolvedor e pelo seu grupo de mesa. Com o tempo, a intenção é que ele possa escalar para ser usado por outras pessoas e outras mesas.

**[Definido]**

Funcionalidades previstas:

* Criação de fichas de personagem.
* Visualização de fichas.
* Inventário.
* Sistema de nível/classe.
* Área de campanhas.
* Monstruário.
* Catálogo de classes.
* Suporte para conteúdo homebrew.

**[Definido]**

A referência principal é o **C.R.I.S.**

**[Observação]**

O **D&D Beyond** também pode servir como referência visual ou funcional, mas isso ainda não foi analisado com profundidade.

---

## Usuários, Contas e Acesso

**[Definido]**

O projeto deve ter sistema de conta de usuário, com login e senha.

A existência de contas é considerada útil e necessária, principalmente porque a proposta envolve usuários acessando fichas, campanhas e dados compartilhados.

**[Definido]**

No sistema geral, todos os usuários terão o mesmo tipo básico de acesso.

A diferença de permissões acontece dentro da área de campanhas:

* O usuário que cria uma campanha se torna o mestre daquela campanha.
* O mestre possui permissões adicionais sobre aquela campanha.
* O mestre poderá editar configurações da campanha, incluindo regras de visibilidade das fichas dos jogadores.

**[Definido]**

O projeto deve usar backend futuramente, pois funcionalidades como usuários vendo fichas uns dos outros, campanhas compartilhadas e dados sincronizados entre pessoas diferentes exigem dados compartilhados de verdade.

**[Definido]**

No início, o projeto pode rodar localmente no computador do desenvolvedor ou ser publicado em algo simples, como GitHub Pages.

Conforme o projeto escalar, a hospedagem poderá evoluir para uma solução mais adequada.

**[Objetivo inicial]**

A primeira meta de escala é o sistema funcionar bem para o grupo de mesa do desenvolvedor.

---

## Escopo Inicial

**[Definido]**

A prioridade inicial do projeto será:

1. Fichas de personagem.
2. Inventário.

Essas duas áreas devem funcionar bem antes de o projeto avançar com força para campanhas, monstruário, classes ou homebrew.

**[Definido]**

Não existe prazo real para o projeto.

Ele é um projeto pessoal de estudo, feito sem pressa.

---

## Fichas de Personagem

**[Definido]**

A ficha seguirá inicialmente a **5e padrão**.

**[Ideia futura]**

Seria interessante permitir que a pessoa escolhesse a versão do sistema, como 5e 2014 ou 5e 2024, mas isso é considerado trabalhoso e não faz parte do foco inicial.

**[Definido]**

A ideia é automatizar tudo que for viável automatizar.

Exemplos de cálculos que podem ser automatizados:

* Modificadores de atributo.
* Classe de Armadura.
* Bônus de proficiência.
* Outros valores derivados da ficha.

**[Definido]**

Mesmo com automações, o usuário deve poder ajustar valores manualmente quando desejar.

Isso é importante porque alguns personagens podem ter regras específicas, homebrew, exceções de mesa ou ajustes definidos pelo mestre.

---

### Automações, Regras e Validações

**[Definido]**

O site deve saber o suficiente das regras de D&D para **calcular e orientar**, mas não para policiar rigidamente todas as escolhas do usuário.

A proposta não é impedir o jogador de fazer escolhas consideradas "fora da regra oficial" em todos os casos.

Exemplos:

* Se uma classe/origem normalmente permite escolher uma quantidade específica de perícias, o site pode indicar essa quantidade.
* Se o jogador escolher uma perícia diferente da lista normalmente ofertada, o site não precisa impedir.
* Se o jogador escolher mais perícias do que o esperado, o site não necessariamente bloqueará.

**[Definido]**

A lógica principal será:

* Automatizar cálculos úteis quando possível.
* Orientar o jogador sobre o que normalmente deveria acontecer.
* Permitir ajustes manuais.
* Evitar validações rígidas demais, exceto em casos específicos que forem definidos individualmente.

**[Observação]**

Algumas limitações podem existir, mas serão decididas caso a caso.

A ideia é não transformar o site em um sistema que tenta fiscalizar completamente todas as regras oficiais.

---

### Campos da Ficha

**[Pendente]**

A lista completa de campos obrigatórios da ficha ainda precisa ser definida com mais cuidado.

**[Definido inicial]**

Uma ficha minimamente completa deve ter, pelo menos:

* Nome.
* Raça.
* Classe.
* Nível.
* Atributos.
* Pontos de vida.
* Classe de Armadura.
* Perícias.
* Magias.
* Inventário.
* Equipamentos.
* Itens comuns.
* Deslocamento.
* Outros campos mecânicos ainda a definir.

**[Definido]**

A ficha terá campos de texto livre para informações não mecânicas, como:

* Background/história do personagem.
* Aparência.
* Outras descrições livres.

---

### Perícias

**[Definido]**

O site deve mostrar todas as perícias disponíveis.

A escolha correta das perícias ficará sob responsabilidade do jogador e/ou do mestre.

O sistema não deve filtrar obrigatoriamente as perícias com base na classe, raça/origem ou antecedente.

---

### Personagens Salvos

**[Definido]**

Uma pessoa poderá criar e salvar vários personagens diferentes.

**[Definido]**

Um personagem existe independentemente de uma campanha.

O usuário pode ter fichas/personagens soltos, sem estarem vinculados a nenhuma campanha.

Depois, o personagem poderá ser vinculado a uma ou mais campanhas.

---

### Criação e Importação de Fichas

**[Definido]**

O usuário poderá preencher a ficha manualmente.

Isso serve tanto para criar um personagem novo quanto para registrar no site um personagem que já existe fora dele.

**[Ideia futura]**

Existe a ideia de criar um sistema capaz de ler uma ficha em PDF e converter os dados dela para a ficha do site.

Essa funcionalidade é considerada ambiciosa e arriscada, portanto fica para o futuro.

---

### Multiclasse

**[Definido]**

Multiclasse ficará para depois e não entra no escopo inicial.

---

### Magias na Ficha

**[Definido]**

Personagens que usam magia devem ter uma lista de magias conhecidas ou preparadas.

A ideia é que o sistema tenha um catálogo pré-definido de magias, e o personagem possa escolher magias a partir dele.

**[Definido]**

Caso o usuário queira criar uma magia personalizada, deverá existir uma opção de homebrew, provavelmente acessada por um botão de adicionar, onde ele poderá escrever a descrição da magia.

---

### Diário de Sessão / Anotações

**[Definido]**

O diário de sessão será inicialmente um campo de texto dentro da ficha do próprio jogador.

Esse campo ficará junto de outras áreas textuais da ficha, como:

* Aparência.
* História.
* Background.
* Anotações da campanha.
* Diário de sessão.

**[Definido]**

Esse diário não será, no início, um diário global da campanha.

Ele funcionará como anotações pessoais do personagem/jogador.

**[Ideia futura]**

Essa aba poderá ser aprimorada futuramente, caso faça sentido evoluir para algo mais estruturado.

---

## Inventário

**[Definido]**

O inventário não será apenas uma lista de texto livre.

A ideia é que o usuário escolha itens a partir de um menu/catálogo de inventário.

O catálogo deve ter categorias como:

* Armaduras.
* Armas.
* Itens comuns.
* Outros tipos de objetos ainda a definir.

**[Definido]**

Cada item deve ter propriedades próprias, como:

* Peso.
* Valor.
* Tipo.
* Descrição.
* Outras informações específicas conforme o tipo de item.

**[Definido]**

O sistema deve calcular automaticamente o peso total do inventário.

**[Definido]**

O sistema deve ter um banco/catálogo de itens próprio.

**[Definido]**

O jogador também poderá criar itens personalizados.

Esses itens personalizados se conectam com a área de homebrew.

**[Definido]**

O inventário deve ter conceito de item equipado.

Alguns itens equipados devem afetar outras partes da ficha.

Exemplos:

* Uma armadura equipada pode alterar a Classe de Armadura.
* Uma arma equipada pode aparecer em uma área de ataques.

**[Definido]**

Moedas/dinheiro do personagem entram no inventário.

---

## Ataques e Rolagem de Dados

**[Definido]**

A área de ataques deve mostrar informações relacionadas às armas equipadas, como:

* Arma utilizada.
* Dano.
* Estatísticas editáveis da arma.
* Opção de rolar dano.
* Tratamento de crítico, podendo dobrar o dano ou aplicar outro cálculo dependendo de habilidades ou regras específicas.

**[Definido]**

O site deve ter um sistema real de rolagem de dados para ataques e dano.

Exemplo:

Se uma arma possui dano `1d6+3`, o usuário poderá clicar para rolar esse dano, e o sistema gerará um resultado aleatório com base nessa fórmula.

**[Definido]**

A rolagem de dano deve considerar notações de dados como:

* `1d6`
* `1d8+3`
* `2d6+4`
* Outras variações a definir.

**[Observação]**

Isso implica a criação de uma lógica própria para interpretar fórmulas de dados, gerar números aleatórios e calcular resultados.

Esse sistema pode ser tratado como um pequeno motor interno de rolagem.

---

## Progressão

**[Definido]**

O projeto não pretende usar XP no escopo inicial.

A progressão será baseada em nível decidido entre mestre e jogador.

Quando o personagem subir de nível, o usuário altera o nível no site, e o sistema atualiza ou orienta as mudanças necessárias.

**[Observação]**

Caso XP seja incluído futuramente, ele poderá ser inserido manualmente.

---

### Level Up Guiado

**[Definido]**

Ao subir de nível, o site deve ajudar o jogador mostrando o que mudou ou o que precisa ser revisado.

A ideia é que a experiência lembre um sistema de jogo/RPG digital, onde ao subir de nível o usuário vê quais melhorias ficaram disponíveis.

Exemplos de informações que o site pode indicar:

* Necessidade de rolar ou ajustar pontos de vida.
* Novas habilidades disponíveis.
* Novos espaços de magia.
* Escolhas que precisam ser feitas no nível atual.
* Outras alterações relacionadas à classe, nível ou personagem.

**[Definido]**

O level up será guiado, mas não totalmente automático.

Quando o personagem subir de nível, o site deve avisar o jogador sobre mudanças ou escolhas disponíveis.

Exemplos:

* Informar que o personagem pode escolher mais magias.
* Indicar que há novos espaços de magia disponíveis.
* Avisar que pontos de vida precisam ser ajustados.
* Mostrar que novas habilidades podem ter sido desbloqueadas.

**[Definido]**

O site não escolherá automaticamente pelo jogador.

O jogador deverá seguir as notificações e aplicar as mudanças necessárias.

**[Exemplo conceitual]**

Se o personagem tiver direito a mais uma magia, o site pode indicar algo como:

> Você possui espaço para escolher mais uma magia.

A frase final ainda será refinada, mas a ideia é orientar sem automatizar completamente a decisão.

**[Observação]**

Algumas mudanças podem ser facilitadas pelo site, mas outras ainda dependerão do jogador, do mestre e do livro.

---

## Campanhas

**[Definido]**

Qualquer usuário poderá criar uma campanha.

O criador da campanha será considerado o mestre daquela campanha.

**[Definido]**

Jogadores entrarão em uma campanha por meio de link ou código de convite.

**[Definido]**

Dentro de uma campanha, jogadores e mestre poderão visualizar os personagens participantes.

Exemplo:

Em uma mesa com 1 mestre e 3 jogadores, os jogadores poderão ver, na aba da campanha, cards dos personagens dos outros jogadores.

Ao clicar em um card, o usuário acessa a ficha daquele personagem.

**[Definido]**

O mestre poderá desabilitar a visualização das fichas entre jogadores nas configurações da campanha.

Se essa opção estiver desabilitada, os jogadores não poderão ver as fichas uns dos outros.

**[Definido]**

Não haverá interações sociais complexas no escopo inicial.

Não estão previstos inicialmente:

* Chat.
* Sistema social.
* Interações entre usuários além da campanha.

**[Observação]**

O diário de sessão, no escopo inicial, não será um recurso global da campanha.

Ele será tratado como um campo de texto dentro da ficha do próprio jogador.

**[Definido]**

Não há intenção inicial de limitar a quantidade de jogadores ou personagens em uma campanha.

**[Observação]**

Um limite pode ser considerado futuramente se houver necessidade por desempenho, estabilidade ou para evitar problemas no site.

**[Definido]**

Um personagem poderá participar de mais de uma campanha ao mesmo tempo.

---

## Monstruário

**[Definido]**

A ideia principal do monstruário é ser um catálogo fixo de monstros.

**[Definido]**

A criação de monstros próprios se conecta com o sistema de homebrew e será planejada melhor depois.

**[Definido]**

O monstro deve servir para consulta/referência.

**[Definido]**

O mestre também deverá ter a opção de administrar a vida de um monstro ou inimigo.

**[Possível funcionalidade]**

O mestre poderá rolar dados ou testes/ações fixas do monstro, como ataques ou ações específicas.

Essa funcionalidade ainda está em aberto e precisa ser melhor pensada.

**[Definido inicial]**

Na visão do projeto, um monstro deve ter uma ficha completa, incluindo:

* Pontos de vida.
* Classe de Armadura.
* Ataques.
* Resistências.
* Descrição.
* Imagem.
* Outras informações relevantes da ficha do monstro.

---

## Classes

**[Definido]**

O catálogo de classes deve conter todas as classes oficiais.

**[Definido]**

Se possível, o catálogo também deve incluir subclasses.

**[Definido]**

Subclasses entram no escopo inicial, mas serão tratadas em ritmo lento e gradual.

**[Observação]**

O jogador poderá escolher a classe do personagem e consultar suas habilidades.

Também deverá poder visualizar subclasses relacionadas quando isso for implementado.

**[Definido]**

O desenvolvedor tem consciência de que incluir todas as classes oficiais, subclasses, itens e monstros representa uma grande quantidade de dados.

**[Pendente]**

Ainda será necessário definir como o site vai organizar e lidar com esse volume de informação.

Pontos a avaliar futuramente:

* Como armazenar os dados de classes.
* Como armazenar subclasses.
* Como armazenar itens.
* Como armazenar monstros.
* Se esses dados serão escritos em JSON, arquivos separados ou outra estrutura.
* Como popular esse conteúdo gradualmente.
* Como evitar que o site fique pesado ou difícil de manter.

**[Pendente]**

Ainda precisa ser definido o nível de profundidade do catálogo de classes:

* Se será apenas uma referência resumida.
* Se terá habilidades por nível.
* Se terá integração direta com a ficha.
* Se aplicará automaticamente efeitos no personagem.

---

## Homebrew

**[Definido]**

O homebrew se aplica inicialmente a:

* Itens.
* Magias.

**[Pendente]**

Classes homebrew ainda não estão definidas.

A princípio, talvez não entrem no escopo inicial.

---

### Visibilidade do Homebrew

**[Definido]**

O homebrew será inicialmente algo adicionado dentro da ficha.

Exemplo:

Se o personagem César, um ladino, tiver uma adaga homebrew no inventário, essa adaga aparecerá normalmente como item na ficha dele.

**[Definido]**

Outros usuários poderão ver esse homebrew quando tiverem acesso à ficha onde ele aparece.

Isso pode acontecer em situações como:

* Um jogador da mesma campanha abre a ficha do personagem.
* O dono da ficha compartilha um link da ficha com outra pessoa.

**[Definido]**

No escopo inicial, o homebrew não será necessariamente um catálogo público global acessível por qualquer usuário do site.

A visibilidade inicial está ligada ao acesso à ficha onde aquele conteúdo homebrew foi usado.

---

### Moderação e Oficialização

**[Definido]**

A criação de homebrew será livre, sem moderação no início.

**[Ideia futura]**

Futuramente, pode existir algum sistema onde determinados homebrews possam concorrer ou ser escolhidos para virar um “homebrew oficial” do site, de forma parecida com a ideia do C.R.I.S.

**[Pendente]**

Ainda precisa ser definido como homebrews serão organizados, salvos, compartilhados e reaproveitados fora da ficha onde foram criados.

---

## Decisões Técnicas

**[Definido]**

O projeto será desenvolvido inicialmente com:

* HTML.
* CSS.
* JavaScript puro.

**[Definido]**

O desenvolvedor é iniciante e ainda está aprendendo.

**[Definido]**

O desenvolvedor já tentou mexer com `localStorage`, mas ainda não domina bem.

**[Definido]**

A preferência inicial é usar CSS puro.

O desenvolvedor não gosta muito de Bootstrap.

**[Observação]**

Tailwind ou Bootstrap podem ser considerados no futuro, quando o desenvolvedor estiver mais evoluído, mas não são prioridade agora.

---

### Backend e Dados Compartilhados

**[Definido]**

O projeto provavelmente precisará de backend futuramente, principalmente por causa de:

* Contas de usuário.
* Login e senha.
* Campanhas compartilhadas.
* Visualização de fichas entre usuários.
* Dados acessíveis por mais de uma pessoa.

**[Definido]**

No início, o projeto pode rodar localmente ou em uma hospedagem simples como GitHub Pages.

Conforme o projeto crescer, a hospedagem poderá evoluir.

---

### GitHub Pages

**[Definido]**

GitHub Pages pode ser usado no início para testes, aprendizado e uso simples com o grupo de mesa.

**[Observação técnica]**

GitHub Pages hospeda apenas arquivos estáticos, como:

* HTML.
* CSS.
* JavaScript.
* Imagens.
* Arquivos estáticos.

Ele não roda backend próprio.

**[Definido]**

Quando o projeto precisar de recursos como:

* Conta de usuário.
* Login e senha.
* Dados compartilhados entre pessoas.
* Campanhas acessadas por vários usuários.
* Fichas vistas por outras pessoas em tempo real ou de forma sincronizada.

será necessário usar alguma solução com backend real.

**[Definido]**

GitHub Pages continua sendo válido para a fase inicial de testes, mas não será suficiente para a versão completa com backend, autenticação e dados compartilhados.

---

## Dúvidas em Aberto

**[Ainda em aberto]**

* Lista final de campos obrigatórios da ficha de personagem.
* Como estruturar a ficha para suportar automações e ajustes manuais ao mesmo tempo.
* Quais regras específicas o site deve limitar de verdade.
* Como estruturar o sistema de magias conhecidas/preparadas.
* Como será o modelo exato de itens no inventário.
* Como calcular capacidade de carga e peso total.
* Como itens equipados afetam ficha, CA e ataques.
* Como será a área de ataques em detalhes.
* Como estruturar o motor de rolagem de dados.
* Quais notações de dados serão aceitas inicialmente.
* Como será a progressão sem XP.
* Quais notificações ou sugestões aparecem ao subir de nível.
* Como funcionará o backend futuramente.
* Como será o sistema de login.
* Como armazenar e compartilhar campanhas.
* Como controlar permissões do mestre dentro da campanha.
* Como definir visibilidade das fichas dentro da campanha.
* Como será o monstruário em detalhes.
* Se o monstruário terá rolagens integradas.
* Como administrar vida de monstros/inimigos.
* Qual será a profundidade do catálogo de classes.
* Como subclasses serão representadas.
* Como organizar os dados oficiais de classes, subclasses, itens e monstros.
* Como evitar que o grande volume de dados deixe o projeto pesado.
* Como homebrews serão salvos.
* Como homebrews serão compartilhados.
* Se classes homebrew entrarão ou não no projeto.
* Como um homebrew poderia virar “oficial” futuramente.
* Se haverá importação de ficha por PDF no futuro.
* Se haverá suporte a múltiplas versões de D&D no futuro.
* Como será a hospedagem/backend quando o projeto sair da fase estática.
