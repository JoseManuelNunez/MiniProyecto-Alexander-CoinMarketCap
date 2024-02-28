const lightMode = document.getElementById('lightMode');
const darkMode = document.getElementById('darkMode');
const blueMode = document.getElementById('blueMode');
const greenMode = document.getElementById('greenMode');
const mainContent = document.getElementById('mainContainer');
const drawer = document.getElementById('drawer');
const cryptoToSearchInput = document.getElementById('searchInput');
var cryptoToSearch = ""

function changeTheme(theme) {
    mainContent.dataset.theme = theme;

}

function changeThemeSelectedStyles(theme1, theme2, theme3, theme4) {
    theme1.classList.add('active');
    theme2.classList.remove('active');
    theme3.classList.remove('active');
    theme4.classList.remove('active');

}

lightMode.onclick = function () {
    changeTheme('light');
    changeThemeSelectedStyles(lightMode, darkMode, blueMode, greenMode);
}

darkMode.onclick = function () {
    changeTheme('dark');
    changeThemeSelectedStyles(darkMode, lightMode, blueMode, greenMode);
}

blueMode.onclick = function () {
    changeTheme('blue');
    changeThemeSelectedStyles(blueMode, lightMode, darkMode, greenMode);
}

greenMode.onclick = function () {
    changeTheme('green');
    changeThemeSelectedStyles(greenMode, lightMode, darkMode, blueMode);
}

cryptoToSearchInput.addEventListener('keyup', function (e) {
    cryptoToSearch = e.target.value;
});

async function searchCrypto() {
    console.log('first')
    const apiKey = "fc2a0fa3-3db3-4cc5-83e7-d1424d93d4fd"
    const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5000&convert=USD`
    await fetch(url, {
        method: 'GET',
        headers: {
            'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
    }).catch(error => {
        console.log(error)
    })  
}

function openSetting() {
    mainContent.classList.add('is-drawer-open');
    drawer.classList.add('is-drawer-open');
    
}

document.onkeyup = function (e) {
    if (e.key === 'Escape') {
        mainContent.classList.remove('is-drawer-open');
        drawer.classList.remove('is-drawer-open');
    }
}

function closeSetting() {
    mainContent.classList.remove('is-drawer-open');
    drawer.classList.remove('is-drawer-open');

}


