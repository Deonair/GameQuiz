"use strict"

/**
 * Add actions to page buttons 
 */
function addButtonActions() {
    var landingButton = document.getElementById('button-landing');
    var startButton = document.getElementById('button-start');
    var questionsButton = document.getElementById('button-questions');
    var endButton = document.getElementById('button-end');
    var loginButton = document.getElementById('button-login')
    var leaderboardButton = document.getElementById('button-leaderboard');

    landingButton.addEventListener("click", function() {
        showLandingPage();
    });
    startButton.addEventListener("click", function() {
        showStartPage();
    });
    questionsButton.addEventListener("click", function() {
        showQuestionsPage();
    });
    endButton.addEventListener("click", function() {
        showEndPage();
    });
    leaderboardButton.addEventListener("click", function() {
        showLeaderboardPage();
    });
    loginButton.addEventListener("click", function() {
        showLoginPage();
    });
}
/**
 * Hide all pages
 */
function hideAllPages() {
    var landingPage = document.getElementById('page-landing');
    var startPage = document.getElementById('page-start');
    var questionsPage = document.getElementById('page-questions');
    var leaderboardPage = document.getElementById('page-leaderboard');
    var endPage = document.getElementById('page-end');
    var loginPage = document.getElementById('page-login');

    landingPage.style.display = 'none';
    startPage.style.display = 'none';
    questionsPage.style.display = 'none';
    endPage.style.display = 'none';
    leaderboardPage.style.display = 'none';
    loginPage.style.display = "none";
}

function showLandingPage() {
    var page = document.getElementById('page-landing');

    hideAllPages();

    page.style.display = 'block';

    console.info('Je bent nu op de landing pagina');
}

/**
 * Show start page
 */
function showStartPage() {
    var page = document.getElementById('page-start');

    hideAllPages();

    page.style.display = 'block';

    console.info('Je bent nu op de landing pagina');

}

/**
 * Show questions page
 */
function showQuestionsPage() {
    var page = document.getElementById('page-questions');

    hideAllPages();

    page.style.display = 'block';

    console.info('Je bent nu op de vragenpagina');
}
/*Endpage */

function showEndPage() {
    var page = document.getElementById('page-end');

    hideAllPages();

    page.style.display = 'block';

    console.info('Je bent nu op de endagina');
}

// Show leaderboard page
function showLeaderboardPage() {
    var page = document.getElementById('page-leaderboard');

    hideAllPages();

    page.style.display = 'block';

    console.info('Je bent nu op de leaderboardpage');
}

function showLoginPage() {
    var page = document.getElementById('page-login');

    hideAllPages();

    page.style.display = 'block';

    console.info('Je bent nu op de login');
}

// Initialize
addButtonActions();
showLoginPage();