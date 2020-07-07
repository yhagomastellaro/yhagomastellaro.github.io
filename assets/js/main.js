var cssMode = document.getElementById('mainStyle').href;

function changeMode(){
    
    if(cssMode == 'assets/css/styles-light.css'){
        document.getElementById('mainStyle').href = 'assets/css/styles-dark.css';
        document.getElementById('modeTheme').innerHTML = "LIGHT";
        cssMode = 'assets/css/styles-dark.css'
    }else{
        document.getElementById('mainStyle').href = 'assets/css/styles-light.css';
        document.getElementById('modeTheme').innerHTML = "DARK";
        cssMode = 'assets/css/styles-light.css'
    }
    
}