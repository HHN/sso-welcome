<template>
  <v-row class="home">
    <v-col cols="12" xs="12" sm="12" md="12">
      <card-migration :to="'first'" />
    </v-col>
    <v-col cols="12" xs="12" sm="6" md="6">
      <card-new-user :to="'first'" />
    </v-col>
    <v-col cols="12" xs="12" sm="6" md="6">
      <card-account-management href="/realms/hhn/account" />
    </v-col>
    <v-col cols="12" xs="12" sm="6" md="6">
      <card-help href="https://www.hs-heilbronn.de/login-hilfe" />
    </v-col>
    <!--<v-col cols="12" xs="12" sm="6" md="6">
      <card-apps href="https://www.hs-heilbronn.de/login-apps" />
    </v-col>-->
  </v-row>
</template>
<script lang="ts" setup>
import { login } from "@/services/LoginService";
import CardMigration from "./CardMigration.vue";
import CardNewUser from "./CardNewUser.vue";
import CardAccountManagement from "./CardAccountManagement.vue";
import CardHelp from "./CardHelp.vue";
import CardApps from "./CardApps.vue";

function startLogin() {
  login();
}
</script>
<style lang="scss">
.home {
  padding: 10px;
  .v-card--link {
    height: 100%;
  }
  @media (max-width: 1200px) {
    .v-col-12 {
      padding: 5px;
    }
  }
}
</style>
