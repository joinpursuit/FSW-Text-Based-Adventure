let map = [];

const createMap = () => {
    for (let x = 0; x < 4; x++) {
    				map[x] = [];
        for (let y = 0; y < 3; y++) {
            addRoom(x, y); 
        }
    }
}

const addRoom = (x, y) => {
    map[x][y] = room(x,y);
}

const room = (x,y) => {
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

const showUpperMap = () => {
    console.log(`|------------------|`);
    console.log(`|      ${map[0][0]}      |`);
    console.log(`|--------/ --------|`);
    console.log(`|  ${map[0][1]} |`);
    console.log(`|--------/ --------|`);
    console.log(`|${map[0][2]}|`);
    console.log(`|------------------|`);
}
const showLowerMap = () => {
    console.log(`|-----------------|-------------|----------------|`);
    console.log(`|   ${map[1][0]}   | ${map[1][1]} |   ${map[1][2]}   |`);
    console.log(`|--------/ -------|------/ -----|-------/ -------|`);
    console.log(`| ${map[2][0]} |  ${map[2][1]}  | ${map[2][2]} |`);
    console.log(`|--------/ -------|------/ -----|-------/ -------|`);
    console.log(`|   ${map[3][0]}    |    ${map[3][1]}     |  ${map[3][2]}  |`);
    console.log(`|-----------------|------/ -----|----------------|`);
}

createMap();
// console.log(map);

module.exports = {
    createMap,
    room,
    addRoom,
    showUpperMap,
    showLowerMap,
    map
};

