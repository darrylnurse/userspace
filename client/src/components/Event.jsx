import React, { useState, useEffect } from 'react'

const Event = ({ title, dressCode, time, url }) => {
    return (
        <article className='w-1/2'>
            <img src={url} alt={"event-image"}/>

            <div>
                <div>
                    <h3>{title}</h3>
                    <p><i>Event Time: </i>{time}</p>
                </div>
            </div>
        </article>
    )
}

export default Event