import React from 'react'

function CardTitle(props) {
    return (
        <div className="flex mb-4">
            <h2>{ props.title }</h2>
            <div className="flex-1 relative ml-4">
                <span className="absolute w-full left-0 border-t border-gray-400 top-50"></span>
            </div>
        </div>
    )
}

export default CardTitle
