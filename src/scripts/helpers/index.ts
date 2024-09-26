export function validateDeveloper(dev: Partial<Developer>): boolean {
	const { name, age, isEmployed, experience, skills } = dev;

	if (!name || typeof name !== "string" || name === "") {
		alert("Invalid developer's name");
		return false;
	}

	if (name === "") {
		alert("Developer name cannot be empty");
		return false;
	}

	if (!age || typeof age !== "number") {
		alert("Invalid developer's age");
		return false;
	}

	if (age < 10) {
		alert("Developer age cannot be less than 10");
	}

	if (isEmployed && age < 14) {
		alert("Developer below age 14 cannot be employed.\n!!Child Labour!!");
		return false;
	}

	if (experience === undefined || experience > age - 10) {
		alert("Invalid developer experience");
		return false;
	}

	if (!skills || skills.length < 2) {
		alert("Developer must have atleast 2 skills");
		return false;
	}

	return true;
}
