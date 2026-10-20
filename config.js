/* ============ config.js — YOUR OWN SERVER (optional) ============
 *
 * Leave this as `null` and the game runs WITHOUT a server: progress is saved
 * in the browser, no accounts, no friends, no co-op, no leaderboard.
 *
 * Paste YOUR OWN free Firebase config here and your copy of the game gets
 * accounts, friends, co-op with your friends and a leaderboard, all on YOUR
 * free Firebase project. Step-by-step guide: SERVER_SETUP.md
 *
 * These values are NOT secret: Firebase is designed to put them in a web page.
 * What protects your players' data are the security rules (SERVER_SETUP.md, step 4 and 5).
 *
 * It must look like this (keep the quotes and the commas):
 *
 * window.PS_FIREBASE = {
 *   apiKey: 'AIza...',
 *   authDomain: 'your-project.firebaseapp.com',
 *   projectId: 'your-project',
 *   storageBucket: 'your-project.firebasestorage.app',
 *   messagingSenderId: '1234567890',
 *   appId: '1:1234567890:web:abc123',
 *   databaseURL: 'https://your-project-default-rtdb.europe-west1.firebasedatabase.app'
 * };
 */
window.PS_FIREBASE = {
  apiKey: "AIzaSyAsjLdwTbX9NR2vA_q2iaXSJT1-5EXJ1JE",
  authDomain: "pokesurvivor-server.firebaseapp.com",
  projectId: "pokesurvivor-server",
  storageBucket: "pokesurvivor-server.firebasestorage.app",
  messagingSenderId: "638562525098",
  appId: "1:638562525098:web:951346faec54369d88d5d3"
  databaseURL: 'https://pokesurvivor-server-default-rtdb.firebaseio.com'
};
