<template>
  <section class="subContainer">
    <v-row>
      <v-col>
        <h1 class="primary--text">Contact me</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>
          I am interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t
          hesitate to contact me using below form either.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-row>
          <v-col class="pr-1">
            <v-text-field label="Name" filled hide-details  background-color="form"></v-text-field>
          </v-col>
          <v-col class="pl-1">
            <v-text-field filled hide-details label="Email" background-color="form"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="py-0">
            <v-text-field filled hide-details label="Subject" background-color="form"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea filled label="Message" background-color="form"></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="py-0 d-flex justify-end">
            <v-btn  color="primary" outlined>send</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {};
</script>

<style>
.theme--dark.v-text-field > .v-input__control > .v-input__slot:before {
  border: none;
}
</style>
