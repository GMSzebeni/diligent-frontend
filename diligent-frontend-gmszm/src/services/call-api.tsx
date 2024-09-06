export async function fetchHeroes() {
    return new Promise<{ id: number, name: string, available: boolean }[]>((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: 'Superman', available: false },
                { id: 2, name: 'Batman', available: false },
                { id: 3, name: 'Spider-Man', available: false },
                { id: 4, name: 'Thor', available: true },
                { id: 5, name: 'Iron Man', available: true },
                { id: 6, name: 'Captain America', available: false },
                { id: 7, name: 'Wolverine', available: true },
                { id: 8, name: 'Black Panther', available: true },
                { id: 9, name: 'Aquaman', available: false },
                { id: 10, name: 'Wonder Woman', available: false },
                { id: 11, name: 'The Flash', available: true },
            ]);
        }, 1000);
    });
}