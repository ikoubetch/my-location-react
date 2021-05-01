import firebase from "./firabaseConfig";

export async function login(email, password) {
  const data = await firebase.auth().signInWithEmailAndPassword(email, password)
  return data;
}

export async function register(email, password) {
  const data = await firebase.auth().createUserWithEmailAndPassword(email, password)
  return data;
}

export async function logOut() {
  await firebase.auth().signOut();
}