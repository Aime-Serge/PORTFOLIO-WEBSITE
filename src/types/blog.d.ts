export interface Blog {
  id: string;
  title: string;
  content: string;
  author?: string;
  createdAt: string;
  updatedAt?: string;
  tags?: string[];
  slug?: string;
}