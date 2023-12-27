import React from 'react'

function SemiRound({ children,classes, onClick }) {
    return (
        <div className={classes} onClick={onClick}>
            {children}
        </div>
    )
}

export default SemiRound