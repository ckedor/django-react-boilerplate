<<<<<<< HEAD
# django-react-boilerplate

Deploy no Heroku
=======
Esse repositório consiste em um boilerplate de um app React conectada a uma API com  django-rest-framework com algumas configurações iniciais e instruções para começar rapidamente um projeto web full stack com ambiente de desenvolvimento e produção com deploy no heroku.

########################### Frontend
Instalar na máquina o node, o npm, e o yarn
Na raiz do projeto instalar as dependencias com yarn:
$ yarn install

Executar ambiente dev:
$ yarn dev

########################### Backend
Instructions:
- Criar um ambiente virtual
$ python3 -m venv venv

- Instalar dependencias
$pip install -r requirements.txt

- Abrir VSCode
  ctrl+shift+p python: select interpreter
  selecionar python do ./venv/

- Em nome_do_projeto/settings.py, trocar as credenciais do banco de dados, se necessário. 

- Criar um arquivo .env na raiz do repo com o código:
DEBUG=True
SECRET_KEY = 'django-insecure-^a6q!20kv^_@-17de1d3j@e2l&_z8t#tw!7w-naf*@y%lf^!fp'

###########################
Configurando a base Postgres (Só para começar o projeto em novos computadores)
- Instalar o postgres
- Colocar o PATH do bin do postgres nas variáveis de ambiente

###########################
Criar app e superuser:
$ python manage.py startapp
$ python manage.py makemigrations
$ python manage.py superuser

###########################
Testes
O Workspace contém REQUESTS configurados para usar a extensão ThunderClient (Similar ao Postman) do VSCode. Para utilizar basta instalar a extensão e usar os requests em "Collections"

###########################
Deploy no Heroku

Existe a possibilidade de separar o front e o back em repositórios separados e cada um ter o seu deploy no heroku (ou onde preferir), mas aqui eu coloco instruções pra fazer ambos os deploys a partir do mesmo repo no github:

- Criar repositório no github
- Criar apps no heroku com os buildpacks necessários
$ heroku create <nome-do-app-do-front> --remote front
$ heroku create <nome-do-app-do-back> --remote back --buildpack heroku/python

O comando $git remote -v possibilita ver os repos criados

- Para fazer o deploy, use o script ./deploy no diretorio de cada app ou execute no diretório raiz:
$ git subtree --prefix=frontend push front main
$ git subtree --prefix=backend push back main

- Variáveis de ambiente da API:
abrir um shell python no seu projeto local:
$ python manage.py shell
$ from django.core.management.utils import get_random_secret_key
$ print(get_random_secret_key())
Copie a chave criada, entre no console do heroku no app da api, e crie a variavel de ambiente SECRET_KEY com a chave copiada
Também adicione a chave DEBUG=False nas variáveis de ambiente

- Criar um superusuário para acessar o admin do django:
$ heroku run python manage.py createsuperuser --remote back

- Adicionar a URL do app do front criado (acessar via console do heroku) no CORS Origin Whitelist da API (settings.py):
CORS_ORIGIN_WHITELIST = [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    '<URL DO FRONT>'
]

e a URL da API no allowed hosts:
ALLOWED_HOSTS = ['127.0.0.1', 'localhost', '<URL DA API>']

###########################
Adicionais Heroku (Como tem mais de um app, usar no fim de cada comando o argumento indicando qual app, dessa forma: --remote back/front )
$ heroku open
$ heroku logs --tail
$ heroku addons:create papertrail
$ heroku addons:open papertrail

$ heroku run python manage.py shell                     -- usando o shell no servidor
$ heroku run bash                 -- usando o bash no servidor


>>>>>>> aff9006efd3f8428d8b689298990fb1bba3a5a00
