import firebase from 'firebase/app'
import { reactive, toRefs } from '@vue/composition-api'
import { isDesktop } from '@/util/helpers'

type LoginState = {
  credentials: firebase.auth.UserCredential | null;
  error: Error | null;
  signingIn: boolean;
}

export function useLogin () {
  const state: LoginState = reactive({
    credentials: null,
    error      : null,
    signingIn  : false,
  })

  const login = () => {
    state.signingIn = true
    const provider = new firebase.auth.GoogleAuthProvider()
    provider.setCustomParameters({
      prompt: 'select_account',
    })
    provider.addScope('https://www.googleapis.com/auth/userinfo.profile')
    provider.addScope('https://www.googleapis.com/auth/userinfo.email')
    const auth = firebase.auth()
    if (isDesktop()) {
      auth
        .signInWithPopup(provider)
        .then(result => {
          state.credentials = result
        })
        .catch(error => {
          state.error = error
        })
        .finally(() => (state.signingIn = false))
    } else {
      auth.signInWithRedirect(provider).catch(error => {
        state.error = error
      })
    }
  }

  const logout = () => firebase.auth().signOut()

  return {
    ...toRefs(state),
    login,
    logout,
  }
}
