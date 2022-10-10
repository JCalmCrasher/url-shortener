import fetcher from '@/utils/fetcher';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const UrlId = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isUrlValid, setIsUrlValid] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (id) {
      fetcher(`/${id}`, {
        shortUrl: id
      })
        .then((res) => {
          setLoading(false);
          if (res.data) {
            setIsUrlValid(true);
            router.push(res.data.url);
          } else {
            setIsUrlValid(false);
          }
        })
        .catch((err) => {
          console.log(err);
          router.push('/');
        });
    }
  }, [id, router]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : isUrlValid ? (
        <div>Redirecting to {process.env.NEXT_PUBLIC_APP_URL}/${id}...</div>
      ) : (
        <div>This is a 404 error, which means you&apos;ve clicked on a bad link or entered an invalid URL</div>
      )}
    </>
  );
};

export default UrlId;
