import {
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "@/firebase/firebase";

const provider = new GoogleAuthProvider();

const errors = {
  "auth/email-already-in-use": "Email already in use. Please sign in.",
  "auth/user-not-found": "User not found! Please sign up.",
  "auth/weak-password": "Password should be at least 6 characters.",
};

class FirebaseActions {
  constructor() {}

  async googleSignIn() {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async logOut() {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async createUser(email: string, password: string, name: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, {
        displayName: name,
      });
      await sendEmailVerification(auth.currentUser);
    } catch (error) {
      console.log(error.message, error.code);
      return { message: errors[error.code] };
    }
  }

  async log() {
    console.log("works");
  }
}

export const fbActions = new FirebaseActions();
