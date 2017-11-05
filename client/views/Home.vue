<template>
  
  <div class="page">
    <h2>My First Vue App 
      <small>b0brB0t v 0.1.1</small>
    </h2>
    <!-- <counter></counter> -->
    <div>
      <v-form>
      <v-container fluid grid-list-xl>
          <v-layout row justify-center>
            <v-flex xs2>
              <v-text-field label="Subreddit Input"
                v-model="subreddit"
                :rules="subredditRules"> 
            </v-text-field>
            </v-flex>
            <v-flex xs2 justify-start>
              <v-btn style="margin-top:12px" color="primary">Send</v-btn>
            </v-flex>
          </v-layout>
      </v-container>
    </v-form>
       
       
       
    </div>
  </div>
</template>

<script>
// import Counter from 'components/Counter'

export default {
  data() {
    return {
      subreddit: '', 
      subredditRules: [
          (v) => !!v || 'Name is required',
          (v) => v.length <= 10 || 'Name must be less than 10 characters'
        ]
    }
  }
  // components: {
  //   Counter
  // }
}
</script>

