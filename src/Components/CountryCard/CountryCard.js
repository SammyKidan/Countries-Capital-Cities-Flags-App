import React from 'react'
import styles from './CountryCard.module.scss'; 

const CountryCard = ({countriesData}) => {
   
  return (
    <div aria-label="country info card" styles={styles.container}>

        <ul>
        {countriesData.map((item, key) => (
            <li key={item.alpha2Code}>
               <p>{item.name}</p>
               <p><b>Capital: </b>{item.capital}</p>
               <img src={item.flags.png} styles={styles.img} alt="Flag of country" />
            </li>
        ))}
        </ul>
        
    </div>
  )
}

export default CountryCard
