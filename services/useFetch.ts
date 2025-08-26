import { useEffect, useState } from "react";
//useState → component içinde değişebilen değerleri saklamak için.
//useEffect → component render olduğunda veya bağımlılıklar değiştiğinde yan etkiler çalıştırmak için (örn. API çağrısı).


const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
  const [data, setData] = useState<T | null>(null); // veri saklamak için
  const [loading, setLoading] = useState(false); // yükleniyor mu kontrolü
  const [error, setError] = useState<Error | null>(null); // hata varsa saklamak için

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await fetchFunction();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An unknown error occurred'));
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setData(null);
    setError(null);
    setLoading(false);
  };

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
   
  }, []);

  return { data, loading, error, refetch: fetchData, reset };
};

export default useFetch;