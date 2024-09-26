import { validateDeveloper, generateId } from "./helpers/index.js";

const developers: Developer[] = [];

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

function updateDeveloper(developer: Developer, updates: Partial<Developer>) {
	const { name, age, experience, isEmployed, projects, skills } = developer;

	developer.name = updates.name ?? name;
	developer.age = updates.age ?? age;
	developer.experience = updates.experience ?? experience;
	developer.isEmployed = updates.isEmployed ?? isEmployed;
	developer.projects = updates.projects ?? projects;
	developer.skills = updates.skills ?? skills;
}

function findDevelopersBySkill(matchSkill: string): Developer[] {
	const skilledDevelopers: Developer[] = developers.filter(({ skills }) => skills.indexOf(matchSkill) !== -1);
	return skilledDevelopers;
}

function addSkill(developer: Developer, newSkill: string) {
	const { name, skills } = developer;

	const isSkillPresent = skills.indexOf(newSkill) !== -1;
	if (isSkillPresent) {
		alert(`'${newSkill}' is already present in developer '${name}'`);
		return;
	}

	skills.push(newSkill);
	alert(`'${newSkill}' is added to developer '${name}'`);
}

