import { validateDeveloper, generateId, deepClone } from "./helpers/index.js";

export function addDeveloper(developers: Developers, developer: Partial<Developer>) {
	const isDevValidated = validateDeveloper(developer);

	if (isDevValidated) return;

	const validatedDev = {
		...developer,
		id: generateId(developers),
	};
	developers.push(validatedDev as Developer);

	alert(`Developer ${developer.name} added`);
}

export function cloneDeveloper(developer: Developer, developers?: Developers): Developer {
	const { id } = developer;
	const deepCopy: Developer = {
		...deepClone(developer),
		id: developers ? generateId(developers) : id,
	};

	return deepCopy;
}

export function updateDeveloper(developer: Developer, updates: Partial<Developer>): Developer {
	const clonedDev = cloneDeveloper(developer);
	const { name, age, experience, isEmployed, projects, skills } = clonedDev || {};

	clonedDev.name = updates.name ?? name;
	clonedDev.age = updates.age ?? age;
	clonedDev.experience = updates.experience ?? experience;
	clonedDev.isEmployed = updates.isEmployed ?? isEmployed;
	clonedDev.projects = updates.projects ?? projects;
	clonedDev.skills = updates.skills ?? skills;

	return clonedDev;
}

export function findDevelopersBySkill(developers: Developers, matchSkill: string): Developers {
	const skilledDevelopers: Developer[] = developers.filter(({ skills }) => skills.some((skill) => skill.toLowerCase() === matchSkill.toLowerCase()));

	return skilledDevelopers;
}

export function addSkill(developer: Developer, newSkill: string) {
	const { name, skills } = developer;

	const isSkillPresent = skills.indexOf(newSkill) !== -1;
	if (isSkillPresent) {
		alert(`'${newSkill}' is already present in developer '${name}'`);
		return;
	}

	skills.push(newSkill);
	alert(`'${newSkill}' is added to developer '${name}'`);
}

export function updateSkill(developer: Developer, oldSkill: string, newSkill: string): Developer | undefined {
	const cloneDev = JSON.parse(JSON.stringify(developer));
	const { name, skills } = cloneDev;

	oldSkill = oldSkill.toLowerCase();
	newSkill = newSkill.toLowerCase();

	const oldSkillIndex = skills.map((skill: string) => skill.toLowerCase()).indexOf(oldSkill);
	if (oldSkillIndex === -1) {
		alert(`'${oldSkill}' is not present in developer '${name}'`);
		return;
	}

	const isNewSkillIndex = skills.map((skill: string) => skill.toLowerCase()).indexOf(newSkill) !== -1;
	if (isNewSkillIndex) {
		alert(`'${oldSkill}' is already present in developer '${name}'`);
		return;
	}

	alert(`'${oldSkill}' is updated to '${newSkill}' for developer ${name}`);
	skills[oldSkillIndex] = newSkill;

	return cloneDev;
}

export function removeDeveloperByCondition({ devs, callbackCondition, args = [] }: RemoveDeveloperByConditionType): Developers {
	return devs.filter((developer) => !callbackCondition(developer, ...args));
}

export function sortDevelopersByEmploymentAndAge(developers: Developers, sortByAgeAscending: boolean): Developers {
	const sortedDevs = developers.sort((firstDev: Developer, secondDev: Developer) => {
		if (firstDev.isEmployed && secondDev.isEmployed) {
			return sortByAgeAscending ? firstDev.age - secondDev.age : secondDev.age - firstDev.age;
		}

		return firstDev.isEmployed ? -1 : 1;
	});

	return sortedDevs;
}

export function addProperty<T extends object, K extends keyof any>(object: T, key: K, value: any): T {
	return { ...object, [key]: value };
}
