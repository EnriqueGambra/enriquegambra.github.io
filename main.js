// import { Octokit } from "@octokit/rest";
//
// const octokit = new Octokit({
//     auth: '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',
// });


window.onload = () => onPageLoad()

function downloadResume() {

    const anchorElement = document.createElement('a');

    anchorElement.download = 'Enrique Gambra Resume';

    anchorElement.href = '/assets/Gambra_Enrique_Resume.docx';

    anchorElement.click();
}

function emailMe() {
    window.location.href = "mailto:gambra7@gmail.com";
}

function onPageLoad() {
    // buildProjectCards();
    buildProjectCardsFromServer();
}

async function buildProjectCardsFromServer() {

    const response = await fetch('https://enrique-gam-portfolio-server-8f8637dff469.herokuapp.com//getRepoData');

    const projectCardData = await response.json();

    // CPU Simulator Data
    document.getElementById('cpu-simulator-paragraph').innerText = projectCardData.cpuSimulatorData.description.substring(0, 100) + '...';

    document.getElementById('cpu-simulator-learn-more-btn').href = projectCardData.cpuSimulatorData.html_url;

    // Amazon Alexa Data
    document.getElementById('amazon-alexa-paragraph').innerText = projectCardData.amazonAlexaData.description.substring(0, 100) + '...';

    document.getElementById('amazon-alexa-skill-learn-more-btn').href = projectCardData.amazonAlexaData.html_url;

    // Compare-NBA-Players-Stats Data
    document.getElementById('nba-player-stats-paragraph').innerText = projectCardData.nbaPlayerStats.description.substring(0, 100) + '...';

    document.getElementById('nba-player-stats-learn-more-btn').href = projectCardData.nbaPlayerStats.html_url;

    // Alien-Invasion Data
    document.getElementById('alien-invasion-paragraph').innerText = projectCardData.alienInvasionData.description.substring(0, 100) + '...';

    document.getElementById('alien-invasion-learn-more-btn').href = projectCardData.alienInvasionData.html_url;

}

// async function buildProjectCards() {
//
//     // CPU Simulator Project
//     const cpuSimulatorData = await octokit.request("GET /repos/enriquegambra/CPU_Simulator");
//
//     document.getElementById('cpu-simulator-paragraph').innerText = cpuSimulatorData.data.description.substring(0, 100) + '...';
//
//     document.getElementById('cpu-simulator-learn-more-btn').href = cpuSimulatorData.data.html_url;
//
//     // Amazon Alexa Data
//     const amazonAlexaData = await octokit.request("GET /repos/enriquegambra/Amazon-Alexa-Skill");
//
//     document.getElementById('amazon-alexa-paragraph').innerText = amazonAlexaData.data.description.substring(0, 100) + '...';
//
//     document.getElementById('amazon-alexa-skill-learn-more-btn').href = amazonAlexaData.data.html_url;
//
//     // Compare-NBA-Players-Stats Data
//     const nbaPlayerStats = await octokit.request("GET /repos/enriquegambra/Compare-NBA-Players-Stats");
//
//     document.getElementById('nba-player-stats-paragraph').innerText = nbaPlayerStats.data.description.substring(0, 100) + '...';
//
//     document.getElementById('nba-player-stats-learn-more-btn').href = nbaPlayerStats.data.html_url;
//
//     // Alien-Invasion Data
//     const alienInvasionData = await octokit.request("GET /repos/enriquegambra/Alien-Invasion");
//
//     document.getElementById('alien-invasion-paragraph').innerText = alienInvasionData.data.description.substring(0, 100) + '...';
//
//     document.getElementById('alien-invasion-learn-more-btn').href = alienInvasionData.data.html_url;
// }