// pages/api/users/[id].js
import { PrismaClient } from '@prisma/client';

// pages/api/users/[id].js
const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { id } = req.query;

    if (req.method === 'GET') {
        try {
            const user = await prisma.user.findUnique({
                where: { id: parseInt(id) },
            });

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: 'Something went wrong' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
