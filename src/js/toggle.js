function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        setTheme('light');
    } else {
        setTheme('dark');
    }     
}

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.setAttribute('data-theme', themeName);

    document.documentElement.className = '';
    document.documentElement.classList.add(`theme--${themeName}`);
}

(function() {
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    // Un thème a été choisi par l'utilisateur sur ce site, on l'applique
    if (currentTheme) {
        if (currentTheme === 'dark') {
            setTheme('dark');
            document.getElementById('slider').checked = false;
        } else {
            setTheme('light');
            document.getElementById('slider').checked = true;
        }
    }
    else {
        // Pas encore de choix, on regarde les préférences de l'OS/navigateur
        if (window.matchMedia("(prefers-color-scheme: dark)")){
            setTheme('dark');
            document.getElementById('slider').checked = false;
        }
        else {
            // TODO: Thème par défaut ?
        }
    }

    window.matchMedia("(prefers-color-scheme: dark)").addListener(e => e.matches && toggleTheme() )
    window.matchMedia("(prefers-color-scheme: light)").addListener(e => e.matches && toggleTheme() )
})();