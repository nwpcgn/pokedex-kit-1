export const load = async ({
	url,
	params,
	props,
	fetch,
	session,
	stuff,
	status,
	error
}) => {
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
