import React from 'react'

function SearchResultTotal(props) {
    const formatNumber = (value = 0) => {
        return value.toString().replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    return (
        <div className="font-lg font-bold mb-4">{ formatNumber(props.total) } repository results</div>
    )
}

export default SearchResultTotal
