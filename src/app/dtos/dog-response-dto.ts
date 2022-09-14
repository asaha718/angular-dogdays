import { DogOwner } from "./dog-owner";
import { Personality } from "./personality";

export interface DogResponseDto {
    id: number,
    name: string,
    age: number,
    breed: string,
    owner:DogOwner, 
    personalities: Personality[]
}
