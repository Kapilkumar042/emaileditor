import { Button } from '@arco-design/web-react';
import { IconClockCircle, IconDoubleLeft, IconEye, IconMoreVertical } from '@arco-design/web-react/icon';
import React, { FC } from 'react';


const CustomHeader: FC = () => {
  const ButtonGroup = Button.Group;
  return (
    <header className='flex py-4 h-16 w-full justify-between px-3'>
      <div className='flex gap-4 items-center'>
        <button className='border px-2 py-2 rounded-sm hover:bg-[#F4F4F5]'>
        <IconDoubleLeft />
        </button>
        <span className="text-[#09090B]  font-inter font-medium text-[1.25rem]">Template for launch of SendMillion...</span>
        <div className='flex items-center gap-2 hover:bg-[#F4F4F5] px-2 py-1 rounded-md'>
          <span>
            <IconClockCircle />
          </span>
          <span className="text-xs font-inter font-normal text-[0.775rem]">Last save 11:30 AM</span>
        </div>
      </div>
      <div className='flex gap-4'>
        <div>
          <Button type='secondary' icon={<IconEye />}>
            <span className='font-inter font-medium text-[0.825rem]'>Preivew & Test</span>
          </Button>
        </div>
        <div>
        <ButtonGroup>
        <Button type='primary'>
          <span className='font-inter font-normal text-[0.875rem]'>Save & Publish</span>
        </Button>
        <Button type='primary' icon={<IconMoreVertical />} />
      </ButtonGroup>
        </div>
      </div>
    </header>
  );
};

export default CustomHeader;