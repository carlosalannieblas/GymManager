import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";

export class Auth{
    async register(email: string,password: string){
        try {
            const auth = getAuth();
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            throw error
        }
    }

    async logout(){
        try {
            const auth=getAuth();
            await signOut(auth);
        } catch (error) {
            throw error;
        }
    }

    async login(email: string,password: string){
        try {
            const auth=getAuth();
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            throw error;
        }
    }
}