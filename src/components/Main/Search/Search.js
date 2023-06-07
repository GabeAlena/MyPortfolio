import React from 'react';

function Search() {
    return (
        <section className="search__section">
            <form className="search__form">
                <div className="search__window">
                    <div className="search__window_picture">&#128269;</div>
                    <input 
                        required 
                        className="search__window_input"
                        type="text"
                        placeholder="Please enter first name/family name/occupation"
                        id="search-input"
                        name="search-input"
                    />
                </div>

                <button 
                    type="submit"
                    className="search__button"
                >Find</button>
            </form>
        </section>
    )
}

export default Search;