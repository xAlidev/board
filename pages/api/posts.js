// pages/api/posts.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const posts = await prisma.post.findMany({
                include: {
                    author: true,
                },
            });
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching posts' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
