import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "changeme";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();
  const { password } = req.body;
  const hash = process.env.ADMIN_PASS_HASH;
  if (!hash) return res.status(500).json({ error: "Missing ADMIN_PASS_HASH" });

  const valid = await bcrypt.compare(password, hash);
  if (!valid) return res.status(401).json({ error: "Invalid password" });

  const token = jwt.sign({ role: "admin" }, JWT_SECRET, { expiresIn: "2h" });
  res.setHeader("Set-Cookie", `token=${token}; HttpOnly; Path=/; Max-Age=7200; SameSite=Strict; Secure`);
  res.status(200).json({ success: true });
}