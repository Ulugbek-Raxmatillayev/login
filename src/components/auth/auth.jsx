import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase"; // firebase.js faylidan auth obyekti

// Ro'yxatdan o'tish funksiyasi
export const handleSignup = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Ro'yxatdan o'tildi:", user);
  } catch (error) {
    console.log("Xatolik ro'yxatdan o'tishda:", error.message);
  }
};

// Tizimga kirish funksiyasi
export const handleLogin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Tizimga kirildi:", user);
  } catch (error) {
    console.log("Xatolik tizimga kirishda:", error.message);
  }
};

// Tizimdan chiqish funksiyasi
export const handleLogout = async () => {
  try {
    await signOut(auth);
    console.log("Tizimdan chiqildi");
  } catch (error) {
    console.log("Xatolik tizimdan chiqishda:", error.message);
  }
};
