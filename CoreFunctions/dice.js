// nat -> highest value of the di
//min -> lowest possible roll of the di

const dice = (nat, min) => {
    return Math.floor(Math.random() * nat + min);
};


module.exports = dice;

