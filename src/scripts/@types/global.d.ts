declare interface Project {
	readonly id: string;
	name: string;
	techStack: string[];
	isCompleted: boolean;
}

declare interface Developer {
	readonly id: string;
	name: string;
	age: number;
	isEmployed: boolean;
	skills: string[];
	projects: Project[];
	experience: number;
}

type Developers = Developer[];

type RemoveDeveloperByConditionType = {
	devs: Developer[];
	callbackCondition: (developer: Developer, ...args: any[]) => boolean;
	args?: any[];
};
