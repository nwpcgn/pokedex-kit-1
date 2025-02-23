export const load = async ({ fetch }) => {
	const resourceUrl = `/data/pokeDb.json`
	const res = await fetch(resourceUrl)
	const daten = await res.json()

	if (res.ok) {
		return {
			status: res.status,
			...daten
		}
	}

	return {
		status: res.status,
		error: new Error(`Could not load url`)
	}
}
