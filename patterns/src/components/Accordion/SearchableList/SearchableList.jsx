import { useState } from "react";

export default function SearchableList({ items, children }) {
    const [searchTerm, setSearchTerm] = useState('');

    const searchResults = items.filter(item => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()));

    function handleChange(event) {
        setSearchTerm(event.target.value);
    }

    return (
        <div className="searchable-list">
            <input type="text" placeholder="Search..." className="search-input" onChange={handleChange}/>
            <ul className="list">
                {searchResults.map((item, index) => (
                    <li key={index} className="list-item">{children(item)}</li>
                ))}
            </ul>
        </div>
    )
}