import React from 'react'
import './search.styles.css'
export const Search = ({ placeholder, searchChange }) => {
	return (
		<input
			type='search'
			className='search'
			placeholder={placeholder}
			onChange={searchChange}
		></input>
	)
}
