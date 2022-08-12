export class Matrix {
    constructor() {
        
        }
        matrixFirst() {
            return [
                [ 1, 0, 0, 0],
                [ 0, 1, 0, 0],
                [ 0, 0, 1, 0],
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
        matrixMove(dx = 0, dy = 0, dz = 0) {
            return [
                [ 1, 0, 0, dx],
                [ 0, 1, 0, dy],
                [ 0, 0, 1, dz],
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
        matrixPoectionXY() {
            return [
                [ 1, 0, 0, 0],
                [ 0, 1, 0, 0],
                [ 0, 0, 0, 0],
                [ 0, 0, 0, 1],
            ]
        }
        matrixPoectionYZ() {
            return [
                [ 0, 0, 0, 0],
                [ 0, 1, 0, 0],
                [ 0, 0, 1, 0],
                [ 0, 0, 0, 1],
            ]
        }
        matrixPoectionXZ() {
            return [
                [ 1, 0, 0, 0],
                [ 0, 0, 0, 0],
                [ 0, 0, 1, 0],
                [ 0, 0, 0, 1],
            ]
        }       
        matrixPerspective(a) {
            return [
                [ 1, 0, 0, 0],
                [ 0, 1, 0, 0],
                [ 0, 0, 1, 1],
                [ 0, 0, a, 1],
            ]
        }
}