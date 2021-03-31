import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
    login(providerName) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider)
    }
    //어떤 Provider를 쓰는지에 따라, 다양한 업체 로그인이 가능하도록 만들어 줄 예정.
}

export default AuthService;