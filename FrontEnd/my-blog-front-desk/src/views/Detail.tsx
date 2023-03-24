import React from 'react';

interface Props {
  children?: React.ReactNode;
  // 组件props类型

}

const Detail: React.FC<Props> = (props): JSX.Element => {
  console.log(props)
  /** state部分 **/

  /** effect部分 **/

  /** methods部分 **/

  /** render **/
  return (
    <div>
      Detail
    </div>
  );
};

export default Detail;