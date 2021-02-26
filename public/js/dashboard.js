
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        window.location.assign('./login-form.html');
        localStorage.clear();
    });
   
});
