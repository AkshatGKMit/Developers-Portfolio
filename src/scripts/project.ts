export function countCompletedProjects(developer: Developer): number {
	const count = developer.projects.reduce((total, { isCompleted }) => (total += isCompleted ? 1 : 0), 0);
	return count;
}

export function listProjects(developer: Developer): string[] {
	const projectNames: string[] = developer.projects.map((project) => project.name);
	return projectNames;
}
