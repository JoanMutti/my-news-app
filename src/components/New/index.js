import './styles.css'

export default function New({ title, author, description, publishedAt }) {
	return (
		<div className='new'>
			<div className='dataNew'>
				<h3>{title}</h3>
				<div className='description'>
					<p>{description}</p>
				</div>
			</div>
			<div className='author-publish'>
				<p>
					Autor: {author} - {publishedAt[0].split('-')[2]}/
					{publishedAt[0].split('-')[1]} - {publishedAt[1].replace(/:\d\dZ/, '')} hs
				</p>
			</div>
		</div>
	)
}
