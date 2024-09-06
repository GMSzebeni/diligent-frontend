import React from 'react';
import HeroList from './components/heroList';
import { useFetchHeroes } from './hooks/useFetchHeroes';
import './App.css';

const App: React.FC = () => {
  	const { heroes, loading, error, setHeroes } = useFetchHeroes();

  	const toggleAvailability = (id: number) => {
    	setHeroes(heroes =>
	        heroes.map(hero =>
	            hero.id === id ? { ...hero, available: !hero.available } : hero
	        )
    	);
  	};

	if (loading) {
	    return <div>Loading...</div>;
	} else if (error != null) {
	    return <div>{error}</div>;
	} else {
	    return (
	      	<div className="container">
	          	<h1>App</h1>
	          	<h2>Heroes</h2>
	          	<HeroList heroes={heroes} toggleAvailability={toggleAvailability} />
	      	</div>
	    );
	}
};

export default App;
