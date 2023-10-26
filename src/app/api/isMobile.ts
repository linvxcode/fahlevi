// pages/api/isMobile.ts

import { NextApiRequest, NextApiResponse } from 'next';

const isMobileHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const userAgent = req.headers['user-agent'];

  // You can use a library like 'mobile-detect' to identify mobile devices
  const MobileDetect = require('mobile-detect');
  const md = new MobileDetect(userAgent);

  if (md.mobile()) {
    res.json({ isMobile: true });
  } else {
    res.json({ isMobile: false });
  }
};

export default isMobileHandler;
