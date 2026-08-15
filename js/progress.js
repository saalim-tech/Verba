// Verba progress management

const SKILLS = [
    "listening",
    "speaking",
    "pronunciation",
    "vocabulary",
    "grammar",
    "reading",
    "writing",
    "communication"
];

export function getSkillProgress(progress, skill) {
    if (!SKILLS.includes(skill)) {
        return null;
    }

    return progress[skill] ?? 0;
}

export function updateSkillProgress(progress, skill, value) {
    if (!SKILLS.includes(skill)) {
        return progress;
    }

    progress[skill] = Math.min(Math.max(value, 0), 100);

    return progress;
}