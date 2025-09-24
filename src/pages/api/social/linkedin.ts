import type { NextApiRequest, NextApiResponse } from "next";
import { SocialBlog } from "@/types/socialblog"; // Updated type import

type LinkedinElement = {
  id: string;
  text?: { text?: string };
  author?: string;
  created?: { time: number };
  lastModified?: { time: number };
  activity?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;
    const personId = process.env.LINKEDIN_PERSON_ID;

    if (!accessToken || !personId) {
      return res.status(500).json({ error: "LinkedIn credentials not set in .env" });
    }

    // Fetch the latest 10 posts from LinkedIn for the specific user
    const response: Response = await fetch(
      `https://api.linkedin.com/v2/shares?q=owners&owners=urn:li:person:${personId}&sharesPerOwner=10`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "X-Restli-Protocol-Version": "2.0.0",
        },
      }
    );

    const data = await response.json();

    // Normalize posts into SocialBlog type
    const linkedinPosts: SocialBlog[] = data.elements.map((el: LinkedinElement) => ({
      id: el.id,
      title: el.text?.text?.substring(0, 50) || "LinkedIn Post",
      content: el.text?.text || "",
      author: el.author || "LinkedIn",
      createdAt: el.created?.time ? new Date(el.created.time).toISOString() : new Date().toISOString(),
      updatedAt: el.lastModified?.time ? new Date(el.lastModified.time).toISOString() : undefined,
      tags: ["LinkedIn"],
      slug: el.id,
      source: "LinkedIn",
      url: `https://www.linkedin.com/feed/update/${el.activity}`,
    }));

    res.status(200).json(linkedinPosts);
  } catch (error) {
    console.error("LinkedIn API error:", error);
    res.status(500).json({ error: "Failed to fetch LinkedIn posts" });
  }
}
