"use strict";


let KDConduction = {id: "Conduction", type: "event", aura: "#ffff44", aurasprite: "Conduction", power: 7.0, player: true, duration: 5, enemies: true, range: 2.99, events: [
	{type: "RemoveConduction", duration: 1, trigger: "tick"},
	{type: "Conduction", power: 0.5, duration: 5, damage: "electric", aoe: 3.99, trigger: "playerTakeDamage"},
	{type: "Conduction", power: 0.5, duration: 5, damage: "electric", aoe: 3.99, trigger: "beforeDamageEnemy"},
]};

let KDDrenched = {id: "Drenched", type: "fireDamageResist", aura: "#59a0d1", aurasprite: "Drenched", power: 0.425, player: true, duration: 20, enemies: true, events: [
	{type: "RemoveDrench", duration: 1, trigger: "tick"},
	{type: "ApplyConduction", duration: 1, trigger: "tick"},
	{type: "ApplyConduction", duration: 1, trigger: "tickAfter"},
]};

let KDBurning = {id: "Burning", type: "event", aura: "#ff8933", aurasprite: "Flaming", noAuraColor: true, power: 0.5, player: true, duration: 6, enemies: true, events: [
	{type: "RemoveBurning", trigger: "tick"},
	{type: "ElementalEffect", power: 0.5, damage: "fire", trigger: "tick"},
	{type: "EchoDamage", power: 1.0, damage: "fire", damageTrigger: "stun", trigger: "beforeDamageEnemy"},
	{type: "EchoDamage", power: 1.0, damage: "fire", damageTrigger: "stun", trigger: "playerTakeDamage"},
]};

let KDDisenchant1 = {id: "Disenchant1", type: "MoveSpeed", aura: "#440088", power: -0.5, player: false, duration: 9999, enemies: true};
let KDDisenchant2 = {id: "Disenchant2", type: "AttackSlow", aura: "#440088", power: 0.5, player: false, duration: 9999, enemies: true};

let KDVolcanism = {id: "Volcanism", type: "event", aura: "#ff0000", power: 0.5, player: false, duration: 9999, enemies: true, events: [
	{type: "Volcanism", power: 4.0, damage: "fire", trigger: "beforeDamageEnemy"},
]};

let KDDrenched2 = {id: "Drenched2", type: "electricDamageResist", power: -0.35, player: true, duration: 20, enemies: true};
let KDDrenched3 = {id: "Drenched2", type: "iceDamageResist", power: -0.35, player: true, duration: 20, enemies: true};

let KDChilled = {id: "Chilled", aura: "#73efe8", type: "MoveSpeed", power: -1.0, player: true, enemies: true, duration: 2,};
let KDSlimed = {
	id: "Slimed", aura: "#dc16bc", aurasprite: "Slimed", noAuraColor: true, type: "SlimeProgress", power: 1.0, player: true, enemies: true, duration: 3, range: 0.5, hideHelpless: true, tags: ["slimed"], events: [
		{type: "RemoveSlimeWalk", duration: 1, trigger: "tick"},
		{type: "Flammable", trigger: "beforeDamageEnemy"},
		{type: "Flammable", trigger: "beforePlayerDamage"},
		{type: "ApplySlowed", duration: 1, power: -1.0, trigger: "tick"},
		{type: "ApplySlowed", duration: 1, power: -1.0, trigger: "tickAfter"},
		{type: "ApplyGlueVuln", duration: 1, power: -0.3, trigger: "tick"},
		{type: "ApplyGlueVuln", duration: 1, power: -0.3, trigger: "tickAfter"},
	]
};
let KDEncased = {
	id: "Encased", type: "SlimeProgress", power: 2.0, player: false, enemies: true, duration: 9999, range: 0.5, replaceSprite: "EncasedDoll", tags: ["encased"], events: [
		{type: "RemoveSlimeWalk", duration: 1, trigger: "tick"},
		{type: "RemoveFree", trigger: "tick"},
		{type: "ApplySlowed", duration: 1, power: -2.0, trigger: "tick"},
		{type: "ApplySlowed", duration: 1, power: -2.0, trigger: "tickAfter"},
		{type: "ApplyAttackSlow", duration: 1, power: 1.0, trigger: "tick"},
		{type: "ApplyAttackSlow", duration: 1, power: 1.0, trigger: "tickAfter"},
		{type: "ApplySilence", duration: 2, power: 1.0, trigger: "tick"},
		{type: "ApplySilence", duration: 2, power: 1.0, trigger: "tickAfter"},
		{type: "ApplyGlueVuln", duration: 1, power: -0.5, trigger: "tick"},
		{type: "ApplyGlueVuln", duration: 1, power: -0.5, trigger: "tickAfter"},
	]
};
let KDPlugged = {
	id: "Plugged", type: "Plug", power: 1.0, aura: "#dddddd", aurasprite: "Plugged", player: false, enemies: true, duration: 9999, range: 0.5, tags: ["plugged"], events: [
		{type: "Distract", power: 2.0, trigger: "tick"},
		{type: "RemoveFree", trigger: "tick"},
	]
};
let KDDoublePlugged = {
	id: "DoublePlugged", type: "Plug", power: 2.0, aura: "#dddddd", aurasprite: "DoublePlugged", player: false, enemies: true, duration: 9998, range: 0.5, tags: ["plugged"], events: [
		{type: "Distract", power: 5.0, trigger: "tick"},
		{type: "RemoveFree", trigger: "tick"},
	]
};
let KDGlueVulnLow = {
	id: "GlueVuln", type: "glueDamageResist", power: -0.3, player: true, enemies: true, duration: 1
};
let KDGlueResist = {
	id: "GlueVuln", type: "glueDamageResist", power: 0.5, player: false, enemies: true, duration: 1
};
let KDSlowed = {
	id: "Slowed", type: "MoveSpeed", power: -1.0, player: true, enemies: true, duration: 1
};
let KDAttackSlow = {
	id: "AttackSlow", type: "AttackSlow", power: 0.5, player: true, enemies: true, duration: 1
};
let KDUnsteady = {id: "Unsteady", aura: "#aa8888", type: "MoveSpeed", power: -1.0, player: true, enemies: true, duration: 1,};
let KDUnsteady2 = {id: "Unsteady2", aura: "#aa8888", type: "Armor", power: -1.0, player: true, enemies: false, duration: 3,};
let KDUnsteady3 = {id: "Unsteady3", type: "Evasion", power: -0.5, player: true, enemies: false, duration: 3,};

let KDNoChill = {id: "ChillWalk", aura: "#73efe8", type: "ChillWalk", power: -1.0, player: true, enemies: true, duration: 2,};
let KDNoChillNoAura = {id: "ChillWalk2", type: "ChillWalk", power: -1.0, player: true, enemies: true, duration: 2,};
function KDChillWalk(entity) {
	return KDEntityHasBuff(entity, "ChillWalk") || KDEntityHasBuff(entity, "ChillWalk2");
}

let KDRestraintDisarmLight = {id: "RestDisarmLight", aura: "#ff5555", type: "DisarmOnAttack", power: 3, player: false, enemies: true, duration: 9999, events: [
	{type: "RemoveRestraint", trigger: "tick"},
	{type: "ApplyDisarm", trigger: "playerAttack"},
]};

let KDBuffReference = {
	"RestraintDisarmLight": [KDRestraintDisarmLight],
	"Unsteady": [KDUnsteady, KDUnsteady2, KDUnsteady3],
	"Plugged": [KDPlugged],
	"DoublePlugged": [KDDoublePlugged],
};

let KDDisenchantSelf = {id: "DisenchantSelf", aura: "#8888ff", type: "Disenchant", power: 9.9, player: true, enemies: true, duration: 10,};