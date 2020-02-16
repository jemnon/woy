interface Posts {
  slug: string;
}

export interface Categories {
  name: string;
  posts?: Posts[];
}
