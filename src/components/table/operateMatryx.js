// import { v4 as uuidv4 } from "uuid";

export function genMatryx(row, column) {
    const initArray = [];

    for (let y = 0; y < row; y+=1){
        const line = [];
        for (let x = 0; x < column; x += 1) {
            line[x] = {id: {x, y}, value: Math.floor(Math.random() * 999)};
        };
        initArray.push(line);
    }
    return initArray;
}
export function calcSums(data) {
    return data.map(line => {
        const summ = line.reduce((accum, el) => accum + el.value, 0);
        return summ;
    })
}
export function calcMeans(data) {
    const meansLine = [];
    const rows = data.length;
    const columns = data[0].length;

    for (let i = 0; i < columns; i += 1) {
        meansLine.push(Math.floor(data.reduce((accum, nextLine) => accum + nextLine[i].value, 0)/rows))
    }
    return meansLine;
}