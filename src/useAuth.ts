import firebase, { User } from 'firebase/app'
import 'firebase/auth'
import VueCompositionApi, {
  toRefs,
  reactive,
  computed,
} from '@vue/composition-api'

// the two following lines won't be necessary after vue 3.0 release
import Vue from 'vue'
Vue.use(VueCompositionApi)

type AuthState = {
  user: User | null;
  ready: boolean;
  error: Error | null;
}

const authState: AuthState = reactive({
  user : null,
  ready: false,
  error: null,
})

export function useAuth () {
  const authenticate = () => {
    firebase.auth().onAuthStateChanged(_user => {
      authState.user = _user ? _user : null
      authState.ready = true
    })
    firebase.auth().getRedirectResult().catch(error =>{
      authState.error = error
    })
  }

  return {
    authenticate,
    isAuthenticated: computed(() => !!authState.user),
    ...toRefs(authState),
  }
}
