import prisma from '@/lib/prisma';

import shortenUrl from '@/utils/shortenUrl';
import { NextApiRequest, NextApiResponse } from 'next';
import { URLResponse } from './response';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { url } = req.body;
    const shortUrl = shortenUrl();
    const response: URLResponse = {
      url,
      shortUrl
    };

    const urlExists = await prisma.url.findUnique({
      where: {
        short_url: shortUrl
      }
    });

    if (urlExists) {
      return res.status(400).json({
        error: 'An error occurred while shortening the URL'
      });
    }

    const newUrl = await prisma.url.create({
      data: {
        url,
        short_url: shortUrl
      }
    });
    
    res.status(200).json(response);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
