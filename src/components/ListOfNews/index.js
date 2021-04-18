import New from '../New'
import './styles.css'

export default function ListOfNews({ news }) {
	return (
		<div className='ListOfNews'>
			{news.map(({ author, title, description, publishedAt }) => (
				<New
					key={title}
					title={title}
					author={author}
					description={description}
					publishedAt={publishedAt.split('T')}
				/>
			))}
		</div>
	)
}
