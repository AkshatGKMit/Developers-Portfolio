export function validateProject(project: Partial<Project>): boolean {
	const { name, techStack } = project;

	if (!name) {
		alert("Project name is required");
		return false;
	}

	if (!techStack || techStack.length < 2) {
		alert("At least two technologies are required for a project");
		return false;
	}

	if (!techStack.some((tech) => tech.toLowerCase().includes("git"))) {
		alert("Tech stack must contain git");
		return false;
	}

	return true;
}

export function countCompletedProjects(developer: Developer): number {
	const count = developer.projects.reduce((total, { isCompleted }) => (total += isCompleted ? 1 : 0), 0);
	return count;
}

export function listProjects(developer: Developer): string[] {
	const projectNames: string[] = developer.projects.map((project) => project.name);
	return projectNames;
}
