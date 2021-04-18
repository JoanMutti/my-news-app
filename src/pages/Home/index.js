import ListOfNews from '../../components/ListOfNews'
import { useNews } from '../../hooks/useNews'

export default function Home() {
	const { loading, news } = useNews({ keyword: 'cryptocurrency' })

	return <>{loading ? <h3>Cargando...</h3> : <ListOfNews news={news} />}</>
}
