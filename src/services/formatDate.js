export default function formatDate(date) {
	const dateSplit = date.split('/')
	const day = dateSplit[0]
	const month = dateSplit[1]
	const year = dateSplit[2]

	const formatDate = `${year}-${month}-${day}`

	return formatDate
}
