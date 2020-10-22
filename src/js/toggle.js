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
    document.documentElement.classList.add('theme--' + themeName);
}

(function($) {
    'use strict';

    $(document).ready(function() {
        var currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

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

        // var darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        // var lightMediaQuery = window.matchMedia('(prefers-color-scheme: light)');

        // try {
        // // Chrome & Firefox
        // darkMediaQuery.addEventListener('change', function(e) {
        //     toggleTheme();
        // });
        // } 
        // catch (e1) {
        // try {
        //     // Safari
        //     darkMediaQuery.addListener(function(e) {
        //         toggleTheme();
        //     });
        // } 
        // catch (e2) {
        //     console.error(e2);
        // }
        // }

        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function() {
            toggleTheme();
        });
        window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", function() {
            toggleTheme();
        });
    });
})(jQuery);