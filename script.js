const API_KEY = 'API_KEY';
const SUMMONER_NAME = 'Mendonça215';

fetch('https://ddragon.leagueoflegends.com/api/versions.json')
    .then(response => response.json())
    .then(versions => {
        const latestVersion = versions[0];
        fetchSummonerDetails(latestVersion);
    })
    .catch(error => {
        console.error('Error fetching latest version:', error);
    });

function fetchSummonerDetails(version) {
    fetch(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${SUMMONER_NAME}?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('summoner-name').textContent = data.name;
            document.getElementById('summoner-icon').src = `http://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${data.profileIconId}.png`;
            document.getElementById('summoner-level').textContent = `Level ${data.summonerLevel}`;
        })
        .catch(error => {
            console.error('Error fetching summoner details:', error);
        });
}
