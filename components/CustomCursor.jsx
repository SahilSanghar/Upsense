// CustomCursor.js
'use client'
// CustomCursor.js
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [positions, setPositions] = useState({ x: 0, y: 0 });
    const [trail, setTrail] = useState([]);

    useEffect(() => {
        const onMouseMove = (e) => {
        setPositions({ x: e.clientX, y: e.clientY });
        setTrail((prevTrail) => [
          ...prevTrail.slice(-15), // Keep last 15 points for the trail
            { x: e.clientX, y: e.clientY },
        ]);
    };

        document.addEventListener('mousemove', onMouseMove);
        return () => document.removeEventListener('mousemove', onMouseMove);
    }, []);

    return (
    <div>
        {/* Main cursor */}
        <div
            className="custom-cursor"
            style={{ left: `${positions.x}px`, top: `${positions.y}px` }}
        />
        {/* Trail line */}
        {trail.map((pos, index) => (
        <div
            key={index}
            className="custom-cursor-trail"
            style={{
                left: `${pos.x}px`,
                top: `${pos.y}px`,
              opacity: 1 - index / 15, // Fade effect toward the end
            }}
        />
        ))}
    </div>
    );
};

export default CustomCursor;