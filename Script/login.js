// console.log('link js');

document.getElementById('login-btn')
        .addEventListener('click', function(){
            // console.log('click success')
            const numInput = document.getElementById('input-num');
            const numValue = numInput.value;
            // console.log(numValue)

            const passInput = document.getElementById('input-pass');
            const passValue = passInput.value;
            // console.log(passValue);
            
            if(numValue === '01566006571' && passValue === '1234'){
                alert('Login Successfully');
                //  window.location.replace("/home.html");
                window.location.assign('./home.html');
            } else{
                alert('Login Faild. Try Again');
            }

        })