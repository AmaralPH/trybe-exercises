Exercícios realizados na aula 2.1 da Trybe

Nessa aula configuramos o respositório que será usado para a entrega dos exercícios propostos ao longo do curso.
Criamos o git no diretório local, vinculamos o diretório ao repositório criado no GitHub pelo SSH,
comitamos o arquivo README.md no diretório trybe-exercises e agora no diretório da aula 2.1

Na aula foram passados os comandos básicos do git:

git init
-> cria um repositório git no diretório atual para salvar as versões dos arquivos

git status
-> mostra o ramo atual e as atualizações realizadas ou pendentes

git add
-> adiciona as atualizações realizadas num arquivo (passado como parametro) ou todas as pendentes, se usar . como parametro

git commit -m "mensagem"
-> cria um commit para as atualizações realizadas, precisa de uma mensagem que identifique o que foi feito

git log
-> exibe o histórico de commits realizados, onde cada branch está na arvore de commits, as mensagens e quem comitou

git branch nome_do_branch
-> cria um novo branch partindo do commit atual

git chechout nome_do_branch
-> sai do branch atual e vai para o branch passado como parâmetro

git merge nome_do_branch_alvo
-> partindo do branch atual, adiciona os commits do branch "alvo" a si mesmo, deixando os dois no mesmo ponto


Fim
