import React from 'react';
import moment from 'moment';
import Octicon, { star, primitiveDot } from 'octicons-react';

function SearchResultList(props) {
    let languageIcon, language;
    let starIcon, stars;
    
    if (props.item.language) {
        languageIcon = <Octicon icon={ primitiveDot } className="mr-1"/>;
        language = props.item.language;
    }
    
    if (props.item.stargazers_count) {
        starIcon = <Octicon icon={ star } className="mr-1"/>;
        stars = props.item.stargazers_count;
    }

    return (
        <div className="border-t py-4">
            <div className="flex pb-4">
                <div className="w-3/5">
                    <a 
                        href={ props.item.html_url } 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-bold text-blue-600">{ props.item.full_name }</a>
                </div>
                <div className="w-1/5 flex items-center">
                    { languageIcon } { language }
                </div>
                <div className="w-1/5 flex items-center">
                    { starIcon } { stars }
                </div>
            </div>
            <div className="mb-4">{props.item.description}</div>
            <small>Updated on { moment(props.item.updated_at).format("ddd MMM D YYYY") }</small>
        </div>
    )
}

export default SearchResultList
