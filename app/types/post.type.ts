export interface Post {
  meta: Meta;
  data: Data;
}

interface Data {
  created: string;
  published: string;
  url?: any;
  slug: string;
  featured_image: string;
  featured_image_alt: string;
  author: Author;
  tags: any[];
  categories: any[];
  title: string;
  body: string;
  summary: string;
  updated: string;
  seo_title: string;
  meta_description: string;
  status: string;
}

interface Author {
  first_name: string;
  last_name: string;
  email: string;
  slug: string;
  bio: string;
  title: string;
  linkedin_url: string;
  facebook_url: string;
  instagram_url: string;
  pinterest_url: string;
  twitter_handle: string;
  profile_image: string;
}

interface Meta {
  next_post?: any;
  previous_post: Previouspost;
}

interface Previouspost {
  slug: string;
  title: string;
  featured_image: string;
}