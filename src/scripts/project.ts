import { generateId } from "./helpers/index.js";

export function addProject({ projects }: Developer, project: Partial<Project>) {
	const isProjectValid = validateProject(project);
	if (!isProjectValid) return;

	const validatedProject = { ...project, id: generateId(projects) };
	projects.push(validatedProject as Project);
}

export function validateProject(project: Partial<Project>): boolean {
	const { name, techStack } = project;

	if (!techStack || techStack.length < 2) {
		alert("At least two technologies are required for a project");
		return false;
	}

	if (!techStack.some((tech: string) => tech.toLowerCase().includes("git"))) {
		alert("Tech stack must contain git");
		return false;
	}

	return true;
}

export function countCompletedProjects({ projects }: Developer): number {
	const count = projects.reduce((total, { isCompleted }) => (total += isCompleted ? 1 : 0), 0);
	return count;
}

export function listProjects({ projects }: Developer): string[] {
	const projectNames: string[] = projects.map(({ name }: Project) => name);
	return projectNames;
}
