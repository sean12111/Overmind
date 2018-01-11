// // Supplier: local energy transport bot. Picks up dropped energy, energy in containers, deposits to sinks and storage
// // Used for energy collection before storage is built and mining groups spawn
//
// import {AbstractCreep, AbstractSetup} from './Abstract';
// import {profile} from '../lib/Profiler';
//
// @profile
// export class SupplierSetup extends AbstractSetup {
// 	constructor() {
// 		super('supplier');
// 		// Role-specific settings
// 		this.body.pattern = [CARRY, CARRY, MOVE];
// 	}
// }
//
// @profile
// export class SupplierCreep extends AbstractCreep {
// 	assignment: StructureController;
//
// 	constructor(creep: Creep) {
// 		super(creep);
// 	}
//
// 	// private supplyActions(): void {
// 	// 	let supplyTargets = _.map(this.colony.overseer.transportRequests.supply.haul,
// 	// 								(request: IResourceRequest) => request.target);
// 	// 	if (supplyTargets.length > 0) {
// 	// 		this.task = new TaskWithdraw(this.pos.findClosestByRange(supplyTargets));
// 	// 	}
// 	// }
// 	//
// 	// private withdrawActions(): void {
// 	// 	let withdrawTargets = _.map(this.colony.overseer.transportRequests.withdraw.haul,
// 	// 								(request: IResourceRequest) => request.target);
// 	// 	if (withdrawTargets.length > 0) {
// 	// 		this.task = new TaskWithdraw(this.pos.findClosestByRange(withdrawTargets));
// 	// 	} else if (this.room.storage) {
// 	// 		this.task = new TaskWithdraw(this.room.storage);
// 	// 	}
// 	// }
// 	//
// 	// newTask(): void {
// 	// 	this.task = null;
// 	// 	if (this.carry.energy > 0) {
// 	// 		this.supplyActions();
// 	// 	} else {
// 	// 		this.withdrawActions();
// 	// 	}
// 	// }
//
// }