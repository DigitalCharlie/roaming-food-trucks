import SearchBar from "../SearchBar/SearchBar"

import styles from './SearchBox.module.css';

export default function SearchBox () {
	return (
		<div className={styles.SearchBox}>
			<h1>Food Truck Tag Line</h1>
			<SearchBar />
		</div>
	)
}