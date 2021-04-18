import ListOfNews from '../../components/ListOfNews'

export default function searchResults({ params }) {
	const { keyword } = params
	const news = JSON.parse(localStorage.getItem(keyword))

	return (
		<>
			<ListOfNews news={news} />
		</>
	)
}
