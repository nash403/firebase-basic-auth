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
}

const authState: AuthState = reactive({
  user : null,
  ready: false,
})

export function useAuth () {
  const authenticate = () => {
    firebase.auth().onAuthStateChanged(_user => {
      authState.user = _user ? _user : null
      authState.ready = true
    })
  }

  return {
    authenticate,
    isAuthenticated: computed(() => !!authState.user),
    ...toRefs(authState),
  }
}
