import ListOfNews from '../../components/ListOfNews'
import { useNews } from '../../hooks/useNews'
import './styles.css'

export default function Home() {
	const { news: newsCrypto } = useNews({ keyword: 'cryptocurrency' })
	const { news: newsBussiness } = useNews({ keyword: 'business' })
	const { loading, news: newsTech } = useNews({ keyword: 'tech' })

	return (
		<>
			{loading ? (
				<h3>Cargando...</h3>
			) : (
				<div>
					<h2>cryptocurrencies</h2>
					<ListOfNews news={newsCrypto.slice(0, 6)} />
					<h2>Business</h2>
					<ListOfNews news={newsBussiness.slice(0, 6)} />
					<h2>Tech</h2>
					<ListOfNews news={newsTech.slice(0, 6)} />
				</div>
			)}
		</>
	)
}
