export type Breed = {
    id: string;
    name: string;
  };
  
  export type CatType = {
    breeds: Breed[];
    id: string;
    url: string;
    width: number;
    height: number;
  };