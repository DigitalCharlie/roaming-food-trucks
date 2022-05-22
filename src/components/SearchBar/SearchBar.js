import { useEffect, useState } from "react"
import Select from "react-select"
import { useSearchParams, useNavigate } from "react-router-dom"
import styles from './SearchBar.module.css';

export default function SearchBar() {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const [formData, setFormData] = useState({
        zipcode: '',
        cuisine: '',
        radius:5
    })
    const [selectedOption, setSelectedOption] = useState({ value: searchParams.get("cuisine"), label: searchParams.get("cuisine") })
    const cuisineOptions = [
        { value: "american", label: "american", },
        { value: "chinese", label: "chinese" },
        { value: "japanese", label: "japanese" },
        { value: "mediterranean", label: "mediterranean" },
        { value: "thai", label: "thai" },
        { value: "indian", label: "indian" },
        { value: "filipino", label: "filipino" },
        { value: "french", label: "french" },
        { value: "haitian", label: "haitian" },
        { value: "cuban", label: "cuban" },
        { value: "tex-mex", label: "tex-mex" },
        { value: "vietnamese", label: "vietnamese" },
        { value: "mexican", label: "mexican" },
        { value: "korean", label: "korean" },
        { value: "soul food", label: "soul food" },
        { value: "polish", label: "polish" },
        { value: "ethiopian", label: "ethiopian" },
        { value: "greek", label: "greek" },
        { value: "asian-fusion", label: "asian-fusion" },
        { value: "nigerian", label: "nigerian" }
    ]

    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }

    const handleSelect = (evt) => {
        setFormData({ ...formData, cuisine: evt.value })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        setSearchParams(formData)
        console.log(formData)
        navigate(`/foodtruck/resultspage?zipcode=${formData.zipcode}&cuisine=${formData.cuisine}&radius=5`)
    }
    useEffect(() => {
        setFormData({ zipcode: searchParams.get("zipcode"), cuisine: searchParams.get("cuisine") })
    }, [])
    console.log(formData)
    return (
        <div className={styles.searchbar}>
            <form className={styles.form} >
                <input type="text" onChange={handleChange} name="zipcode" value={formData.zipcode} placeholder="Location" className={styles.input} required>
                </input>
                <Select 
                    className={styles.input}
                    defaultValue={selectedOption}
                    onChange={(e) => { handleSelect(e) }}
                    options={cuisineOptions}
                    name="cuisine"
                    placeholder="Cuisine"
                    isSearchable
                    isClearable
                />
             <button type="submit" onClick={handleSubmit} alt="search-icon"><img src="/assets/search_circle_icon.png" /></button>
            </form>
        </div> 
    )
}
