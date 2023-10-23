import datetime

n = datetime.datetime.now()

horas = int(n.strftime("%H"))
minutos = int(n.strftime("%M"))

hora = ""
duodecimo = minutos // 5

if horas == 0:
    hora = 'sexta noturna'
elif horas == 1:
    hora = 'sétima noturna'
elif horas == 2:
    hora = 'oitava noturna'
elif horas == 3:
    hora = 'nona noturna'
elif horas == 4:
    hora = 'décima noturna' 
elif horas == 5:
    hora = 'undécima noturna'
elif horas == 6:
    hora = 'duodécima noturna'
elif horas == 7:
    hora = 'primeira'
elif horas == 8:
    hora = 'segunda'
elif horas == 9:
    hora = 'terceira'
elif horas == 10:
    hora = 'quarta'
elif horas == 11:
    hora = 'quinta'
elif horas == 12:
    hora = 'sexta'
elif horas == 13:
    hora = 'sétima'
elif horas == 14:
    hora = 'oitava'
elif horas == 15:
    hora = 'nona'
elif horas == 16:
    hora = 'décima'
elif horas == 17:
    hora = 'undécima'
elif horas == 18:
    hora = 'duodécima'
elif horas == 19:
    hora = 'primeira noturna'
elif horas == 20:
    hora = 'segunda noturna'
elif horas == 21:
    hora = 'terceira noturna'
elif horas == 22:
    hora = 'quarta noturna'
elif horas == 23:
    hora = 'quinta noturna'

if duodecimo < 2:
    if duodecimo == 0:
        print(f"É a hora {hora}.")
    else:
        print(f"É 1 duodécimo da hora {hora}.")
else:
    print(f"São {duodecimo} duodécimos da hora {hora}.")