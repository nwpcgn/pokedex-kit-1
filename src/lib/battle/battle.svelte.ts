import type { Pokemon, Items } from './Types'
class GameObj {
	name = $state('')
	pokedex: Pokemon[] = $state([])
	items: Items[] = $state([])
	constructor(name) {
		this.name = name
	}

	initData(array) {
		this.pokedex = array
	}
	initItems(array) {
		this.items = array
	}
}

export let game = new GameObj('Pkmn-Battle')

export class Fighter {
	id: number = $state()
	name: string = $state()
	type: string = $state([])
	hp: number = $state()
	attack: number = $state()
	defense: number = $state()
	speed: number = $state()
	constructor({id, name, type, hp, attack, defense, speed}) {
		this.id = id
		this.name = name
		this.type = type
		this.attack = attack
		this.defense = defense
		this.speed = speed
		this.hp = hp
	}
}
