import { useState, useEffect } from 'react';

type Product = {
  id: number;
  name: string;
  country_code: string;
  country_name: string;
  currency: string;
  categories: string[];
  packages: [
    {
      id: string;
      value: string;
      price: number;
      amount: number;
    }
  ];
};

type ProductResult = Omit<Product, 'packages'> & { maxAmount: number };

const getMaxAmountValue = (packages: Product['packages']): number => {
  return packages.reduce((acc, p) => {
    if (acc < p.amount) return p.amount;
    return acc;
  }, 0);
};

const useQueryProducts = (url: string): ProductResult[] => {
  const [data, setData] = useState<ProductResult[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchPromise = await fetch(url);
        const result: { data: Product[] } = await fetchPromise.json();

        const resultMappedByAmound = result.data.map((d: Product) => {
          const {
            categories,
            country_name,
            id,
            currency,
            country_code,
            name,
            packages,
          } = d;
          return {
            categories,
            country_name,
            id,
            currency,
            country_code,
            name,
            maxAmount: getMaxAmountValue(packages),
          };
        });
        setData(resultMappedByAmound);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [url]);
  return data;
};

export default useQueryProducts;
