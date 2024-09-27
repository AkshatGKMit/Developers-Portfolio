export function validateDeveloper(dev: Partial<Developer>): boolean {
	const { name, age, isEmployed, experience, skills } = dev;

	if (!name || typeof name !== "string" || name === "") {
		alert("Invalid developer's name");
		return false;
	}

	if (name === "") {
		alert("Developer name cannot be empty");
		return false;
	}

	if (!age || typeof age !== "number") {
		alert("Invalid developer's age");
		return false;
	}

	if (age < 10) {
		alert("Developer age cannot be less than 10");
	}

	if (isEmployed && age < 14) {
		alert("Developer below age 14 cannot be employed.\n!!Child Labour!!");
		return false;
	}

	if (experience === undefined || experience > age - 10) {
		alert("Invalid developer experience");
		return false;
	}

	if (!skills || skills.length < 2) {
		alert("Developer must have atleast 2 skills");
		return false;
	}

	return true;
}

export function generateId<T extends { id: string }>(list: T[]): string {
	let isIdUnique = false;
	let id: number;

	do {
		const randNum = Math.random();
		const fiveDigitNum = Math.floor(10000 + randNum * 90000);
		id = fiveDigitNum;

		const idIndex = list.findIndex((item: T) => fiveDigitNum.toString() === item.id);

		isIdUnique = idIndex === -1;
	} while (!isIdUnique);

	return id.toString();
}

export function removeDevsByAge({ age }: Developer): boolean {
	return age < 15;
}

export function removeDevsByIncompleteProject({ projects }: Developer): boolean {
	return projects.reduce((total, { isCompleted }) => (total += isCompleted ? 0 : 1), 0) > 1;
}

export function removeDevsBySkill({ skills }: Developer): boolean {
	return skills.map((skill) => skill.toLowerCase()).indexOf("git") === -1;
}

export function removeDevsByExperienceAndProjects({ experience, projects }: Developer): boolean {
	return experience >= 3 && projects.length < 2;
}
