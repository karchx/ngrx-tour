import { Character } from './character.model';

export interface Heroe {
  id: number;
  character: Character;
  name: string;
  powers: number[];
}
