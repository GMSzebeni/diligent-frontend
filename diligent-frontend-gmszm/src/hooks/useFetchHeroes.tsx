import { useState, useEffect } from 'react';
import { fetchHeroes } from '../services/call-api';

type Hero = {
    id: number;
    name: string;
    available: boolean;
};

export function useFetchHeroes() {
    const [heroes, setHeroes] = useState<Hero[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadHeroes = async () => {
            try {
                const data = await fetchHeroes();
                setHeroes(data);
            } catch (err) {
                setError('Failed to fetch heroes');
            } finally {
                setLoading(false);
            }
        };

        loadHeroes();
    }, []);

    return { heroes, loading, error, setHeroes };
}