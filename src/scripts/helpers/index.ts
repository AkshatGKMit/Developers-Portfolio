export function validateDeveloper(dev: Partial<Developer>): boolean {
	const { name, age, isEmployed, experience, skills } = dev;

	if (!name) {
		alert("Invalid developer's name");
		return false;
	}

	if (!age) {
		alert("Invalid developer's age");
		return false;
	}

	if (age < 10) {
		alert("Developer age cannot be less than 10");
		return false;
	}

	if (age > 54) {
		alert("Developer age cannot be more than 54");
		return false;
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

export function isValueNumber(value: any): boolean {
	return typeof value === "number";
}

export function removeDevsByAge({ age }: Developer, baseAge: number): boolean {
	if (!isValueNumber(baseAge)) baseAge = 15;
	return age < baseAge;
}

export function removeDevsByIncompleteProject({ projects }: Developer, projectsNumber: number): boolean {
	if (!isValueNumber(projectsNumber)) projectsNumber = 1;
	return projects.reduce((total, { isCompleted }) => (total += isCompleted ? 0 : 1), 0) > projectsNumber;
}

export function removeDevsBySkill({ skills }: Developer, skill: string): boolean {
	if (typeof skill !== "string") skill = "react";
	return skills.map((skill) => skill.toLowerCase()).indexOf(skill.toLowerCase()) !== -1;
}

export function removeDevsByExperienceAndProjects({ experience, projects }: Developer, minExperience: number, projectLength: number): boolean {
	if (!isValueNumber(minExperience)) minExperience = 2;
	if (!isValueNumber(projectLength)) projectLength = 1;

	return experience >= minExperience && projects.length < projectLength;
}
