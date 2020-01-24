import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Pagination from './components/Pagination';
import SearchInput from './components/SearchInput';
import ResultList from './components/SearchResultList';
import ResultTotal from './components/SearchResultTotal';
import ResultEmpty from './components/SearchEmptyResult';

function App() {
  
  const [results, setResults] = useState([]);
  const [total, setTotal] = useState(0);
  const [noResult, setNoResult] = useState(false);
  const [search, setSearch] = useState('react');
  const [page, setPage] = useState(1);
  
  const searchRepo = async (params, currPage) => {
    if (!params) return;
    
    let response = await Axios.get(`https://api.github.com/search/repositories?per_page=10&page=${ currPage }&q=${ params }`);
    let noItems = response.data.items.length > 0 ? false : true;

    setTotal(response.data.total_count);
    setResults(response.data.items);
    setNoResult(noItems);
  }

  const updateOnSubmit = (e) => {
    e.preventDefault();
    searchRepo(search, page);
  } 

  const updateOnSearch = (e) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    searchRepo(search, page)
    /* eslint-disable-next-line */
  }, [page]);

  return (
    <div className="w-full flex justify-center p-5" >
      <div className="w-3/4 md:w-2/4">
        <h2>GitHub Search</h2>
        <div className="bg-white p-5 border">
          <form onSubmit={ updateOnSubmit }>
            <SearchInput 
              value={ search } 
              onChange={ updateOnSearch } />
          </form>
          { !noResult && <ResultTotal total={ total }/> }
          { noResult && <ResultEmpty searchKey={ search }/> }
          { !noResult && results.map(function(object, i){
            return <ResultList item={ object } key={ i } />;
          })}
          <Pagination/>
        </div>
      </div>
    </div>
  );
}

export default App;
