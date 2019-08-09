import React from 'react'

export default function BeerDetails(props) {
    const getBeer = {id} => {
    
    let found = Countries.find(oneCountry => {
          return oneCountry.cca3 === id;
        })
  
        return found;
  
      };
    return (
        <div>
            
        </div>
    )
}
