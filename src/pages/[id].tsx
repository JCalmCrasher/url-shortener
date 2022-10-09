import fetcher from '@/utils/fetcher';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const UrlId = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetcher(`/${id}`, {
        shortUrl: id
      })
        .then((res) => {
          router.push(res.data.url);
        })
        .catch((err) => {
          router.push('/');
        });
    }
  }, [id, router]);

  return (
    <div className="p-2">
      Redirecting to {`${process.env.NEXT_PUBLIC_APP_URL}/${id}`}...
    </div>
  );
};

export default UrlId;
