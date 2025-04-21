const moneyElement = document.getElementById("money");
const experimentElement = document.getElementById("experiment");
const manaElement = document.getElementById("mana");
const workshopElement = document.getElementById("workshop");
const offerButton = document.getElementById("offer");
const nextButton = document.getElementById("next");

const combinations = [
    "A,B-4 C-2=A,C-4 B,C",
    "A-3 B,A=B,A-2 A-2",
    "A-4,B-10 C-2,B=C-3,A,B-4",
    "A B-2,C=A,C,B B-2"
];
const maxManaFold = 10;

function prepareAtelier() {
    resetTotalMana();
    for (const [i, materials] of materialsCollection.entries()) {
        const divMaterials = addDiv(workshopElement, "materials");
        const material = materials.split(' ');
        for (const [j, compound] of material.entries()) {

            const divCompound = addDiv(divMaterials, "compound");
            const divImg = addDiv(divCompound, "orbs");

            const extracts = compound.split(',');
            for (let extract of extracts) {
                const [essence, mana] = determinePrimitiveManaOfTheEssence(extract);
                divImg.appendChild(newOrb(decodeToElement[essence], mana));
            }

            const id = `mana-fold-${i}-${j}`;
            const divDesc = addDiv(divCompound, "extract");
            addNumberInput(id, divDesc);

            const text = expandAbbreviation(compound);
            addSpan(text, divDesc);

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

function determinePrimitiveManaOfTheEssence(extract) {
    if (extract.length === 1) return [extract, 1];
    const [essence, mana] = extract.split('-');
    return [essence, Number(mana)];
}

function resetTotalMana() {
    manaElement.value = 0;
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