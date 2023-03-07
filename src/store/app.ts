// Utilities
import Keycloak from 'keycloak-js'
import { defineStore } from 'pinia'
import { LoginState } from '@/models/LoginState'
import { CredentialState } from '@/models/CredentialState'

export const useAppStore = defineStore('app', {
  state: () => ({
    //
    keycloak: new Keycloak({
      url: 'https://login.hs-heilbronn.de',
      realm: 'hhn',
      clientId: 'hhn_rz_first',
  }),
  waitingForLoginState: true,
  loggedIn: LoginState.UNKNOWN,
  fullName: "",
  credentialState: new CredentialState()
  }),
})
