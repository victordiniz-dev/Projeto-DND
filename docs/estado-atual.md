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

A referência principal é o **C.R.I.S.**.

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

Uma pessoa poderá criar e salvar vários personagens diferentes.

**[Definido]**

A ficha terá campos de texto livre para informações não mecânicas, como:

* Background/história do personagem.
* Aparência.
* Outras descrições livres.

**[Definido]**

Multiclasse ficará para depois e não entra no escopo inicial.

**[Definido]**

O usuário poderá preencher a ficha manualmente.

Isso serve tanto para criar um personagem novo quanto para registrar no site um personagem que já existe fora dele.

**[Ideia futura]**

Existe a ideia de criar um sistema capaz de ler uma ficha em PDF e converter os dados dela para a ficha do site.

Essa funcionalidade é considerada ambiciosa e arriscada, portanto fica para o futuro.

**[Definido]**

Personagens que usam magia devem ter uma lista de magias conhecidas ou preparadas.

A ideia é que o sistema tenha um catálogo pré-definido de magias, e o personagem possa escolher magias a partir dele.

**[Definido]**

Caso o usuário queira criar uma magia personalizada, deverá existir uma opção de homebrew, provavelmente acessada por um botão de adicionar, onde ele poderá escrever a descrição da magia.

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

A área de ataques deve mostrar informações relacionadas às armas equipadas, como:

* Arma utilizada.
* Dano.
* Estatísticas editáveis da arma.
* Opção de rolar dano.
* Tratamento de crítico, podendo dobrar o dano ou aplicar outro cálculo dependendo de habilidades ou regras específicas.

**[Definido]**

Moedas/dinheiro do personagem entram no inventário.

---

## Progressão

**[Definido]**

O projeto não pretende usar XP no escopo inicial.

A progressão será baseada em nível decidido entre mestre e jogador.

Quando o personagem subir de nível, o usuário altera o nível no site, e o sistema atualiza ou orienta as mudanças necessárias.

**[Observação]**

Caso XP seja incluído futuramente, ele poderá ser inserido manualmente.

**[Definido]**

Ao subir de nível, o site deve ajudar o jogador mostrando o que mudou ou o que precisa ser revisado.

A ideia é que a experiência lembre um sistema de jogo/RPG digital, onde ao subir de nível o usuário vê quais melhorias ficaram disponíveis.

Exemplos de informações que o site pode indicar:

* Necessidade de rolar ou ajustar pontos de vida.
* Novas habilidades disponíveis.
* Novos espaços de magia.
* Escolhas que precisam ser feitas no nível atual.
* Outras alterações relacionadas à classe, nível ou personagem.

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

**[Possível funcionalidade simples]**

Pode existir algo como um diário de sessão, mas inicialmente isso seria apenas um campo de texto dentro da ficha do próprio jogador.

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

**[Definido]**

Homebrews criados dentro da ficha de um usuário poderão ser vistos por outros usuários quando eles tiverem acesso à ficha.

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

## Dúvidas em Aberto

* Lista final de campos obrigatórios da ficha de personagem.
* Como estruturar a ficha para suportar automações e ajustes manuais ao mesmo tempo.
* Como estruturar o sistema de magias conhecidas/preparadas.
* Como será o modelo exato de itens no inventário.
* Como calcular capacidade de carga e peso total.
* Como itens equipados afetam ficha, CA e ataques.
* Como será a área de ataques.
* Como será a progressão sem XP.
* Quais notificações ou sugestões aparecem ao subir de nível.
* Como funcionará o backend futuramente.
* Como será o sistema de login.
* Como armazenar e compartilhar campanhas.
* Como controlar permissões do mestre dentro da campanha.
* Como definir visibilidade das fichas dentro da campanha.
* Como estruturar o diário de sessão dentro da ficha.
* Como será o monstruário em detalhes.
* Se o monstruário terá rolagens integradas.
* Como administrar vida de monstros/inimigos.
* Qual será a profundidade do catálogo de classes.
* Como subclasses serão representadas.
* Como homebrews serão salvos.
* Como homebrews serão compartilhados.
* Se classes homebrew entrarão ou não no projeto.
* Como um homebrew poderia virar “oficial” futuramente.
* Se haverá importação de ficha por PDF no futuro.
* Se haverá suporte a múltiplas versões de D&D no futuro.
