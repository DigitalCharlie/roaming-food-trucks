import SearchBar from "../SearchBar/SearchBar"

import styles from './SearchBox.css';

export default function SearchBox ({notHomePage}) {
	return (
		<div className={notHomePage ? 'noResultsSearchBox' : 'SearchBox'}>
			<h2>The Roaming Spoon</h2>
			<p>Find the greatest food trucks near you. Read a review, sort out your order, and do it again.</p>
			<SearchBar buttonText={"Search"} />
		</div>
	)
}