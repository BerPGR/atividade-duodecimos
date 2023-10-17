<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <h2>Atividade Duodécimos</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/BerPGR/atividade-duodecimos"
        target="_blank"
        text
      >
        <span class="mr-2">Código no <v-icon>mdi-github</v-icon></span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Duodecimos/>
    </v-main>
  </v-app>
</template>

<script>
import Duodecimos from './components/Duodecimos';

export default {
  name: 'App',

  components: {
    Duodecimos,
  },
};
</script>
