// firebase-setup.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const firebaseConfig = { /* your config */ };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function requireAuth(onUser) {
  onAuthStateChanged(auth, user => {
    if (!user) {
      window.location.href = 'index.html'; // your sign-in page
    } else {
      onUser(user);
    }
  });
}

export function setupSignOut(btnId) {
  const btn = document.getElementById(btnId);
  if (btn) btn.addEventListener('click', () => signOut(auth));
}
