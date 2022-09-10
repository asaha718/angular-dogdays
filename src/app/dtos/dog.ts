import { DogOwner } from "./dog-owner";
import { Personality } from "./personality";

export interface Dog {
    id?:number, 
    name:string, 
    age:number, 
    breed:string, 
    personalities: Personality[], 
    owner?: DogOwner
}
