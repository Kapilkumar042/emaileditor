import { Collapse, Grid, Space, Typography } from '@arco-design/web-react';
import { AdvancedType, BlockManager, IBlockData } from 'vikasit-email-core';
import { BlockAvatarWrapper, IconFont } from 'vikasit-email-editor';
import React, { useMemo, useState } from 'react';
import dow from '../../../src/components/Icons/svg/block-3icons-gradient-v1.svg';
// import dow from "./download.jpeg";
import {
  IconCaretRight,
  IconCaretUp,
  IconDown,
  IconUp,
} from '@arco-design/web-react/icon';
import { getIconNameByBlockType } from '@extensions/utils/getIconNameByBlockType';
import styles from './index.module.scss';
import { useExtensionProps } from '@extensions/components/Providers/ExtensionProvider';

export function Blocks() {
  const { categories } = useExtensionProps();

  const defaultActiveKey = useMemo(
    () => [...categories.filter(item => item.active).map(item => item.label)],
    [categories],
  );
  return (
    <Collapse
      defaultActiveKey={defaultActiveKey}
      // style={{ paddingBottom: 30, minHeight: '100%' , textAlign:"center", alignItems:"center", }}
      expandIconPosition='right'
      expandIcon={<IconDown />}
      className={styles['arco-collapse-item-header-title']}
    >
      {categories.map((cat, index) => {
        if (cat.displayType === 'column') {
          return (
            // <Collapse.Item
            //   key={index}
            //   contentStyle={{ padding: '0px 20px' }}
            //   name={cat.label}
            //   header={cat.label}
            // >
            //   <Space direction='vertical'>
            //     <div />
            //   </Space>

            //   {cat.blocks.map((item) => (
            //     <LayoutItem
            //       key={item.title}
            //       title={item.title || ''}
            //       columns={item.payload}
            //     />
            //   ))}
            //   <Space direction='vertical'>
            //     <div />
            //   </Space>
            // </Collapse.Item>
            <h1 className='hidden'></h1>
          );
        }

        if (cat.displayType === 'custom') {
          return (
            <Collapse.Item
              key={index}
              contentStyle={{ padding: 0, paddingBottom: 0, paddingTop: 20 }}
              name={cat.label}
              header={cat.label}
              className={styles['arco-collapse-item-header-title']}
            >
              <Grid.Row>
                {cat.blocks.map((item, index) => {
                  return <React.Fragment key={index}>{item}</React.Fragment>;
                })}
              </Grid.Row>
            </Collapse.Item>
          );
        }
        return (
          <Collapse.Item
            key={index}
            contentStyle={{ padding: 0, paddingBottom: 0, paddingTop: 20 }}
            name={cat.label}
            header={cat.label}
          >
            <Grid.Row>
              {cat.blocks.map((item, index) => {
                return (
                  <BlockItem
                    key={index}
                    iconUrl={item.iconUrl}
                    {...(item as any)}
                  />
                );
              })}
            </Grid.Row>
          </Collapse.Item>
        );
      })}
    </Collapse>
  );
}

function BlockItem({
  type,
  payload,
  title,
  filterType,
  iconUrl,
}: {
  type: string;
  payload?: Partial<IBlockData>;
  title?: string;
  filterType: string | undefined;
  iconUrl: string;
}) {
  const block = BlockManager.getBlockByType(type);

  return (
    <div className={styles.blockItem}>
      <BlockAvatarWrapper
        type={type}
        payload={payload}
      >
        <div className={styles.blockItemContainer}>
          <IconFont
            style={{ fontSize: 20 }}
            iconUrl={iconUrl}
          />
          <Typography.Text style={{ marginTop: 10 }}>
            {title || block?.name}
          </Typography.Text>
        </div>
      </BlockAvatarWrapper>
    </div>
  );
}
