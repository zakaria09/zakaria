export interface HomePageResp {
  data: Data;
}

interface Data {
  slug: string;
  name: string;
  published: string;
  updated: string;
  page_type: string;
  fields: Fields2;
}

interface Fields2 {
  seo: Seo;
  body: Body[];
}

interface Body {
  type: string;
  fields: Fields;
}

interface Fields {
  headline: string;
  subheadline: string;
  scroll_anchor_id: string;
  features: Feature[];
}

interface Feature {
  headline: string;
  description: string;
  icon: string;
}

interface Seo {
  title: string;
  description: string;
}