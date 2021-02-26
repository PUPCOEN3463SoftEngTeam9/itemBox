
auth.onAuthStateChanged((userAccount) =>{
    if(userAccount){
        console.log('user logged in', userAccount.email);
        window.location.assign('./dashboard.html')   
    }else{
        console.log('user logged out');
    }
})

const center = document.getElementById('center')
const popup = document.getElementById('popup')
const resetPass = document.getElementById('resetPass')


const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = loginForm['email'].value;
    const password = loginForm['password'].value;

    auth.signInWithEmailAndPassword(email, password).then(() => {
       
        window.location.assign('./dashboard.html');
      
    },
    function(error){
        alert('The email & password you’ve entered doesn’t match any account.');
    });
    
})