const Element = Object.freeze({
    Earth: 'Earth',
    Water: 'Water',
    Wind: 'Wind',
    Fire: 'Fire',
});

const ORB_FIRE = "./orb-fire.svg";
const ORB_WATER = "./orb-water.svg";
const ORB_WIND = "./orb-wind.svg";
const ORB_EARTH = "./orb-earth.svg";

const getSvg = {
    'Earth': ORB_EARTH,
    'Water': ORB_WATER,
    'Wind': ORB_WIND,
    'Fire': ORB_FIRE
}

function newOrb(element, fold) {
    const orb = createBaseElement(fold)
    orb.src = getSvg[element];
    return orb;
}

function createBaseElement(fold) {
    const multiplier = defaultIfInvalidNumber(fold, 0);
    const base = document.createElement("img");
    base.width = 50 + (10 * multiplier);
    base.src = "";
    return base;
}