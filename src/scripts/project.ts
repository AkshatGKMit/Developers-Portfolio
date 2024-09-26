export function listProjects(developer: Developer): string[] {
	const projectNames: string[] = developer.projects.map((project) => project.name);
	return projectNames;
}
