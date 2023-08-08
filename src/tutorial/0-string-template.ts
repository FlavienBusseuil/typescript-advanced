export type Hello<Name extends string> = `Hello ${Name}`;

export const helloRoxanne: Hello<"Roxanne"> = "Hello Roxanne";

export type Dev =
	| "Anaïs"
	| "Aurélien"
	| "Flavien"
	| "Hortense"
	| "Leny"
	| "Maxime"
	| "Roxanne";

export const helloDev: Hello<Dev> = "Hello Flavien";
