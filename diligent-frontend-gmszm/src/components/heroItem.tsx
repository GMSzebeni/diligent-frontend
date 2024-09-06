import React from 'react';

type HeroItemProps = {
    id: number;
    name: string;
    available: boolean;
    toggleAvailability: (id: number) => void;
};

const HeroItem: React.FC<HeroItemProps> = ({ id, name, available, toggleAvailability }) => {
    return (
        <p 
            className={`heroItem ${available ? 'available' : 'unavailable'}`}
            onClick={() => toggleAvailability(id)}>
            <span className="heroName">{id}. {name} </span>
            <span className="heroAvailability">{available ? '"Available"' : ''}</span>
        </p>
    );
};

export default HeroItem;