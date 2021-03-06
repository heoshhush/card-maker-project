import { firebaseAuth, githubProvider, googleProvider } from './firebase';

class AuthService {
    login(providerName) {
        // const authProvider = new firebaseAuth.auth[`${providerName}AuthProvider`]();
        const authProvider = this.getProvider(providerName)
        return firebaseAuth.signInWithPopup(authProvider)
    }

    getProvider(providerName){
        switch(providerName){
            case 'Google':
                return googleProvider;
            case 'Github':
                return githubProvider;
            default:
                throw new Error(`not supported provider: ${providerName}`)
        }
    }

    logout(){
        firebaseAuth.signOut();
    }

    onAuthChange(onUserChanged) {
        firebaseAuth.onAuthStateChanged(user => {
            onUserChanged(user);
        })
        
    }
}




export default AuthService;