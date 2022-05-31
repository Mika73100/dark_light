const body = document.querySelector('body')
const initialTheme = 'light'

const setTheme = (theme) => {
    localStorage.setItem('theme', theme)
    body.setAttribute('data-theme', theme)
}

const toggleTheme = () => {
    let button=document.getElementById('clicblanc');

    const activeTheme = localStorage.getItem('theme');

    if (activeTheme === 'light'){
        console.log("LIGHT -> DARK");
        setTheme ('dark');
        button.style.background =  'white';
        
    } 

    else{
        console.log("DARK ->LIGHT");
        setTheme ('light');
        button.style.background = 'black';
        
        
    } 
}   
const setThemeOnInit = () => {
    const savedTheme = localStorage.getItem('theme');
    savedTheme
    ? body.setAttribute('data-theme', savedTheme) 
    : setTheme(initialTheme);
}

setThemeOnInit()