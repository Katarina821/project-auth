import React from 'react'
import {useState, useEffect} from "react"

const query = `
{
  quotesCollection {
    items {
      quote 
      picJewellery {
        url}   
      }
    }
}
`

const Wrapper = () => {

  const [page, setPage] = useState(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/jr0jxguam2zu`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: "Bearer 1L0ItEipUTZIrkd5xqFQZc-cvQWiG3OODISyJdqFLmA",
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setPage(data.quotesCollection.items[0]);
      });
  }, []);

  if (!page) {
    return "Loading...";
  }
  return (
    <div className="App">
    <header className="App-header">
    
      <p>{page.quote}</p>
      <img src={page.picJewellery.url} className="App-logo" alt="logo" />
    </header>
  </div>
  )
}

export default Wrapper