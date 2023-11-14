import mysql.connector #imprta o conector
conexao = mysql.connector.connect( #
    host = 'localhost', #localhost = loca, ip = externo
    user = 'root', #usuario do mysql
    password = '123456', #senha do usuario do mysql
    database = 'teste1', #nome do banco de dados
)
cursor = conexao.cursor()
nome_estudante = input("Informe o nome do estudante: ")
mat_estudante = input("Informe a matricula do estudante: ")
comando_sql = f'INSERT INTO dados_estudantes (nome, matricula) VALUES ("{nome_estudante}", {mat_estudante})'
#nome_estudante = input("Informe o nome do estudante que deseja excluir: ")
#comando_sql = f'DELETE FROM dados_estudantes WHERE nome = "{nome_estudante}"'
cursor.execute(comando_sql) #comanndos padrões V
conexao.commit()
cursor.close()
conexao.close()