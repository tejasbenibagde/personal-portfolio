import React from 'react'

function Loader() {
    return (
        <div className='spinner'>
            {Array.from({ length: 6 }, (_, index) => (
                <div key={index} />
            ))}
        </div>
    )
}

export default Loader