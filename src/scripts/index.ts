import { validateDeveloper, generateId } from "./helpers/index.js";

let developers: Developer[] = [];

function addDeveloper(developer: Partial<Developer>) {
	const isDevValidated = validateDeveloper(developer);
	if (isDevValidated) {
		const validatedDev: Developer = {
			...developer,
			id: generateId(developers),
		} as Developer;
		developers.push(validatedDev);

		alert(`Developer ${developer.name} added`);
	}
}

function cloneDeveloper(developer: Developer): Developer {
	const deepCopy: Developer = JSON.parse(JSON.stringify(developer));
	return deepCopy;
}
