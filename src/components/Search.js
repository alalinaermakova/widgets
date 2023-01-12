import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('stray kids');
    // u can leave it as an empty string, but embrace term in
    // srsearch in curly braces
    const [results, setResults] = useState([]);
    // make an empty array bc we dont have any results for now

    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                    // u can embrace term in curly braces to avoid error
                },
            });
            //use data to update results piece of state
            setResults(data.query.search)
        };
        
        if (term && !results.length) {
            search();
        } else {
            const timeoutId = setTimeout(() => {
                if(term) {
                    search()
                }
            }, 1000);
    
            return () => {
                clearTimeout(timeoutId)
            };
        }
        // eslint-disable-next-line
    }, [term]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    className="ui button">Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        )
    })

    // is a toy app so I used dangerouslySetInnerHtml for wikipedia to show results properly

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                    value={term}
                    onChange={(e)=> setTerm(e.target.value)}
                    className="input" 
                    />
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    )
}

export default Search;