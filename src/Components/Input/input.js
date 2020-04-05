import React from 'react';
import './input.css';

const SearchInput = ({ search, onInputChange, onFormSubmit}) => {
    return (
        <div id='search-input-segment' className="search-input ui segment">
            <form className="ui form" onSubmit={onFormSubmit} >
                <div className="field">
                    <label id='input-label'>Video Search</label>
                    <input
                        type="text"
                        onChange={e => onInputChange(e.target.value)}
                        value={search} />
                </div>
            </form>
        </div>
    )
};

export default SearchInput;
