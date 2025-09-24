import type { NextApiRequest, NextApiResponse } from "next";
import { SocialBlog } from "@/types/socialblog"; // Updated type import

interface TwitterTweet {
  id: string;
  text: string;
  created_at: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const bearerToken = process.env.TWITTER_BEARER_TOKEN;
    const username = process.env.TWITTER_USERNAME;

    if (!bearerToken || !username) {
      return res.status(500).json({ error: "Twitter credentials not set in .env" });
    }

    // 1. Get user ID from username
    const userRes = await fetch(
      `https://api.twitter.com/2/users/by/username/${username}?user.fields=id`,
      { headers: { Authorization: `Bearer ${bearerToken}` } }
    );
    const userData = await userRes.json();
    const userId = userData.data.id;

    // 2. Fetch latest 10 tweets
    const tweetsRes = await fetch(
      `https://api.twitter.com/2/users/${userId}/tweets?max_results=10&tweet.fields=created_at`,
      { headers: { Authorization: `Bearer ${bearerToken}` } }
    );
    const tweetsData = await tweetsRes.json();

    // 3. Map tweets to SocialBlog type
    const posts: SocialBlog[] = tweetsData.data.map((t: TwitterTweet) => ({
      id: t.id,
      title: t.text.substring(0, 50) || "Tweet",
      content: t.text,
      author: username,
      createdAt: t.created_at,
      updatedAt: t.created_at,
      tags: ["Twitter"],
      slug: t.id,
      source: "Twitter",
      url: `https://twitter.com/${username}/status/${t.id}`,
    }));

    res.status(200).json(posts);
  } catch (error) {
    console.error("Twitter API error:", error);
    res.status(500).json({ error: "Failed to fetch Twitter posts" });
  }
}
