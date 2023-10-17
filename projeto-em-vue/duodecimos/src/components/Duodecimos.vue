<template>
  <v-container>
    <v-row class="text-center justify-center">
      <v-col cols="4" md="6" xs="12" lg="6" sm="6">
        <v-time-picker format="24hr" elevation="4" v-model="horas"></v-time-picker>
        <v-btn elevation="2" color="primary" class="mt-6" @click="calcularDuodecimos">Selecionar hora</v-btn>
        <h2 v-if="horasEmJudaico!=null" class="mt-4">{{ horasEmJudaico }}</h2>
        <h2 v-else class="mt-4">Hora não selecionada</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'DuodecimosComp',

    data: () => ({
      horas: null,
      horasEmJudaico: null,
      extensoes: ["", "primeira", "segunda", "terceira", "quarta", "quinta", "sexta", "sétima", "oitava", "nona", "décima", "undécima", "duodécima"]
    }),

    methods: {
      calcularDuodecimos() {
        if (this.horas == null) {
          return 
        }
        else {
          const horaDividida = this.horas.split(':')
          const horaAux = new Date()
          horaAux.setHours(horaDividida[0])
          horaAux.setMinutes(horaDividida[1])
          const horaSelecionada = this.calcularHoras(horaAux.getHours())
          const minutoSelecionado = this.calcularMinutos(horaAux.getMinutes())
          this.horasEmJudaico = minutoSelecionado + " da " + horaSelecionada
        }
      },

      calcularHoras(hora) {
        let horaNova = 0

        if (hora >=0 && hora<=6) {
          horaNova = hora + 6
        } 
        else if (hora >= 7 && hora <= 18) {
          horaNova = hora - 6
        } 
        else {
          horaNova = hora - 18
        }
      
        if (hora>=7 && hora <=18) {
          return `hora ${this.extensoes[horaNova]} diurna`
        } 
        else {
          return `hora ${this.extensoes[horaNova]} noturna`
        }
      },

      calcularMinutos(minuto) {
        return `É/São ${parseInt(minuto/5)} duodécimo(s)`
      }
    }
  }
</script>
