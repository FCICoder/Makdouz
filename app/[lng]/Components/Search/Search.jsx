'use client'
import React, { useEffect, useState } from "react";
import styles from "../Contact-link/contact.module.css";
import products from '../../Category/products.json'
import Link from "next/link";

const  Search= ({ lng }) => {
    const [data, setData] = useState([]);
    const [results, setResults] = useState([]);
    let array = [];
    useEffect(() => {
  
      if (products) {
        array = [
          ...addCategoryToItems(products.Solevants, 'Solevants'),
          ...addCategoryToItems(products.Polymers, 'Polymers'),
          ...addCategoryToItems(products['Chemical Additives and Processing Aids'], 'Chemical Additives and Processing Aids'),
          ...addCategoryToItems(products['Preservatives and Chemical Processing'], 'Preservatives and Chemical Processing'),
          ...addCategoryToItems(products['Pigments and Fillers'], 'Pigments and Fillers'),
        ];
        setData(array);
    }
    }, []);
  
    // Helper function to add the "category" property to each item
    const addCategoryToItems = (items, category) => {
      return items.map(item => ({ ...item, category }));
    };
  
    const handleSearch = (e) => {
      const filteredResults = data.filter(item => {
        if (lng == 'en') {
      const lowerCaseInput = e.target.value.toLowerCase();
      let x  =item.en.title.toLowerCase().includes(lowerCaseInput);
          return item.en.title.toLowerCase().includes(lowerCaseInput)
        } else if (lng == 'ar') {
          return item.ar.title.includes(e.target.value)
        }
      }
      );
      setResults(filteredResults);
      if (e.target.value == '') {
        setResults([])
      }
    };

  return (
    <div>
       <div>

<input type="search" className={`form-control w-50 m-auto ${styles.searchInput}`}
  onChange={e => { handleSearch(e) }}
  placeholder="Search here"
/>

{results.length == 0 ? "" : (
  <div className=" text-danger w-50 border border-2 border-dark mt-1 m-auto text-center" style={{ height: '150px', overflowY: "auto" }}>
    <ul >
      {results?.map((item,index) => (
        <Link 
        key={index}
          href={{
            pathname: `/${lng}/ProductDetails`,
            query: { product: `${item.id}`, category: `${item.category}` },
          }}
          className="text-decoration-none">
          {(lng == 'en') ?
            <li key={item.id} className={` list-unstyled mt-1 text-dark ${styles.result} `}  >
              {item.en.title}
            </li> :
            <li key={item.id} className={` list-unstyled mt-1 text-dark ${styles.result} `}  >
              {item.ar.title}
            </li>
          }
        </Link>
      ))}

    </ul>
  </div>
)}

</div>
    </div>
  )
}

export default Search
