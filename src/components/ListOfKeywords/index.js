import { Link } from 'wouter'

export default function ListOfKeywords({ keywords }) {
	return (
		<div className='keywords-list'>
			{keywords.map((keyword) => (
				<Link to={`/:keyword`} className='keyword'>
					{keyword}
				</Link>
			))}
		</div>
	)
}
