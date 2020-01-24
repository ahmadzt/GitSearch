import React, {useState, useEffect} from 'react';
import ParseLink from 'parse-link-header';
import Axios from 'axios';
import Pagination from './components/Pagination';
import CardTitle from './components/CardTitle';
import SearchInput from './components/SearchInput';
import ResultList from './components/SearchResultList';
import ResultTotal from './components/SearchResultTotal';
import ResultEmpty from './components/SearchEmptyResult';

function App() {
  const [total, setTotal] = useState(0);
  const [results, setResults] = useState([]);
  const [noResult, setNoResult] = useState(false);
  const [search, setSearch] = useState("react");
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState({
    prev: {},
    next: {},
    first: {},
    last: {}
  });

  
  const searchRepo = async (params, currPage) => {
    let response = await Axios.get(`https://api.github.com/search/repositories?per_page=10&page=${ currPage }&q=${ params }`);
    let noItems = response.data.items.length > 0 ? false : true;
    let links = ParseLink(response.headers.link);

    setMeta({...meta, ...links});
    setTotal(response.data.total_count);
    setResults(response.data.items);
    setNoResult(noItems);
  }

  const updateOnSubmit = (e) => {
    if (!search) return;
    e.preventDefault();

    window.location.search = `?q=${ search }`;
    searchRepo(search, page);
  } 

  const updateOnSearch = (e) => {
    setSearch(e.target.value);
  }

  const getUrlParam = () => {
    let url = new URL(window.location.href);
    return url.searchParams.get("q");
  }

  useEffect(() => {
    let param = getUrlParam() 
      ? getUrlParam() 
      : search;

    setSearch(param);
    searchRepo(param, page);
    /* eslint-disable-next-line */
  }, [page]);

  return (
    <div className="w-full flex justify-center p-5" >
      <div className="w-3/4 md:w-2/4">
        <CardTitle title="GitHub Search"/>
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
          <div className="flex justify-center">
            <Pagination 
              meta={ meta }
              navigate={(e) => setPage(e)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
