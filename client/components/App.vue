<template>
  <div id="app">
    <v-app id="bobrApp">    
      <v-toolbar app>
        <v-toolbar-logo>b0brB0t VUE</v-toolbar-logo>
      </v-toolbar>
      <main>
        <v-content>
          <v-container fluid>
            <router-view></router-view>
          </v-container>
        </v-content>
      </main>
    </v-app>
  </div>
</template>
