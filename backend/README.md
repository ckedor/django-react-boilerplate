Esse repositório consiste em um boilerplate do django com o framework djangorestapi com algumas configurações iniciais e instruções para começar rapidamente uma API-REST.

###########################
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

$ heroku create nome_do_app
$ git push heroku main
$ heroku ps:scale web=1
$ heroku run python manage.py createsuperuser

###########################
Adicionais Heroku
$ heroku open
$ heroku logs --tail
$ heroku addons:create papertrail
$ heroku addons:open papertrail

$ heroku run python manage.py shell -- usando o shell no servidor
$ heroku run bash                   -- usando o bash no servidor


