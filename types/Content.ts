export type ContentBlock =
  | TextBlock
  | ListBlock
  | FeatureBlock
  | StatsBlock
  | ImageBlock
  | CTABlock;

export interface TextBlock {
  type: "text";
  title?: string;
  content: string;
}
export interface ListBlock {
  type: "list";
  title: string;
  items: string[];
}
export interface FeatureBlock {
  type: "features";
  title?: string;
  items: {
    title: string;
    description: string;
    icon?: string; // optional if you want later icon mapping
  }[];
}

export interface StatsBlock {
  type: "stats";
  title?: string;
  items: {
    value: string;
    label: string;
  }[];
}
export interface CTABlock {
  type: "cta";
  title?: string;
  description?: string;
  button: {
    label: string;
    href: string;
  };
}
export interface ImageBlock {
  type: "image";
  src: string; // /public path
  alt?: string;
  rounded?: boolean;
}
