import { SIGN_IN, SIGN_OUT} from './types'

export const signIn = (userId) => {
    return{
        type: SIGN_IN,
        paylaod: userId
    }
}

export const signOut = () => {
    return{
        type: SIGN_OUT
    }
}