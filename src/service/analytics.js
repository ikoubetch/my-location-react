import firebase from "./firabaseConfig";

export async function sendLocation(lat, long, user) {
  await firebase.analytics().logEvent('user_location', {
    time: new Date().toLocaleString(),
    uid: user.uid,
    email: user.email,
    latitude: lat,
    longitude: long,
  })
}

export async function sendLoginSuccessful(user) {
  await firebase.analytics().logEvent('user_login_successful', {
    time: new Date().toLocaleString(),
    uid: user.uid,
    email: user.email,
  })
}