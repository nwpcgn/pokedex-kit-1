export const typeColor = {
	Normal: '#A8A878',
	Fire: '#F08030',
	Water: '#6890F0',
	Electric: '#F8D030',
	Grass: '#78C850',
	Ice: '#98D8D8',
	Fighting: '#C03028',
	Poison: '#A040A0',
	Ground: '#E0C068',
	Flying: '#A890F0',
	Psychic: '#F85888',
	Bug: '#A8B820',
	Rock: '#B8A038',
	Ghost: '#705898',
	Dragon: '#7038F8',
	Dark: '#EE99AC',
	Steel: '#B8B8D0'
}

export const getTypeStyle = (key: String) => {
	const color = typeColor[key] ? typeColor[key] : '#fefefe'
	const style = `background-color: ${color};`
	return style
}
