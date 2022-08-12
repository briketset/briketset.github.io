"use strict";
 
export class Primitive {
    constructor() {
        
    }

    p_cub = ( Lx = 1 , Ly = 1, Lz = 1 ) => {
        return [
            [[ -Lx/2],[ -Ly/2],[  Lz/2],[ 1 ]],
            [[ -Lx/2],[  Ly/2],[  Lz/2],[ 1 ]],
            [[  Lx/2],[  Ly/2],[  Lz/2],[ 1 ]],
            [[  Lx/2],[ -Ly/2],[  Lz/2],[ 1 ]],
            [[ -Lx/2],[ -Ly/2],[ -Lz/2],[ 1 ]],
            [[ -Lx/2],[  Ly/2],[ -Lz/2],[ 1 ]],
            [[  Lx/2],[  Ly/2],[ -Lz/2],[ 1 ]],
            [[  Lx/2], [-Ly/2],[ -Lz/2],[ 1 ]],
            ]
        
    }
}