import { validateDeveloper, generateId, deepClone } from "./helpers/index.js";

export function addDeveloper(developers: Developers, developer: Partial<Developer>) {
	const isDevValidated = validateDeveloper(developer);
	if (!isDevValidated) return;

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
	const { id } = clonedDev;
	return { ...clonedDev, ...updates, id: id };
}

export function findDevelopersBySkill(developers: Developers, matchSkill: string): Developers {
	const skilledDevelopers: Developers = developers.filter(({ skills }) => skills.some((skill) => skill.toLowerCase() === matchSkill.toLowerCase()));

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
	const sortedDevs = developers.sort(
		({ age: firstDevAge, isEmployed: firstDevIsEmp }: Developer, { age: secondDevAge, isEmployed: secondDevIsEmp }: Developer) => {
			if (firstDevIsEmp && secondDevIsEmp) {
				return sortByAgeAscending ? firstDevAge - secondDevAge : secondDevAge - firstDevAge;
			}

			return firstDevIsEmp ? -1 : 1;
		}
	);

	return sortedDevs;
}
