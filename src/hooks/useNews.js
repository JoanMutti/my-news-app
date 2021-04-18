import { useEffect, useState } from 'react'
import getNews from '../services/getNews'
import deleteDuplicate from '../services/deleteDuplicate'

export function useNews({ keyword }) {
	const [loading, setLoading] = useState(false)
	const [news, setNews] = useState([])

	useEffect(() => {
		setLoading(true)

		getNews({ keyword }).then((news) => {
			setNews(deleteDuplicate({ news }))
			setLoading(false)
			localStorage.setItem(`${keyword}`, JSON.stringify(news))
		})
	}, [keyword])

	return { loading, news }
}
