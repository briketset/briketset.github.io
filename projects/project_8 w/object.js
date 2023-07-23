"use strict";

export class Obj3D {
    constructor() {
        
        }
        point() {
            return [[0],[0],[0],[1]]
        }
        vector() {
            return [[0],[0],[0],[0]]
        }
        vertex() {

        }
        cub() {            
            return [
                [[-1],[-1],[ 1],[ 1]],
                [[-1],[ 1],[ 1],[ 1]],
                [[ 1],[ 1],[ 1],[ 1]],
                [[ 1],[-1],[ 1],[ 1]],
                [[-1],[-1],[-1],[ 1]],
                [[-1],[ 1],[-1],[ 1]],
                [[ 1],[ 1],[-1],[ 1]],
                [[ 1],[-1],[-1],[ 1]],
                ] ;       
        } 
        
        
}

// export class Point {
//     constructor() {
//         this.xyz = [0,0,0,1]
//         }
//         toMatrix() {
//             let a = []
//             for (let i = 0; i < xyz.length; i++) {
//                 xyz[i] = [xyz[i]]               
//             }
//             return a
//         }
// }


class Point {
    // методы класса
    constructor(name) { 
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.n = 1;
    }
    method1() {  }
    method2() {  }
    method3() {  }
}


