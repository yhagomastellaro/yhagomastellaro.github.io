var cssMode = document.getElementById('mainStyle').href;
const cssModeStorage = localStorage.getItem('cssModeChosen');

if(cssModeStorage){
    if(cssModeStorage == 'dark'){
        document.getElementById('mainStyle').href = 'assets/css/styles-dark.css';
        document.getElementById('modeTheme').innerHTML = "LIGHT";
    }else{
        document.getElementById('mainStyle').href = 'assets/css/styles-light.css';
        document.getElementById('modeTheme').innerHTML = "DARK";
    }
}

function changeMode(){
    
    if(cssMode == 'assets/css/styles-light.css'){
        document.getElementById('mainStyle').href = 'assets/css/styles-dark.css';
        document.getElementById('modeTheme').innerHTML = "LIGHT";
        cssMode = 'assets/css/styles-dark.css';
        localStorage.setItem('cssModeChosen', 'dark');
    }else{
        document.getElementById('mainStyle').href = 'assets/css/styles-light.css';
        document.getElementById('modeTheme').innerHTML = "DARK";
        cssMode = 'assets/css/styles-light.css';
        localStorage.setItem('cssModeChosen', 'light');
    }

}

$(document).ready(function() {
    $('#form').submit(function(e) {
        e.preventDefault();
        
        const name = $('input[name="inputName"]').val();
        const email = $('input[name="inputEmail"]').val();
        const subject = $('input[name="inputSubject"]').val();
        const message = $('input[name="inputMessage"]').val();

        $.ajax({
            url: '../assets/php/sendMail.php', // caminho para o script que vai processar os dados
            type: 'POST',
            data: {inputName: name, inputEmail: email, inputSubject: subject, inputMessage: message},
            success: function(response) {
                document.getElementById('inputName').value='';
                document.getElementById('inputEmail').value='';
                document.getElementById('inputSubject').value='';
                document.getElementById('inputMessage').value='';
                setTimeout(function(){
                    $('#form-success').show( "slow" );
                }, 300)
            },
            error: function(xhr, status, error) {
                alert(xhr.responseText);
            }
        });
        return false;
    });
 });
