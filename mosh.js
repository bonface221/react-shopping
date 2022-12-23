const counters= [
	{ id: 1, value: 4 },
	{ id: 2, value: 0 },
	{ id: 3, value: 0 },
	{ id: 4, value: 0 },
];


let newCounters = counters.map((c) => {
    if (c.id === 3) {
        c.value++
        return c
    }
    return c
})


console.log(newCounters)