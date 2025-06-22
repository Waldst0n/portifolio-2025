export type CardProjectsProps = {
  image?: string;
  title?: string;
  description?: string;
  technology?: string[];
  link?: string;
  id: string;
};

export interface PageDetailsProps {
  params: {
    id: string;
  };
}
