import { tema } from './Tema';

export class postagem{
    public id: number;
    public titulo: string;
    public texto: string;
    public data: Date;
    public tema: tema;
}