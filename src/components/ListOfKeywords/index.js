import { Link } from 'wouter'

export default function ListOfKeywords({ keywords }) {
	return (
		<div className='keywords-list'>
			{keywords.map((keyword) => (
				<Link
					to={`/search/${keyword.toLowerCase()}`}
					className='keyword'
					key={keyword}>
					{keyword}
				</Link>
			))}
		</div>
	)
}
