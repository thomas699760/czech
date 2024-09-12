const players = {
    "Patrik Schick": {
        club: "Bayer Leverkusen",
        position: "Forward",
        totalAppearances: 15,
        totalGoals: 9,
        assists: 2,
        minutesPlayed: 1200,
        nationalTeamDebut: 2016
    },
    "Adam Hložek": {
        club: "Bayer Leverkusen",
        position: "Forward",
        totalAppearances: 22,
        totalGoals: 7,
        assists: 5,
        minutesPlayed: 1500,
        nationalTeamDebut: 2020
    },
    "Tomáš Chorý": {
        club: "Viktoria Plzeň",
        position: "Forward",
        totalAppearances: 18,
        totalGoals: 6,
        assists: 3,
        minutesPlayed: 980,
        nationalTeamDebut: 2022
    },
    "Jan Kuchta": {
        club: "Sparta Prague",
        position: "Forward",
        totalAppearances: 20,
        totalGoals: 10,
        assists: 4,
        minutesPlayed: 1400,
        nationalTeamDebut: 2021
    },
    "Mojmír Chytil": {
        club: "Slavia Prague",
        position: "Forward",
        totalAppearances: 17,
        totalGoals: 5,
        assists: 3,
        minutesPlayed: 1100,
        nationalTeamDebut: 2022
    },
    "Václav Černý": {
        club: "VfL Wolfsburg",
        position: "Forward",
        totalAppearances: 25,
        totalGoals: 8,
        assists: 6,
        minutesPlayed: 1800,
        nationalTeamDebut: 2020
    },
    "Tomáš Souček": {
        club: "West Ham United",
        position: "Midfielder",
        totalAppearances: 28,
        totalGoals: 3,
        assists: 2,
        minutesPlayed: 2500,
        nationalTeamDebut: 2016
    },
    "Antonín Barák": {
        club: "Fiorentina",
        position: "Midfielder",
        totalAppearances: 23,
        totalGoals: 4,
        assists: 3,
        minutesPlayed: 1600,
        nationalTeamDebut: 2017
    },
    "Alex Král": {
        club: "Union Berlin",
        position: "Midfielder",
        totalAppearances: 27,
        totalGoals: 2,
        assists: 4,
        minutesPlayed: 2000,
        nationalTeamDebut: 2019
    },
    "Lukáš Provod": {
        club: "Slavia Prague",
        position: "Midfielder",
        totalAppearances: 24,
        totalGoals: 6,
        assists: 5,
        minutesPlayed: 1900,
        nationalTeamDebut: 2021
    },
    "Ondřej Lingr": {
        club: "Slavia Prague",
        position: "Midfielder",
        totalAppearances: 26,
        totalGoals: 7,
        assists: 2,
        minutesPlayed: 1700,
        nationalTeamDebut: 2021
    },
    "Matěj Jurásek": {
        club: "Slavia Prague",
        position: "Winger",
        totalAppearances: 25,
        totalGoals: 5,
        assists: 1,
        minutesPlayed: 986,
        nationalTeamDebut: 2024
    },
    "Vladimír Coufal": {
        club: "West Ham United",
        position: "Defender",
        totalAppearances: 26,
        totalGoals: 0,
        assists: 4,
        minutesPlayed: 2400,
        nationalTeamDebut: 2017
    },
    "Ladislav Krejčí": {
        club: "Sparta Prague",
        position: "Defender",
        totalAppearances: 19,
        totalGoals: 2,
        assists: 1,
        minutesPlayed: 1700,
        nationalTeamDebut: 2021
    },
    "Robin Hranáč": {
        club: "Viktoria Plzeň",
        position: "Defender",
        totalAppearances: 21,
        totalGoals: 1,
        assists: 0,
        minutesPlayed: 1500,
        nationalTeamDebut: 2022
    },
    "David Jurásek": {
        club: "Benfica",
        position: "Defender",
        totalAppearances: 16,
        totalGoals: 1,
        assists: 3,
        minutesPlayed: 1300,
        nationalTeamDebut: 2022
    },
    "Tomáš Holeš": {
        club: "Slavia Prague",
        position: "Defender",
        totalAppearances: 25,
        totalGoals: 3,
        assists: 2,
        minutesPlayed: 1800,
        nationalTeamDebut: 2020
    },
    "Adam Gabriel": {
        club: "Slavia Prague",
        position: "Defender",
        totalAppearances: 15,
        totalGoals: 0,
        assists: 1,
        minutesPlayed: 1000,
        nationalTeamDebut: 2023
    },
    "Jindřich Staněk": {
        club: "Viktoria Plzeň",
        position: "Goalkeeper",
        totalAppearances: 24,
        cleanSheets: 10,
        goalsConceded: 20,
        minutesPlayed: 2160,
        nationalTeamDebut: 2021
    },
    "Tomáš Vaclík": {
        club: "Olympiacos",
        position: "Goalkeeper",
        totalAppearances: 12,
        cleanSheets: 5,
        goalsConceded: 10,
        minutesPlayed: 1080,
        nationalTeamDebut: 2012
    },
    "Matěj Kovář": {
        club: "Sparta Prague",
        position: "Goalkeeper",
        totalAppearances: 22,
        cleanSheets: 8,
        goalsConceded: 18,
        minutesPlayed: 1980,
        nationalTeamDebut: 2023
    },
    "Jiří Pavlenka": {
        club: "Werder Bremen",
        position: "Goalkeeper",
        totalAppearances: 28,
        cleanSheets: 9,
        goalsConceded: 27,
        minutesPlayed: 2520,
        nationalTeamDebut: 2017
    },
    "Vítězslav Jaroš": {
        club: "Liverpool U23",
        position: "Goalkeeper",
        totalAppearances: 20,
        cleanSheets: 7,
        goalsConceded: 15,
        minutesPlayed: 1800,
        nationalTeamDebut: 2023
    },
    "Tomáš Koubek": {
        club: "Augsburg",
        position: "Goalkeeper",
        totalAppearances: 18,
        cleanSheets: 6,
        goalsConceded: 24,
        minutesPlayed: 1620,
        nationalTeamDebut: 2016
    }
};




function showGridView() {
    var buttons = document.getElementsByClassName("images-container")[0].children
        if (buttons[1].classList.contains("active")) {
            buttons[1].classList.remove("active")
            buttons[0].classList.add("active")
            document.getElementsByClassName('PlayerGrid')[0].classList.add('active');
            document.getElementsByClassName('slideshow-view')[0].classList.remove('active');
        }
}

function showSlideshowView() {
    var buttons = document.getElementsByClassName("images-container")[0].children
    if (buttons[0].classList.contains("active")) {
        buttons[0].classList.remove("active")
        buttons[1].classList.add("active")
        document.getElementsByClassName('slideshow-view')[0].classList.add('active');
        document.getElementsByClassName('PlayerGrid')[0].classList.remove('active');
    }
}

function selectGridPlayer(name) {
    var element = document.getElementsByClassName("GridSelectedPlayer")[0];
    element.children[0].innerHTML = name;
    element.children[1].src = `./css/players/${name}.jpg`;
    const stats = element.children[3].children;
    const playerStats = players[name] || players[name.replace(" ","")];
    const statKeys = Object.keys(playerStats);
    const statValues = Object.values(playerStats);
for (let i = 0; i < stats.length; i++) {
    if (statKeys[i]) {
        stats[i].innerHTML = `${statKeys[i]}: ${statValues[i]}`;
    }
}
}



document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.gridItem img');
    images.forEach(image => {
        image.addEventListener('click', function() {
            const name = this.alt;
            selectGridPlayer(name)

        });
    });
});