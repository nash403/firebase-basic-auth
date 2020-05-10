import firebase, { User } from 'firebase/app'
import 'firebase/auth'
import { toRefs, reactive } from '@vue/composition-api'
import Vue from 'vue'

type AuthState = {
  user: User | null
  loading: boolean
}

const authState: AuthState = Vue.observable({
  user: null,
  loading: true,
})

export function useAuth () {

  const auth = () => {
    firebase.auth().onAuthStateChanged(_user => {
      // fake delay for authentication
      if (_user) {
        setTimeout(() => {
          authState.user = _user
          authState.loading = false
        }, 3500);
      } else {
        authState.user = null
        authState.loading = false
      }
    });
  }

  return {
    auth,
    ...toRefs(authState)
  }
}
