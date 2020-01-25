import React from 'react';
import ReactPaginate from 'react-paginate';
import Octicon, { chevronLeft, chevronRight } from 'octicons-react';

function Pagination(props) {
	return (
		<ReactPaginate
			previousLabel={<Octicon icon={ chevronLeft }/>}
			nextLabel={ <Octicon icon={ chevronRight }/> }
			breakLabel={ '...' }
			breakClassName={ 'btn' }
			pageCount={ Number(props.meta.last.page) }
			marginPagesDisplayed={ 2 }
			pageRangeDisplayed={ 5 }
			onPageChange={ (e) => props.navigate(e.selected+1) }
			containerClassName="flex items-center"
			pageClassName="btn btn-default"
			previousClassName="btn btn-default"
			nextClassName="btn btn-default"
			activeClassName={ 'active' }
		/>
	)
}

export default Pagination;
        