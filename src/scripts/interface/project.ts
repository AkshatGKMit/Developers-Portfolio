interface IProject {
	name: string;
	techStack: string[];
	isCompleted: boolean;

	addTechStack(newTechStack: string): void;
	removeTechStack(techStack: string): void;
	changeStatus(status: boolean): void;
}

export default IProject;
