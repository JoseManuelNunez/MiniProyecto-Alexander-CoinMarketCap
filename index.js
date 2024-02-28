const lightMode = document.getElementById('lightMode');
const darkMode = document.getElementById('darkMode');
const blueMode = document.getElementById('blueMode');
const greenMode = document.getElementById('greenMode');
const mainContent = document.getElementById('mainContainer');
const drawer = document.getElementById('drawer');
const cryptoToSearchInput = document.getElementById('searchInput');
const cryptofound = document.getElementById('crypto');
const dollar = document.getElementById('dollar');
var initialValueCrypto = 0
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

const crypto = [{
        "id": 1,
        "name": "Bitcoin",
        "symbol": "BTC",
        "price": 50000
    },
    {
        "id": 2,
        "name": "Ethereum",
        "symbol": "ETH",
        "price": 3000
    },
    {
        "id": 3,
        "name": "Cardano",
        "symbol": "ADA",
        "price": 2.5
    },
    {
        "id": 4,
        "name": "Ripple",
        "symbol": "XRP",
        "price": 1.5
    },
    {
        "id": 5,
        "name": "Litecoin",
        "symbol": "LTC",
        "price": 200
    }
]

cryptofound.onkeyup = function (e) {
    dollar.value = initialValueCrypto * e.target.value;
}

dollar.onkeyup = function (e) {
    cryptofound.value = e.target.value / initialValueCrypto ;

}

async function searchCrypto() {
    if (cryptoToSearch === "") {
        return;
    } else {
        const searchResult = crypto.filter((crypto) => {
            return crypto.name.toLowerCase().includes(cryptoToSearch.toLowerCase());
        });

        if (searchResult.length === 0) {
            alert('No result found');
        } else {
            cryptofound.removeAttribute('disabled');
            dollar.removeAttribute('disabled');

            initialValueCrypto = searchResult[0].price;

            cryptofound.value = 1;
            dollar.value =  searchResult[0].price / 1;

            let cryptoLabel = document.getElementById('cryptoLabel');
            cryptoLabel.innerHTML =  searchResult[0].name + " (" + searchResult[0].symbol + ")";
        }
    
    }
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
