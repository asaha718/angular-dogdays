import { Dog } from "./dog";

export interface UserResponseDTO {
    id:number,
    username:string, 
    ownDog:boolean, 
    ownedDogs: Dog[] 
}
