import {Injectable} from '@angular/core';



export interface Recipe{
    id: string;
    name: string;
    image: string;
    tags: string[];
    prepTimeMinutes: number;
}

