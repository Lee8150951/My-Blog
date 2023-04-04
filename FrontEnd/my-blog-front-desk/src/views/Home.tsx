import React, { useEffect, useState } from 'react';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { aboveInfoQuery } from '../api';
import { Button, Toast } from '@douyinfe/semi-ui';

interface Props {
  children?: React.ReactNode;
  // 组件props类型
  client: ApolloClient<NormalizedCacheObject>;
}

const Home: React.FC<Props> = (props): JSX.Element => {
  const { client } = props;

  /** state部分 **/
  let [aboveInfo, setAboveInfo] = useState({
    _id: '',
    title: '',
    subtitle: '',
    avatar: '',
    background: ''
  });

  /** effect部分 **/
  useEffect(() => {
    (async () => {
      try {
        let { data: { above } } = await aboveInfoQuery(client);
        setAboveInfo(above)
      } catch (_) {}
    })();
  }, []);

  /** methods部分 **/

  /** render **/
  return (
    <div>
      <Button onClick={() => Toast.warning({ content: 'welcome' })}>Hello Semi</Button>
    </div>
  );
};

export default Home;