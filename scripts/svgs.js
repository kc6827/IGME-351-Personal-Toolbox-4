var svgMethod;
var interruptions;
var spacing;
var margins = 0;
var lineLength;

const svgTest = () => {
    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="49%" height="100%" viewBox="0 0 100 100">` +
        polyl(2, 'red', 'blue', 10, 83.5, 70, 33, 40, 40) +
        path("M" + 50, 0, "L" + 75, 50, 35, 40) +
        scale(translate(rotate(rect(50, 50, 20, 20, 'red', 'none'), 25, 50, 50), 10, 10), .5, 1.2) +
        `</svg>`
        ;
}

const svg1 = () => {
    interruptions = "";
    spacing = 1.5;
    lineLength = 2.8;
    margins = 1.5;
    for (var i = 2; i < 56; i++) {
        for (var j = 2; j < 56; j++) {
            interruptions += translate(
                randPos(
                    strokeW(
                        randRot(
                            line(-lineLength / 2, 0, lineLength / 2, 0, 'black'),
                            90),
                        .1),
                .9),
            margins + i * spacing, margins + j * spacing);
        }
    }

    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="49%" height="100%" viewBox="0 0 100 100">` +
        interruptions +
        `</svg>`
}

const svg2 = () => {
    interruptions = "";
    spacing = 2.3;
    lineLength = 2.8;
    for (var i = 2; i < 38; i++) {
        for (var j = 2; j < 38; j++) {
            interruptions += translate(
                randPos(
                    strokeW(
                        randRot(
                            polyg('black', 'none', -lineLength / 4, -lineLength / 2, 0, lineLength / 2, lineLength / 4, -lineLength / 2),
                            90),
                        .1),
                .9),
            i * spacing, j * spacing);
        }
    }

    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="49%" height="100%" viewBox="0 0 100 100">` +
        interruptions +
        `</svg>`
}

const selectChange = () => {
    document.querySelector("select").onchange = e => {
        var s = e.target.value;

        if (s == "Original") {
            svgMethod = svg1;
        }
        else if (s == "Alternate 1") {
            svgMethod = svg2;
        }
        else if (s == "Alternate 2") {
            svgMethod = svg3;
        }

        document.querySelector('svg').outerHTML = svgMethod();
    };
}

const buttonPress = () => {
    svgMethod = svg1;

    document.querySelector("button").onclick = e => {
        document.querySelector('svg').outerHTML = svgMethod();
    };
}