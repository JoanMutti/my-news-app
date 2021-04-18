import './App.css'
import { Route } from 'wouter'
import Home from './pages/Home'
import Header from './components/Header'
import searchResults from './pages/searchResults'

function App() {
	const keywords = ['criptocurrency', 'bussiness', 'tech']

	return (
		<div className='App'>
			<section className='App-content'>
				<Header keywords={keywords} />
				<Route path='/' component={Home} />
				<Route path='/search/:keyword' component={searchResults} />
			</section>
		</div>
	)
}

export default App
