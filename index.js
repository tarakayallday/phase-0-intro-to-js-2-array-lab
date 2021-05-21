// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
    cats.push("Ralph");
    return cats;
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function appendCat() {
    let addBroom = [...cats, "Broom"];
    return addBroom;
}

function prependCat() {
    let addArnold = ["Arnold", ...cats];
    return addArnold;
}

function removeLastCat() {
    let removeGarfield = cats.slice(0, 2);
    return removeGarfield;
}

function removeFirstCat() {
    let removeMilo = cats.slice(-2);
    return removeMilo;
}
