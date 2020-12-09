import { Creator } from './creator';
import { Thumbnail } from './thumbnail';

export interface Comic {
  id: number;
  title: string;
  thumbnail: Thumbnail;
  creators?: {
    available: number;
    returned: number;
    collectionURI: string;
    items: Creator[];
  };
  description?: string;
}
