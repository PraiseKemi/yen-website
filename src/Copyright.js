import React from 'react';
import './Copyright.css';

export default function Copyright() {
    let year = new Date().getFullYear();

    return (
        <div className='Copyright'>
            <p>
                Copyright © {year} Young Ecclesia Nation
            </p>
        </div>
    )
}