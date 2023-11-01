import datetime

horasExtenso = ['', 'primeira', 'segunda', 'terceira', 'quarta', 'quinta', 'sexta', 'sétima', 'oitava', 'nona', 'décima', 'undécima', 'duodécima']
agora = datetime.datetime.now()

def calcHoras(hora):
    newHora = 0

    if (hora >= 0 and hora <= 6):
        newHora = hora + 6
    elif (hora >= 7 and hora <= 18):
        newHora = hora - 6
    else:
        newHora = hora - 18

    if (hora >= 7 and hora <= 18):
        return f'hora {horasExtenso[newHora]} (diurna)'
    else:
        return f'hora {horasExtenso[newHora]} noturna'

hora = calcHoras(int(agora.strftime("%H")))

def calcDuodecimos(minuto):
    duodec = minuto // 5
    if duodec < 2:
        if duodec == 0:
            return f'É a'
        else:
            return f'É 1 duodécimo da'
    else:
        return f'São {duodec} duodécimos da'

duodecimo = calcDuodecimos(int(agora.strftime("%M")))

print(f'{duodecimo} {hora} :)')
