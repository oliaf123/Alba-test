// Denna kod laddar och initierar Windy-kartan
const options = {
    key: 'UCL2VIHYH7rSag0kcM7nBzvB0GTLQBnP', // Ersätt med din egen API-nyckel från Windy
    lat: 59.3293, // Standard latitud (Stockholm)
    lon: 18.0686, // Standard longitud (Stockholm)
    zoom: 7, // Zoomnivå
};

windyInit(options, function (windy) {
    // Kartan är nu inladdad och kan användas här
    console.log('Kartan är redo!');
});
