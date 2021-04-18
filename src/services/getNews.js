import formatDate from './formatDate'

const apiKey = 'a77aca884fb1429b9b00cb4525e0e5cd'

export default function getNews({ keyword = 'cryptocurrency' } = {}) {
	const unDate = new Date(Date.now()).toLocaleDateString()
	const today = formatDate(unDate)

	const apiURL = `https://newsapi.org/v2/everything?q=${keyword}&from=${today}&sortBy=relevancy&pageSize=30&apiKey=${apiKey}`

	return fetch(apiURL)
		.then((res) => res.json())
		.then((response) => {
			const { articles } = response
			return articles
		})
}
