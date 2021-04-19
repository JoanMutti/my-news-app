import { useEffect, useState } from 'react'
import getNews from '../services/getNews'
import deleteDuplicate from '../services/deleteDuplicate'

export function useNews({ keyword }) {
	const [loading, setLoading] = useState(false)
	const [news, setNews] = useState([])

	useEffect(() => {
		setLoading(true)

		getNews({ keyword }).then((news) => {
			const uniqueNews = deleteDuplicate({ news })
			setNews(uniqueNews)
			setLoading(false)
			localStorage.setItem(`${keyword}`, JSON.stringify(uniqueNews))
		})
	}, [keyword])

	return { loading, news }
}
