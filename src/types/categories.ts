interface Posts {
  id: string;
  slug: string;
}

export interface Categories {
  name: string;
  posts?: Posts[];
}
