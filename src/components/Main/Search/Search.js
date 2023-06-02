import React from 'react';

function Search() {
    return (
        <section className="search__section">
            <form className="search__form">
                <input 
                    required 
                    className="search__window"
                    type="text"
                    placeholder="&#128269; Please enter first name/family name/occupation"
                    id="search-input"
                    name="search-input"
                />
                <button 
                    type="submit"
                    className="search__button"
                >Find</button>
            </form>
        </section>
    )
}

export default Search;