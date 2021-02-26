
const password1 = document.getElementById('password1')
const password2 = document.getElementById('password2')

var arr = [password1, password2]
arr.forEach(function(passwordElement){
    passwordElement.addEventListener('change',() =>{
        if(password1.value&&password2.value){
            if(password1.value!=password2.value){
                password1.focus();
                password1.style.border = "solid"
                password2.style.border = "solid"
                password1.style.borderColor = "red"
                password2.style.borderColor = "red"
                var msg = "Password must be the same!"
                passMsg.style.display = "block"
                passMsg.innerHTML = msg
                passMsg.style.color = "red"
            }
        }
    })
});

const phoneNo = document.getElementById('phoneNo')
phoneNo.addEventListener('focus', ()=>{
    phoneNo.value = "(+63) "
})


const regiForm = document.querySelector('#regiForm');
regiForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.getElementById('fName').value;   
    const email = document.getElementById('email').value;
    const phoneNo = document.getElementById('phoneNo').value;
    const password1 = document.getElementById('password1')
    const password2 = document.getElementById('password2')
    console.log(firstName, email, phoneNo)
    if(password1.value==password2.value){   

        const passMsg = document.getElementById('passMsg')
                arr.forEach(function(change){
                    change.style.border = "none"
                })
                passMsg.style.display = "none"
                console.log("lol")

        

        auth.createUserWithEmailAndPassword(email, password1.value).then((userAccount) =>{
            const userUID = userAccount.user.uid;
            console.log(userUID, 'hehe')
        
            const docRef = db.doc("users"+"/"+userUID);
            docRef.set({
                email: email,
                password: password1.value,
                firstname: firstName,
      
                phoneNo: phoneNo,
                profileImg: 'images/no-img.jpg'

    
            }).then(function(){
                setTimeout(click_, 1000)
                function click_(){                 
                    document.querySelector('#modalShow').click()
                    auth.signOut()
                }  
                
            }).catch(function(error){
                console.log(error.message)
                
            })   
            regiForm.reset();      
        },
        function(error){
            
            alert(error.message);
        });
        
    }else{
        password1.focus();
    }
});
