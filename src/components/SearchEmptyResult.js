import React from 'react';
import Octicon, { search } from 'octicons-react';

function SearchEmptyResult(props) {
    return (
        <div className="py-4 flex flex-col justify-center items-center">
            <Octicon icon={ search } className="opacity-50 svg-lg mb-4"/>
            <h2 className="font-bold">We couldn’t find any repositories matching "{ props.searchKey }"</h2>
        </div>
    )
}

export default SearchEmptyResult
