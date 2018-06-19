// Prioritized list of what order structures should be built in
export const BuildPriorities: BuildableStructureConstant[] = [
	STRUCTURE_SPAWN,
	STRUCTURE_CONTAINER,
	STRUCTURE_TOWER,
	STRUCTURE_EXTENSION,
	STRUCTURE_STORAGE,
	STRUCTURE_TERMINAL,
	STRUCTURE_LINK,
	STRUCTURE_EXTRACTOR,
	STRUCTURE_LAB,
	STRUCTURE_NUKER,
	STRUCTURE_OBSERVER,
	STRUCTURE_POWER_SPAWN,
	STRUCTURE_WALL,
	STRUCTURE_RAMPART,
	STRUCTURE_ROAD,
];

// Prioritized list of what order enemy structures should be attacked in
export const AttackStructurePriorities: BuildableStructureConstant[] = [
	STRUCTURE_SPAWN,
	STRUCTURE_TOWER,
	STRUCTURE_EXTENSION,
	STRUCTURE_LINK,
	STRUCTURE_LAB,
	STRUCTURE_NUKER,
	STRUCTURE_OBSERVER,
	STRUCTURE_EXTRACTOR,
	STRUCTURE_POWER_SPAWN,
	STRUCTURE_CONTAINER,
	STRUCTURE_ROAD,
	STRUCTURE_STORAGE,
	STRUCTURE_TERMINAL,
	STRUCTURE_RAMPART,
	STRUCTURE_WALL,
];


