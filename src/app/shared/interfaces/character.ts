import { Thumbnail } from './thumbnail';

export interface Character {
  id: number;
  name: string;
  thumbnail: Thumbnail;
  description?: string;
}
