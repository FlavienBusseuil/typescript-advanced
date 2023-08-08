export const partial: Partial<{
	key1: string;
	key2: string;
}> = { key1: "test" };

export const required: Required<{
	key1?: string;
	key2?: string;
}> = {
	key1: "test",
	key2: "test",
};

export const readonly: Readonly<{ key1: string }> = {
	key1: "readonly",
};

// @ts-expect-error
readonly.key1 = "change";

export const record: Record<string, string> = {
	key: "value",
};

export const equivalent: { [key: string]: string } = {
	key: "value",
};

export const pick: Pick<
	{ key1: string; key2: string; key3: string },
	"key1" | "key2"
> = {
	key1: "value",
	key2: "value",
};

export const omit: Omit<
	{ key1: string; key2: string; key3: string },
	"key1" | "key2"
> = {
	key3: "value",
};

export const nonNullable: NonNullable<string | null | undefined> = "value"; // errors on null and undefined

export const parameters: Parameters<(arg1: string, arg2: string) => string> = [
	"arg1",
	"arg2",
];

export const returnType: ReturnType<(arg1: string, arg2: string) => string> =
	"output";

export const uppercase: Uppercase<"uppercase"> = "UPPERCASE";
export const lowercase: Lowercase<"LOWERCASE"> = "lowercase";
export const capitalize: Capitalize<"capitalize"> = "Capitalize";
export const uncapitalize: Uncapitalize<"UnCaPiTaLiZe"> = "unCaPiTaLiZe";
