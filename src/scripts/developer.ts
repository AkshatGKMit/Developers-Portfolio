import { validateDeveloper, generateId } from "./helpers/index.js";

export function addDeveloper(developers: Developer[], developer: Partial<Developer>) {
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

export function cloneDeveloper(developers: Developer[], developer: Developer): Developer {
	const deepCopy: Developer = JSON.parse(JSON.stringify(developer));
	return deepCopy;
}

export function updateDeveloper(developer: Developer, updates: Partial<Developer>) {
	const { name, age, experience, isEmployed, projects, skills } = developer;

	developer.name = updates.name ?? name;
	developer.age = updates.age ?? age;
	developer.experience = updates.experience ?? experience;
	developer.isEmployed = updates.isEmployed ?? isEmployed;
	developer.projects = updates.projects ?? projects;
	developer.skills = updates.skills ?? skills;
}

export function findDevelopersBySkill(developers: Developer[], matchSkill: string): Developer[] {
	const skilledDevelopers: Developer[] = developers.filter(({ skills }) => skills.indexOf(matchSkill) !== -1);
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

export function updateSkill(developer: Developer, oldSkill: string, newSkill: string) {
	const { name, skills } = developer;

	const oldSkillIndex = skills.indexOf(oldSkill);
	if (oldSkillIndex === -1) {
		alert(`'${oldSkill}' is not present in developer '${name}'`);
		return;
	}

	const isNewSkillIndex = skills.indexOf(newSkill) !== -1;
	if (isNewSkillIndex) {
		alert(`'${oldSkill}' is already present in developer '${name}'`);
		return;
	}

	alert(`'${oldSkill}' is updated to '${newSkill}' for developer ${name}`);
	skills[oldSkillIndex] = newSkill;
}

export function removeDeveloperByCondition({ devs, condition, args = [] }: RemoveDeveloperByConditionType): Developer[] {
	return devs.filter((developer) => !condition(developer, ...args));
}

export function removeDeveloperByCondition({ devs, condition }: RemoveDeveloperByConditionType): Developer[] {
	return devs.filter((developer) => !condition(developer));
}
