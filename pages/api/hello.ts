// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// api 폴더 안에 있는것들은 http 응답을 해준다.

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: 'John Doe' });
}
