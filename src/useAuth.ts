import firebase, { User } from 'firebase/app'
import 'firebase/auth'
import VueCompositionApi, { toRefs, reactive, computed } from '@vue/composition-api'

// the two following lines won't be necessary after vue 3.0 release
import Vue from 'vue'
Vue.use(VueCompositionApi)


type AuthState = {
  user: User | null;
  ready: boolean;
}

const authState: AuthState = reactive({
  user : null,
  ready: false,
})

export function useAuth () {
  const auth = () => {
    firebase.auth().onAuthStateChanged(_user => {
      if (_user) {
        // add fake delay for ready state after authentication
        setTimeout(() => {
          authState.user = _user
          authState.ready = true
        }, authState.ready ? 0 : 3500)
      } else {
        authState.user = null
        authState.ready = true
      }
    })
  }

  return {
    auth,
    isAuthenticated: computed(() => !!authState.user),
    ...toRefs(authState),
  }
}
