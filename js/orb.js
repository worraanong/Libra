const Element = Object.freeze({
    Earth: 'Earth',
    Water: 'Water',
    Wind: 'Wind',
    Fire: 'Fire',
});

const ORB_FIRE =  "./image/orb-fire.svg";
const ORB_WATER = "./image/orb-water.svg";
const ORB_WIND =  "./image/orb-wind.svg";
const ORB_EARTH = "./image/orb-earth.svg";

const getSvg = {
    'Earth': ORB_EARTH,
    'Water': ORB_WATER,
    'Wind': ORB_WIND,
    'Fire': ORB_FIRE
}

const baseSize = 50;
const incrementSize = 10;

function createOrb(element, fold) {
    const orb = createBaseElement(fold)
    orb.src = getSvg[element];
    return orb;
}

function createBaseElement(fold) {
    return addImg(getSize(fold));
}

const getSize = (fold) => {
    const multiplier = defaultIfInvalidNumber(fold, 0);
    return baseSize + (incrementSize * multiplier);
}