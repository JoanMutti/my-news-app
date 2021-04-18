import './styles.css'
import ListOfKeywords from '../ListOfKeywords'

export default function Header({ keywords }) {
	return (
		<header>
			<div className='header-content'>
				<h1>
					APP <em>News</em>
				</h1>
				<ListOfKeywords keywords={keywords} />
			</div>
		</header>
	)
}
