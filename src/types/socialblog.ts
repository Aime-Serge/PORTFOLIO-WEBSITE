export interface SocialBlog {
  id: string;
  title: string;
  content: string;
  author?: string; // LinkedIn/Twitter author
  createdAt: string;
  updatedAt?: string;
  tags?: string[]; // e.g., ["LinkedIn", "Twitter", "Tech"]
  slug?: string; // optional, can be derived from social post id if needed
  source: "LinkedIn" | "Twitter"; // mandatory
  url?: string; // link to original post
}