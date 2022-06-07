import { Ingredient } from "./ingredient";

export class Potion {

  constructor(
    public id: string,
    public name: string,
    public effect: string,
    public sideEffects: string,
    public characteristics: boolean,
    public time: string,
    public difficulty: string,
    public ingredients: Ingredient[],
    public inventors: string[],
    public manufacturer: string) { }
}
