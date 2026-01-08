- React - frontend
- FastAPI - backend
- Postgresql - database RDBMS
- SQLAlchemy - database
- Virtual environment
- Uvicorn - server


STEPS TO START WORKING WITH FASTAPI AND SQL ALCHEMY (POSTGRESQL)

# command for creating virtual environment
python -m venv <environment_name>
- this will create a folder of your virtual environment


# to activate the virtual environment, we need to use the script which is available in your virtual environment folder 
- for powershell: .ps
- for command prompt: .bat
- we just need to copy the path of these file and paste it in powershell/cmd

# to see all the packages
- pip list

# install fastapi and uvicorn
- pip install fastapi uvicorn

# pydantic is used to put validation

# for running the server we need main.py file and object of fastapi
- uvicorn main:app --reload
- our code will run on default port 8000
- http://localhost:8000

# fastapi also provide the support for swagger which is used to run the APIs
- to check the api on swagger we need to add /docs
- http://localhost:8000/docs

# REST(Representational state transfer) APIs 
1. get()
2. post()
3. put()
4. patch()
5. delete()

# install sqlalchemy and postgres driver
- pip install sqlalchemy psycopg2
