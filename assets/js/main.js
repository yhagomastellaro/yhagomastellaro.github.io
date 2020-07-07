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
