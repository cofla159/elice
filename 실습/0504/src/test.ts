function addTwo(a: number, b: number): number {
    return a + b;
}

function addOneOrTwo(a: number, b?: number): number {
	if (b)
		return (a + b);
	else
		return a;    
}

function addDefault(a: nubmer, b? :number): number {
	if (b)
        return (a + b);
    else
        return (a + 10); 
}

function addTwoOrMore(a: number, b: number, ...c: number[]): number {
	if(c)
		for(let i: number = 0; i < c.length; i++){
            a += c[i];
        }
        return a+b;
}