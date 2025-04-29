import {Injectable} from '@angular/core';



export interface Recipe{
    id: string;
    name: string;
    image: string;
    tags: string[];
    prepTimeMinutes: number;
    difficulty?: string;
}

const a: Pick<Recipe, 'name'> = {name: 'aaa'}
//consta a: Omit<Recipe, 'name' >= {id: ''};

