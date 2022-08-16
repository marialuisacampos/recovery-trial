import React from "react";



export default function MuscleCard() {
    return (
        <div style={{
            backgroundImage: 'url(/muscleCard.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', width: '250px',
            height: '150px', borderRadius: '5px', padding: '50px'
        }}>
            <a href="">
                <img src="/play.jpg" style={{ width: '50px', margin: 'auto' }} alt="play" />
            </a>
        </div>
    )
}