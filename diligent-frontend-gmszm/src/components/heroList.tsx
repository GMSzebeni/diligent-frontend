import React from 'react';
import HeroItem from './heroItem';

type Hero = {
    id: number;
    name: string;
    available: boolean;
};

type HeroListProps = {
    heroes: Hero[];
    toggleAvailability: (id: number) => void;
};

const HeroList: React.FC<HeroListProps> = ({ heroes, toggleAvailability }) => {
    return (
        <div className="grid">
            {heroes.map(hero => (
                <HeroItem 
                    id={hero.id}
                    name={hero.name}
                    available={hero.available}
                    toggleAvailability={toggleAvailability}
                />
            ))}
        </div>
    );
};

export default HeroList;