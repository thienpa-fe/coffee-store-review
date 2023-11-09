'use client';

import { getAllStore } from '@/requests/stores';
import { Spin } from 'antd';
import { useEffect, useState } from 'react';

const ExamplePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getAllStore().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <>
      <h1>Example Fetch Data</h1>
      {data ? <>{JSON.stringify(data.data)}</> : <Spin />}
    </>
  );
};

export default ExamplePage;
