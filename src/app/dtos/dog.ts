import { Personality } from "./personality";

export interface Dog {
    id?:number, 
    name:string, 
    age:number, 
    breed:string, 
    personalityIds: number[],
    personalities?: Personality[],  
    ownerId?: number
}
