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

export const fetchData = async (url: String) => {
	try {
		const res = await fetch(url)
		const data = await res.json()
		return data
	} catch (error) {
		throw new Error(error)
	}
}
export const shuffle = (array: Array) => {
	let currentIndex = array.length
	let temporaryValue, randomIndex
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex -= 1
		temporaryValue = array[currentIndex]
		array[currentIndex] = array[randomIndex]
		array[randomIndex] = temporaryValue
	}

	return array
}
export const paginate = (arr: Array, size: Number) =>
	arr.reduce((acc, val, i) => {
		let idx = Math.floor(i / size)
		let page = acc[idx] || (acc[idx] = [])
		page.push(val)

		return acc
	}, [])

export const sleep = (milliseconds = 1000) =>
	new Promise((resolve) => setTimeout(resolve, milliseconds))
