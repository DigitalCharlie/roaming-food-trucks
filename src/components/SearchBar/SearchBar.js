import { useState } from "react"
import Select from "react-select"

export default function SearchBar() {
    const [selectedOption] = useState(null)
    const [formData, setFormData] = useState({
        zipcode: '',
        cuisine: ''
    })
    const cuisineOptions = [
        { value: "american", label: "American", name: 'cuisine' },
        { value: "chinese", label: "Chinese" },
        { value: "japanese", label: "Japanese" },
        { value: "mediteranean", label: "Mediteranean" },
        { value: "thai", label: "Thai" },
        { value: "indian", label: "Indian" },
        { value: "filipino", label: "Filipino" },
        { value: "french", label: "French" },
        { value: "haitian", label: "Haitian" },
        { value: "cuban", label: "Cuban" },
        { value: "tex-mex", label: "Tex-Mex" },
        { value: "vietnamese", label: "Vietnamese" },
        { value: "mexican", label: "Mexican" },
        { value: "korean", label: "Korean" },
        { value: "soul food", label: "Soul Food" },
        { value: "polish", label: "Polish" },
        { value: "ethiopian", label: "Ethiopian" },
        { value: "greek", label: "Greek" },
        { value: "asian-fusion", label: "Asian-Fusion" },
        { value: "nigerian", label: "Nigerian" }
    ]

    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }

    const handleSelect = (evt) => {
        setFormData({ ...formData, cuisine: evt.value })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        console.log(formData)
    }

    return (
        <div>
            <form>
                <input type="text" onChange={handleChange} name="zipcode" value={formData.zipcode} placeholder="Location">
                </input>
                <Select
                    defaultValue={selectedOption}
                    onChange={(e) => { handleSelect(e) }}
                    options={cuisineOptions}
                    name="cuisine"
                    placeholder="Cuisine"
                    isSearchable
                    isClearable
                />
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
