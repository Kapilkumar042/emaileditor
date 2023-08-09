import { IconDoubleLeft } from '@arco-design/web-react/icon';
import React, { FC } from 'react';


const CustomHeader: FC = () => {

  return (
    <header className='flex flex-col h-16 w-full justify-between'>
      <div>
        <IconDoubleLeft />
        <span>Hello Welcome</span>
        <button>Preivew</button>
      </div>
      <div>
        <div>
          <button>Preivew1</button>
        </div>
        <div>
          <button>Preivew2</button>
        </div>
      </div>
    </header>
  );
};

export default CustomHeader;