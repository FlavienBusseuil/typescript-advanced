import { Dev } from "./0-string-template";

export type Employee<Person> = Person extends Dev ? "Nerd" : "Human";

export const employee1: Employee<"Stephanie"> = "Human";
export const employee2: Employee<"Flavien"> = "Nerd";
