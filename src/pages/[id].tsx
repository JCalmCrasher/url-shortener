import prisma from '@/lib/prisma';
import fetcher from '@/utils/fetcher';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const UrlId = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetcher(`/${id}`, {
      shortUrl: id
    })
      .then((res) => {
        return console.log(res);
        router.push(res.url);
      })
      .catch((err) => {
        return console.log(err)
        router.push('/');
      });
  }, [id]);

  return (
    <div className="p-2">
      Redirecting to {`${process.env.NEXT_PUBLIC_APP_URL}/${id}`}
    </div>
  );
};

export default UrlId;
