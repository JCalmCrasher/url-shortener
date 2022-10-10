import prisma from '@/lib/prisma';
import { isObjectNullish } from '@/utils/helpers';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { shortUrl } = req.body;
    const url = `${process.env.NEXT_PUBLIC_APP_URL}/${shortUrl}`;

    const urlData = await prisma.url.findUnique({
      where: {
        short_url: url
      }
    });
    res.json({ data: urlData });

    if (!isObjectNullish(urlData)) {
      res.json({ data: urlData });
    } else {
      res.status(400).json({ error: 'URL not found' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
