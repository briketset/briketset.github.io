"use strict";

export class Matrix {
    constructor() {
        
        }
        matrixSet() {
            return [
                [ 1, 0, 0, 0],
                [ 0, 1, 0, 0],
                [ 0, 0, 1, 0],
                [ 0, 0, 0, 1],
            ]
        }
        matrixPerspective(fovy , n, f, aspect) {

            let ct = 1 / Math.tan( fovy / 2 )
            return [
                [ ct / aspect, 0, 0, 0],
                [ 0, ct, 0, 0],
                [ 0, 0, (f + n) / (f - n), 1],
                [ 0, 0, (-2 * f * n) / (f - n), 0],
            ]
        }
        matrixPerspective2( c ) {

            return [
                [ 1, 0, 0, -1/c],
                [ 0, 1, 0, 0],
                [ 0, 0, 1, 0],
                [ 0, 0, 0, 1],
            ]
        }
        matrixPerspective3(fovy , n, f, aspect) {

            let ct = 1 / Math.tan( fovy / 2 )
            return [
                [ 0.5, -1.5, 1.5, 1.5],
                [ 1.5, 0.5, -1.5, -1.5],
                [ 1.5, 1.5, 0.5, 1.5],
                [ 1.5, 1.5, 1.5, 0.5],
            ]
        }
        matrixPerspective4( a = 0 , b = 0 , c = 0 ) {

            return [
                [ 1, 0, 0, 0],
                [ 0, 1, 0, 0],
                [ 0, 0, 1, 1],
                [ c, b, a, 1],
            ]
        }
        matrixPerspective5( a = 1 ) {

            return [
                [ 1/a, 0, 0, 0],
                [ 0, 1/a, 0, 0],
                [ 0, 0, 1/a, 0],
                [ 0, 0, 0, 1],
            ]
        }
        matrixMove(dx = 0, dy = 0, dz = 0) {
            return [
                [ 1, 0, 0, dx],
                [ 0, 1, 0, dy],
                [ 0, 0, 1, dz],
                [ 0, 0, 0, 1],
            ]
        }
        matrixScale(sx = 1, sy = 1, sz = 1) {
            return [
                [ sx, 0, 0, 0],
                [ 0, sy, 0, 0],
                [ 0, 0, sz, 0],
                [ 0, 0, 0, 1],
            ]
        }
        matrixRotateX(a = 0) {
            let c = Math.cos(a);
            let s = Math.sin(a);
            return [
                [ 1, 0, 0, 0],
                [ 0, c,-s, 0],
                [ 0, s, c, 0],
                [ 0, 0, 0, 1],
            ]
        }
        matrixRotateY(a = 0) {
            let c = Math.cos(a);
            let s = Math.sin(a);
            return [
                [ c, 0, s, 0],
                [ 0, 1, 0, 0],
                [-s, 0, c, 0],
                [ 0, 0, 0, 1],
            ]
        }
        matrixRotateZ(a = 0) {
            let c = Math.cos(a);
            let s = Math.sin(a);
            return [
                [ c,-s, 0, 0],
                [ s, c, 0, 0],
                [ 0, 0, 1, 0],
                [ 0, 0, 0, 1],
            ]
        }
}
