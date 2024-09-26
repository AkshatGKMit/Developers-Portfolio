import { validateDeveloper, generateId } from "./helpers/index.js";

let developers: Developer[] = [];

function addDeveloper(dev: Partial<Developer>): void {
	const isDevValidated = validateDeveloper(dev);
	if (isDevValidated) {
		const validatedDev: Developer = {
			...dev,
			id: generateId(developers),
		} as Developer;
		developers.push(validatedDev);

		alert(`Developer ${dev.name} added`);
	}
}
