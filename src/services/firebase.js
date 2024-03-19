import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCxWWA3rT19_99MpeNfsQCSH2pbBonLqxM",
    authDomain: "simstore-8994c.firebaseapp.com",
    projectId: "simstore-8994c",
    storageBucket: "simstore-8994c.appspot.com",
    messagingSenderId: "135535840687",
    appId: "1:135535840687:web:21fadd33346291977a335a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()
const storage = getStorage()

export { app, auth, storage }