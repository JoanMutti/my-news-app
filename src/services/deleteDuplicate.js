export default function deleteDuplicate({ news }) {
	const uniqueNews = []
	for (let i = 0; i < news.length; i++) {
		if (!uniqueNews.some((element) => news[i].title === element.title)) {
			uniqueNews.push(news[i])
		}
	}
	return uniqueNews
}
