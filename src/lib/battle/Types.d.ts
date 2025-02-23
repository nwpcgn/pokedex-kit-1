export interface PkmnBattle {
	pokedex?: (Pokemon)[] | null;
	items?: (Items)[] | null;
	moves?: (Moves)[] | null;
	types?: (string)[] | null;
	fighter: FighterType;
  }
  export interface Pokemon {
	id: number;
	name: string;
	type?: (string)[] | null;
	base: Base;
  }
  export interface Base {
	HP: number;
	Attack: number;
	Defense: number;
	Sp_Attack: number;
	Sp_Defense: number;
	Speed: number;
  }
  export interface Items {
	id: number;
	name: string;
  }
  export interface Moves {
	accuracy?: number | null;
	category: string;
	id: number;
	power?: number | null;
	pp: number;
	type: string;
  }
  export interface FighterType {
	id: number;
	name: string;
	type?: (string)[] | null;
	hp: number;
	attack: number;
	defense: number;
	speed: number;
  }
  
  