export class Produto { 
    id!: number;
    title!: string;
    image!: string;
    price!: number;
    code!: string;
    duration!: number;
    rating!: {
        rate: number;
        count: number;
    };
    releaseDate!: string;
    description!: string;
}