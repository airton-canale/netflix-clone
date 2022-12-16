import React from 'react';
import './Header.css';


export default ({black}) => {
    return (
        <header className={black ? 'black-header' : ''}>
           <div className='header--logo'>
            <a href='/'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='Netflix'></img>
            </a>
           </div>
           <div className='header--user'>
            <a href='/'>
                <img src='https://occ-0-2787-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdYJV5wt63AcxNaDoqDXUhqZb55oN5Dxt1m-Zdn_z5rn_hIq9m8dA8JB2xdcPmrY3yXnlVWYKPXnOrbv2QN4aEVU28dESJg.png?r=1d4' alt='Usuario'></img>
            </a>
           </div>
        </header>
    )
}