const readline = require('readline-sync');
const mapBuild = require('./maps');

const createCharacter = () => {
    let fName = readline.question('What would you like to name your character\'s first name?\n');
    let lName = readline.question('What would you like to name your character\'s last name?\n');

    choiceSpecies = [];
    choiceSpecies[0] = 'Bothan';
    choiceSpecies[1] = 'Chiss';
    choiceSpecies[2] = 'Duros';
    choiceSpecies[3] = 'Human';
    choiceSpecies[4] = 'Ishi Tib';
    choiceSpecies[5] = 'Ithorian';
    choiceSpecies[6] = 'Klatooinians';
    choiceSpecies[7] = 'Mon Calamari';
    choiceSpecies[8] = 'Neimoidian';
    choiceSpecies[9] = 'Quarren';
    choiceSpecies[10] = 'Rodian';
    choiceSpecies[11] = 'Sullustan';
    choiceSpecies[12] = 'Togruta';
    choiceSpecies[13] = 'Trandoshan';
    choiceSpecies[14] = 'Twi\'lek';
    choiceSpecies[15] = 'Ugnaught';
    choiceSpecies[16] = 'Weequay';
    choiceSpecies[17] = 'Zabrak';
    selectedSpecies = readline.keyInSelect(choiceSpecies, 'Select your species');

    switch(choiceSpecies[selectedSpecies]){
        case 'Bothan':
            // homePlanet = 'Bothawui';
            homePlanet = mapBuild.galaxyMap[0][1];
            break;
        case 'Chiss':
            // homePlanet = 'Csilla';
            homePlanet = mapBuild.galaxyMap[0][5];
            break;
        case 'Duros':
            // homePlanet = 'Duro';
            homePlanet = mapBuild.galaxyMap[1][3];
            break;
        case 'Human':
            // homePlanet = 'Coruscant';
            homePlanet = mapBuild.galaxyMap[0][4];
            break;
        case 'Ishi Tib':
            // homePlanet = 'Tibrin';
            homePlanet = mapBuild.galaxyMap[5][3];
            break;
        case 'Ithorian':
            // homePlanet = 'Ithor';
            homePlanet = mapBuild.galaxyMap[2][0];
            break;
        case 'Klatooinians':
            // homePlanet = 'Klatooine';
            homePlanet = mapBuild.galaxyMap[2][2];
            break;
        case 'Mon Calamari':
            // homePlanet = 'Mon Cala';
            homePlanet = mapBuild.galaxyMap[3][1];
            break;
        case 'Neimoidian':
            // homePlanet = 'Neimoidia';
            homePlanet = mapBuild.galaxyMap[3][4];
            break;
        case 'Quarren':
            // homePlanet = 'Mon Cala';
            homePlanet = mapBuild.galaxyMap[3][1];
            break;
        case 'Rodian':
            // homePlanet = 'Rodia';
            homePlanet = mapBuild.galaxyMap[4][1];
            break;
        case 'Sullustan':
            // homePlanet = 'Sullust';
            homePlanet = mapBuild.galaxyMap[5][0];
            break;
        case 'Togruta':
            // homePlanet = 'Shili';
            homePlanet = mapBuild.galaxyMap[4][4];
            break;
        case 'Trandoshan':
            // homePlanet = 'Trandosha';
            homePlanet = mapBuild.galaxyMap[5][4];
            break;
        case 'Twi\'lek':
            // homePlanet = 'Ryloth';
            homePlanet = mapBuild.galaxyMap[4][3];
            break;
        case 'Ugnaught':
            // homePlanet = 'Gentes';
            homePlanet = mapBuild.galaxyMap[1][5];
            break;
        case 'Weequay':
            // homePlanet = 'Sriluur';
            homePlanet = mapBuild.galaxyMap[4][5];
            break;
        case 'Zabrak':
            // homePlanet = 'Iridonia';
            homePlanet = mapBuild.galaxyMap[2][1];
            break;
        default:
            'Help'
    }

    let playerCharacter = {
        firstName: fName,
        lastName: lName,
        species: choiceSpecies[selectedSpecies],
        homeWorld: homePlanet
    };

    console.log(playerCharacter.firstName);
    console.log(playerCharacter.lastName);
    console.log(playerCharacter.species);
    console.log(playerCharacter.homeWorld);
}

createCharacter();
