import './App.css'
import { Component } from 'react'
import { CardList } from './components/card-list/card-list'
import { Search } from './components/search/Search'
import { emptyTypeAnnotation } from '@babel/types'

class App extends Component {
	constructor() {
		super()
		this.state = {
			monsters: [],
			searchField: '',
		}
	}
	//prettier-ignore
	componentDidMount() {
		fetch(`https://jsonplaceholder.typicode.com/users`)
    //returns response in JSON
    .then((response) => (response.json()))
    .then(users => this.setState({monsters: users}))
	}

	render() {
		const { monsters, searchField } = this.state
		let filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		)

		const searchChange = (event) => {
			this.setState({ searchField: event.target.value }, () =>
				console.log(this.state)
			)
		}

		return (
			<div className='App'>
				<h1>Monsters</h1>
				<Search searchChange={searchChange} placeholder='monsters' />
				<CardList monsters={filteredMonsters} />
			</div>
		)
	}
}

export default App
