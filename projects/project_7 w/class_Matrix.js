"use strict";

import {multiple} from "./f_Manipul_Matrix.js"

export class Matrix {
    constructor() {
        this.matrixFirst = () => {
            return [
                [ 1, 0, 0, 0],
                [ 0, 1, 0, 0],
                [ 0, 0, 1, 0],
                [ 0, 0, 0, 1],
                ]
        }
        this.matrixScale = (s = 1) => {
            return [
                [ s, 0, 0, 0],
                [ 0, s, 0, 0],
                [ 0, 0, s, 0],
                [ 0, 0, 0, 1],
            ]
        }
        this.matrixScaleXYZ = (sx = 1, sy = 1, sz = 1)=> {
            return [
                [ sx, 0, 0, 0],
                [ 0, sy, 0, 0],
                [ 0, 0, sz, 0],
                [ 0, 0, 0, 1],
            ]
        }
        this.matrixScaleX = (sx = 1) => {
            return [
                [ sx, 0, 0, 0],
                [ 0, 1, 0, 0],
                [ 0, 0, 1, 0],
                [ 0, 0, 0, 1],
            ]
        }
        this.matrixScaleY = (sy = 1) => {
            return [
                [ 1, 0, 0, 0],
                [ 0, sy, 0, 0],
                [ 0, 0, 1, 0],
                [ 0, 0, 0, 1],
            ]
        }
        this.matrixScaleZ = (sz = 1) => {
            return [
                [ 1, 0, 0, 0],
                [ 0, 1, 0, 0],
                [ 0, 0, sz, 0],
                [ 0, 0, 0, 1],
            ]
        }
        this.matrixMoveXYZ = (dx = 0, dy = 0, dz = 0) => {
            return [
                [ 1, 0, 0, dx],
                [ 0, 1, 0, dy],
                [ 0, 0, 1, dz],
                [ 0, 0, 0, 1],
            ]
        }
        this.matrixMoveX = (dx = 0) => {
            return [
                [ 1, 0, 0, dx],
                [ 0, 1, 0, 0],
                [ 0, 0, 1, 0],
                [ 0, 0, 0, 1],
            ]
        }
        this.matrixMoveY = (dy = 0) => {
            return [
                [ 1, 0, 0, 0],
                [ 0, 1, 0, dy],
                [ 0, 0, 1, 0],
                [ 0, 0, 0, 1],
            ]
        }
        this.matrixMoveZ = (dz = 0) => {
            return [
                [ 1, 0, 0, 0],
                [ 0, 1, 0, 0],
                [ 0, 0, 1, dz],
                [ 0, 0, 0, 1],
            ]
        }
        this.matrixRotateX = (a = 0) => {
            let c = Math.cos(a);
            let s = Math.sin(a);
            return [
                [ 1, 0, 0, 0],
                [ 0, c,-s, 0],
                [ 0, s, c, 0],
                [ 0, 0, 0, 1],
            ]
        }
        this.matrixRotateY = (a = 0) => {
            let c = Math.cos(a);
            let s = Math.sin(a);
            return [
                [ c, 0, s, 0],
                [ 0, 1, 0, 0],
                [-s, 0, c, 0],
                [ 0, 0, 0, 1],
            ]
        }
        this.matrixRotateZ = (a = 0) => {
            let c = Math.cos(a);
            let s = Math.sin(a);
            return [
                [ c,-s, 0, 0],
                [ s, c, 0, 0],
                [ 0, 0, 1, 0],
                [ 0, 0, 0, 1],
            ]
        }
        this.matrixPoectionXY = () => {
            return [
                [ 1, 0, 0, 0],
                [ 0, 1, 0, 0],
                [ 0, 0, 0, 0],
                [ 0, 0, 0, 1],
            ]
        }
        this.matrixPoectionYZ = () => {
            return [
                [ 0, 0, 0, 0],
                [ 0, 1, 0, 0],
                [ 0, 0, 1, 0],
                [ 0, 0, 0, 1],
            ]
        }
        this.matrixPoectionXZ = () => {
            return [
                [ 1, 0, 0, 0],
                [ 0, 0, 0, 0],
                [ 0, 0, 1, 0],
                [ 0, 0, 0, 1],
            ]
        }
        this.matrixPerspective = (a) => {
            return [
                [ 1, 0, 0, 0],
                [ 0, 1, 0, 0],
                [ 0, 0, 1, 1],
                [ 0, 0, a, 1],
            ]
        }
    }
    scale( vertex , s ) {
        let matrix = this.matrixScale(s)
        let vertex_out = []
        for (let i = 0; i < vertex.length; i++) {
            vertex_out[i] = multiple( matrix , vertex[i] )         
        }
        return vertex_out        
    }
    moveXYZ( vertex , dx , dy , dz ) {
        let matrix = this.matrixMoveXYZ( dx , dy , dz )
        let vertex_out = []
        for (let i = 0; i < vertex.length; i++) {
            vertex_out[i] = multiple( matrix , vertex[i] )         
        }
        return vertex_out        
    }







    scaleXYZ( vertex , sx , sy , sz ) {
        let matrix = this.matrixScaleXYZ(sx = 1, sy = 1, sz = 1)
        let vertex_out = []
        for (let i = 0; i < vertex.length; i++) {
            vertex_out[i] = multiple( matrix , vertex[i] )        
        }
        return vertex_out        
    }
    rotateX( vertex , s ) {
        let matrix = this.matrixRotateX(s)
        let vertex_out = []
        for (let i = 0; i < vertex.length; i++) {
            vertex_out[i] = multiple( matrix , vertex[i] )           
        }
        return vertex_out        
    }
    rotateY( vertex , s ) {
        let matrix = this.matrixRotateY(s)
        let vertex_out = []
        for (let i = 0; i < vertex.length; i++) {
            vertex_out[i] = multiple( matrix , vertex[i] )           
        }
        return vertex_out       
    }
    rotateZ( vertex , s ) {
        let matrix = this.matrixRotateZ(s)
        let vertex_out = []
        for (let i = 0; i < vertex.length; i++) {
            vertex_out[i] = multiple( matrix , vertex[i] )           
        }
        return vertex_out        
    }
    perspective( vertex , s ) {
        let matrix_1 = this.matrixPerspective(s)
        let matrix_2 = []
        let vertex_out = []
        for (let i = 0; i < vertex.length; i++) {
            vertex_out[i] = multiple( matrix_1 , vertex[i] )
            matrix_2 = this.matrixScale( 1 / vertex_out[i][3])
            vertex_out[i] = multiple( matrix_2 , vertex_out[i])                        
        }
        return vertex_out        
    }
}