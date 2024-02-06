export interface AllPosts {
  meta: Meta;
  data: Datum[];
}

interface Datum {
  status: string;
  created: string;
  updated: string;
  published: string;
  title: string;
  slug: string;
  body: string;
  summary: string;
  seo_title: string;
  meta_description: string;
  featured_image_alt: string;
  url: string;
  featured_image: string;
  author: Author;
  tags: Tag[];
  categories: Tag[];
}

interface Tag {
  name: string;
  slug: string;
}

interface Author {
  bio: string;
  slug: string;
  email: string;
  title: string;
  last_name: string;
  first_name: string;
  facebook_url: string;
  linkedin_url: string;
  instagram_url: string;
  pinterest_url: string;
  profile_image: string;
  twitter_handle: string;
}

interface Meta {
  next_page?: any;
  previous_page?: any;
  count: number;
}