# dicionario

dog = {}

bart = {'name':'Bart','raça': 'Bulldog','idade': 9}

print(bart)

bart['idade'] = 10
bart['peso'] = '11kg'

print(bart)
print(bart['peso'])

del bart['idade']

print(bart)

print(bart.keys())
print(bart.values())