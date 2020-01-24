import React from 'react';
import Octicon, { search } from 'octicons-react';

function SearchInput(props) {
    return (
        <div className="flex mb-4 relative">
            <input 
                type="text" 
                value={props.value}
                onChange={e => props.onChange(e)}
                className="w-full rounded border p-2"/>
            <Octicon icon={search} className="absolute h-full right-0 mr-4 opacity-50"/>
        </div>
    )
}

export default SearchInput
