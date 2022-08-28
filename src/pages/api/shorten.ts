// shorten url api

import shortenUrl from '@/utils/shortenUrl';
import { NextApiRequest, NextApiResponse } from 'next';
import { URLResponse } from './response';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.body;
  const shortUrl = await shortenUrl(url);
  const response: URLResponse = {
    url,
    shortUrl
  };
  res.status(200).json(response);
}
