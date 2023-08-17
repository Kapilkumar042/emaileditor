import { Button } from '@arco-design/web-react';
import { IconClockCircle, IconDoubleLeft, IconEye, IconMoreVertical } from '@arco-design/web-react/icon';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

const CustomHeader: FC = () => {
  const history = useHistory();
  const ButtonGroup = Button.Group;
  return (
    <header className='flex justify-between w-full h-16 px-3 py-4'>
      <div className='flex items-center gap-4'>
        <button className='border px-2 py-2 rounded-sm hover:bg-[#F4F4F5]' onClick={() => { history.push('/'); }}>
          <IconDoubleLeft />
        </button>
        <span className="text-[#09090B]  font-inter font-medium text-[1.25rem]">Template for launch of SendMillion...</span>
        <div>
          <Button type='secondary' icon={<IconClockCircle />}>
            <span className="text-xs font-inter font-normal text-[0.775rem]">{t('HeaderTimeButton')}</span>
          </Button>
        </div>
      </div>
      <div className='flex gap-4'>
        <div>
          <Button type='outline' icon={<IconEye />}>
            <span className='text-[12px]'>{t('HeaderPreviewButton')}</span>
          </Button>
        </div>
        <div>
          <ButtonGroup>
            <Button type='primary'>{t('HeaderSaveButton')}</Button>
            <Button type='primary' icon={<IconMoreVertical />} />
          </ButtonGroup>
        </div>
      </div>
    </header>
  );
};

export default CustomHeader;