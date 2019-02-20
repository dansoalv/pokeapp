export class PokemonList {
    count: number;
    next: string;
    previous: any;
    results: Array<Result>

	constructor(init?: Partial<PokemonList>) {
		Object.assign(this, init);
	}
}

export class Result {

    name: string;
    url: string;

	constructor(init?: Partial<Result>) {
		Object.assign(this, init);
	}
}

