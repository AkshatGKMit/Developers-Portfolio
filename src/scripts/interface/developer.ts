import IProject from "./project";

interface IDeveloper {
	readonly name: string;
	readonly age: number;
	isEmployed: boolean;
	skills: string[];
	projects: IProject[];
	experience: number;

	addSkill(skill: string): void;
	updateSkill(oldSkill: string, newSkill: string): void;
	addProject(project: IProject): void;
	// addProperty(): void; //!: What to do in this
	cloneDeveloper(developer: IDeveloper): IDeveloper;
	listProjects(): string[];
	countCompletedProjects(): number;
	listSkills(): string[];
	updateDeveloper(developer: IDeveloper): IDeveloper;
}

export default IDeveloper;
