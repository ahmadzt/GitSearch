import React from 'react';

function SearchResultList(props) {
    
    return (
        <div className="border-t py-4">
            <div className="flex pb-4">
                <div className="w-3/5">
                    <div className="w-2/3 p-2 bg-gray-300"></div>
                </div>
                <div className="w-1/5 flex items-center">
                    <div className="p-2 mr-1 bg-gray-300"></div>
                    {/* <Octicon icon={ primitiveDot } className="mr-1"/> */}
                    <div className="w-1/2 p-2 bg-gray-300"></div>
                </div>
                <div className="w-1/5 flex items-center">
                    {/* <Octicon icon={ star } className="mr-1"/> */}
                    <div className="p-2 mr-1 bg-gray-300"></div>
                    <div className="w-1/2 p-2 bg-gray-300"></div>
                </div>
            </div>
            <div className="w-2/3 p-2 mb-8 bg-gray-300"></div>
            <div className="w-1/5 p-2 mr-1 bg-gray-300"></div>
        </div>
    )
}

export default SearchResultList
