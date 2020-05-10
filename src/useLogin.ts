import { reactive, toRefs } from '@vue/composition-api'
import firebase from 'firebase/app'

type LoginState = {
  credentials: firebase.auth.UserCredential | null;
  error: any;
}

export function useLogin () {
  const state: LoginState = reactive({
    credentials: null,
    error: null,
  })

  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    provider.setCustomParameters({
      prompt: 'select_account',
    })
    provider.addScope('https://www.googleapis.com/auth/userinfo.profile')
    provider.addScope('https://www.googleapis.com/auth/userinfo.email')
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        state.credentials = result
      })
      .catch(error => {
        state.error = error
        console.error(error)
      })
  }

  const logout = () => firebase.auth().signOut()


  return {
    ...toRefs(state),
    login,
    logout
  }
}
