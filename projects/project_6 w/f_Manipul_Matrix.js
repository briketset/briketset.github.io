"use strict";

export function multiple(a = new Array(2), b = []) {

    let rowsA = a.length
    let colsA = a[0].length
    let rowsB = b.length
    let colsB = b[0].length
    let c = [];
    if (colsA != rowsB) return false;
    for (var i = 0; i < rowsA; i++) c[ i ] = [];
    for (var k = 0; k < colsB; k++) {
        for (var i = 0; i < rowsA; i++) {
            var t = 0;
            for (var j = 0; j < rowsB; j++) t += a[ i ][j]*b[j][k];
            c[ i ][k] = t;
        }
    }
    return c;
}