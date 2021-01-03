let map = [];

const createShip = () => {
    for (let x = 0; x < 4; x++) {
    				map[x] = [];
        for (let y = 0; y < 3; y++) {
            addRoomShip(x, y); 
        }
    }
}

const addRoomShip = (x, y) => {
    map[x][y] = roomShip(x,y);
}

const roomShip = (x,y) => {
    // This is to name the rooms
    if(x === 0 && y === 0){
        return 'Bridge';
    }
    if(x === 0 && y === 1){
        return 'Conference Room';
    }
    if(x === 0 && y === 2){
        return 'Captain\'s Quarters';
    }
    if(x === 1 && y === 0){
        return 'Medical Bay';
    }
    if(x === 1 && y === 1){
        return 'Engine Room';
    }
    if(x === 1 && y === 2){
        return 'Cargo Hold';
    }
    if(x === 2 && y === 0){
        return 'Crew\'s Quarters';
    }
    if(x === 2 && y === 1){
        return 'Main Hold';
    }
    if(x === 2 && y === 2){
        return 'Cargo Elevator';
    }
    if(x === 3 && y === 0){
        return 'Escape Pod';
    }
    if(x === 3 && y === 1){
        return 'Ramp';
    }
    if(x === 3 && y === 2){
        return 'Storage Room';
    } 
}

const showUpperShipMap = () => {
    console.log(`|------------------|`);
    console.log(`|      ${map[0][0]}      |`);
    console.log(`|--------/ --------|`);
    console.log(`|  ${map[0][1]} |`);
    console.log(`|--------/ --------|`);
    console.log(`|${map[0][2]}|`);
    console.log(`|------------------|`);
}
const showLowerShipMap = () => {
    console.log(`|-----------------|-------------|----------------|`);
    console.log(`|   ${map[1][0]}   | ${map[1][1]} |   ${map[1][2]}   |`);
    console.log(`|--------/ -------|------/ -----|-------/ -------|`);
    console.log(`| ${map[2][0]} |  ${map[2][1]}  | ${map[2][2]} |`);
    console.log(`|--------/ -------|------/ -----|-------/ -------|`);
    console.log(`|   ${map[3][0]}    |    ${map[3][1]}     |  ${map[3][2]}  |`);
    console.log(`|-----------------|------/ -----|----------------|`);
}

let galaxyMap = []

const createGalaxyMap = () => {
    for (let x = 0; x < 6; x++) {
    				galaxyMap[x] = [];
        for (let y = 0; y < 6; y++) {
            addMapCoords(x, y); 
        }
    }
}

const addMapCoords = (x, y) => {
    galaxyMap[x][y] = mapCoords(x,y);
}

const mapCoords = (x,y) => {
    // This is to name the rooms
    if(x === 0 && y === 0){
        return 'Space';
    }
    if(x === 0 && y === 1){
        return 'Bothawui';
    }
    if(x === 0 && y === 2){
        return 'Concord Dawn';
    }
    if(x === 0 && y === 3){
        return 'Corellia';
    }
    if(x === 0 && y === 4){
        return 'Coruscant';
    }
    if(x === 0 && y === 5){
        return 'Csilla';
    }
    if(x === 1 && y === 0){
        return 'Dantooine';
    }
    if(x === 1 && y === 1){
        return 'Dathomir';
    }
    if(x === 1 && y === 2){
        return 'Dromund Kass';
    }
    if(x === 1 && y === 3){
        return 'Duro';
    }
    if(x === 1 && y === 4){
        return 'Dxun';
    }
    if(x === 1 && y === 5){
        return 'Gentes';
    }
    if(x === 2 && y === 0){
        return 'Ithor';
    }
    if(x === 2 && y === 1){
        return 'Iridonia';
    }
    if(x === 2 && y === 2){
        return 'Klatooine';
    }
    if(x === 2 && y === 3){
        return 'Korriban';
    }
    if(x === 2 && y === 4){
        return 'Kuat';
    }
    if(x === 2 && y === 5){
        return 'Manaan';
    }
    if(x === 3 && y === 0){
        return 'Mandalore';
    }
    if(x === 3 && y === 1){
        return 'Mon Cala';
    }
    if(x === 3 && y === 2){
        return 'Naboo';
    }
    if(x === 3 && y === 3){
        return 'Nar Shaddaa';
    }
    if(x === 3 && y === 4){
        return 'Neimoidia';
    }
    if(x === 3 && y === 5){
        return 'Ord Mantell';
    }
    if(x === 4 && y === 0){
        return 'Onderon';
    }
    if(x === 4 && y === 1){
        return 'Rodia';
    }
    if(x === 4 && y === 2){
        return 'Rori';
    }
    if(x === 4 && y === 3){
        return 'Ryloth';
    }
    if(x === 4 && y === 4){
        return 'Shili';
    }
    if(x === 4 && y === 5){
        return 'Sriluur';
    }
    if(x === 5 && y === 0){
        return 'Sullust';
    }
    if(x === 5 && y === 1){
        return 'Talus';
    }
    if(x === 5 && y === 2){
        return 'Tatooine';
    }
    if(x === 5 && y === 3){
        return 'Tibrin';
    }
    if(x === 5 && y === 4){
        return 'Trandosha';
    }
    if(x === 5 && y === 5){
        return 'Tython';
    } 
}

const showGalaxyMap = () => {
    console.log('|-------------------------------------------------|');
    console.log('|                                                 |');
    console.log('|-------------------------------------------------|');
}

createGalaxyMap();
// console.log(galaxyMap);
createShip();

module.exports = {
    createShip,
    roomShip,
    addRoomShip,
    showUpperShipMap,
    showLowerShipMap,
    createGalaxyMap,
    addMapCoords,
    mapCoords,
    map,
    galaxyMap,
};

// Species       | Homeworlds     |
// --------------|----------------|
// Bothan        | Bothawui       |
// Chiss         | Csilla         |
// Duros         | Duro           |
// Human         | Everywhere     |
// Ishi Tib      | Tibrin         |
// Ithorians     | Ithor          |
// Klatooinians  | Klatooine      |
// Mon Calamari  | Mon Cala*****  |
// Neimoidian    | Neimoidia      |
// Quarren       | Mon Cala*****  |
// Rodian        | Rodia          |
// Sullustan     | Sullust        |
// Togruta       | Shili          |
// Trandoshan    | Trandosha      |
// Twi'lek       | Ryloth         |
// Ugnaught      | Gentes         |
// Weequay       | Sriluur        |
// Zabrak        | Iridonia       |