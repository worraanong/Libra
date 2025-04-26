const hintElement = document.getElementById("hint");
const moneyElement = document.getElementById("money");
const moneyText = document.getElementById("money-text");
const experimentElement = document.getElementById("experiment");
const experimentText = document.getElementById("experiment-text");
const manaElement = document.getElementById("mana");
const manaText = document.getElementById("mana-text");
const workshopElement = document.getElementById("workshop");
const offerButton = document.getElementById("offer");
const nextButton = document.getElementById("next");
const retryButton = document.getElementById("retry");

const tutorialPopUp = document.getElementById("tutorial");
const menuPopUp = document.getElementById("main-menu");
const goddessPopUp = document.getElementById("goddess-judgement");
const goddessText = document.getElementById("goddess-result");

const bgmButton = document.getElementById("bgm");

const combinations = [
    "D=D-2", //1
    "C-3=C", //2
    "B-2=B-3", //3
    "C B=B,C", //0
    "C,D=C D-2",//2
    "A B,C=A,C-2 B-2",//1
    "D-2 B-2=D-2,B", //2
    "A-3 B,A=B,A-2 A-2", //0
    "A B-2,C=A,C,B B-2", //3
    "A,B-4 C-2=A,C-4 B,C", //6
    "A-8 B-2=A,B-3",//18
    "A-4,B-10 C-2,B=C-3,A,B-4", //8
    "B,C-2 D-3,A=B-3,A-2 D,C"//8
];

let maxManaFold = 20;
const prefixManaFold = "mana-fold-";

function prepareAtelier() {
    resetTotalMana();
    for (const [i, materials] of materialsCollection.entries()) {
        const divMaterials = addDiv(workshopElement, "materials");
        const material = materials.split(' ');
        for (const [j, compound] of material.entries()) {
            const id = `${prefixManaFold}${i}-${j}`;
            prepareCompound(divMaterials, compound, id);
            if (j !== material.length - 1) {
                const divPlus = addDiv(divMaterials, "large");
                addSpan("+", divPlus);
            }
        }
        if (i === materialsCollection.length - 1) continue;
        const divMiddle = addDiv(workshopElement, "materials large unstable");
        addSpan("=", divMiddle);
    }
}

function placeOrbs(div, compound) {
    const extracts = compound.split(',');
    for (let extract of extracts) {
        const [essence, mana] = determinePrimitiveManaOfTheEssence(extract);
        div.appendChild(createOrb(decodeToElement[essence], mana));
    }
}

function attachManaFoldInput(div, compound, id) {
    addNumberInput(id, div);
    const text = expandAbbreviation(compound);
    addSpan(text, div);
}

function prepareCompound(div, compound, id) {
    const divCompound = addDiv(div, "compound");
    const divOrbs = addDiv(divCompound, "orbs");
    placeOrbs(divOrbs, compound);
    const divDesc = addDiv(divCompound, "extract");
    attachManaFoldInput(divDesc, compound, id);
}

function determinePrimitiveManaOfTheEssence(extract) {
    if (extract.length === 1) return [extract, 1];
    const [essence, mana] = extract.split('-');
    return [essence, Number(mana)];
}

function resetTotalMana() {
    manaElement.value = 0;
    manaText.textContent = 0;
}

function expandAbbreviation(text) {
    return text
        .replaceAll("A", Element.Earth)
        .replaceAll("B", Element.Water)
        .replaceAll("C", Element.Wind)
        .replaceAll("D", Element.Fire)
        .replaceAll("-", "×");
}

const decodeToElement = {
    'A': Element.Earth,
    'B': Element.Water,
    'C': Element.Wind,
    'D': Element.Fire,
}