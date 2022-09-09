import { Personality } from "./personality";
import { UserResponseDTO } from "./user-response-dto";

export interface Dog {
    id:number, 
    name:string, 
    age:number, 
    breed:string, 
    personalities?: Personality[], 
    owner?: UserResponseDTO
}
