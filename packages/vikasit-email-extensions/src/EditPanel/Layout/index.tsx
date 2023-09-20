//layout-to-update
import { Collapse, Grid, Space, Typography } from '@arco-design/web-react';
import { AdvancedType, BlockManager, IBlockData } from 'vikasit-email-core';
import { BlockAvatarWrapper, IconFont } from 'vikasit-email-editor';
import React, { useMemo, useState } from 'react';
import {
  IconCaretRight,
  IconCaretUp,
  IconDown,
  IconUp,
} from '@arco-design/web-react/icon';
import { getIconNameByBlockType } from '@extensions/utils/getIconNameByBlockType';
// import styles from './index.module.scss';
import layoutstyles from '../Blocks/index.module.scss';
import { useExtensionProps } from '@extensions/components/Providers/ExtensionProvider';

export function Layouts() {
  const { categories } = useExtensionProps();

  const defaultActiveKey = useMemo(
    () => [...categories.filter(item => item.active).map(item => item.label)],
    [categories],
  );
  return (
    <Collapse
      defaultActiveKey={defaultActiveKey}
      // style={{ paddingBottom: 30, minHeight: '100%'}}
      expandIconPosition='right'
      expandIcon={<IconDown />}
      bordered={false}
    >
      {categories.map((cat, index) => {
        if (cat.displayType === 'column') {
          return (
            <Collapse.Item
              key={index}
              contentStyle={{ padding: '0px 0px 0px 0px' }}
              name={cat.label}
              header={cat.label}
              className={layoutstyles['arco-collapse-item-header-title']}
            >
              <Space direction='horizontal'>
                <div />
              </Space>
              <Grid.Row>
                {cat.blocks.map((item, index) => {
                  return (
                    // <LayoutItem
                    // key={item.title}
                    // title={item.title || ''}
                    // columns={item.payload}
                    // />
                    <>
                      {' '}
                      <LayoutItem
                        key={item.title}
                        title={item.title || ''}
                        columns={item.payload}
                        iconUrl={item.iconUrl}
                      />
                    </>
                  );
                })}
              </Grid.Row>
            </Collapse.Item>
          );
        }
      })}
    </Collapse>
  );
}

function LayoutItem({ columns, title, iconUrl }: { columns: string[][]; title: string; iconUrl?:string }) {
  // const [visible, setVisible] = useState(false);

  return (
    <div className={layoutstyles.layoutContainer}>
      {columns.map((item, index) => {
        //   const hide = !visible && index !== 0;
        const payload = {
          type: AdvancedType.SECTION,
          attributes: {},
          children: item.map(col => ({
            type: AdvancedType.COLUMN,
            attributes: {
              width: col,
            },
            data: {
              value: {},
            },
            children: [],
          })),
        };

        return (
          <div
            className={layoutstyles.blockItem}
            key={index}
          >
            <BlockAvatarWrapper
              type={AdvancedType.SECTION}
              payload={payload}
            >
              <IconFont
            style={{ fontSize: 20 }}
            iconUrl={iconUrl}
          />
          {/* <Typography.Text style={{ marginTop: 10 }}>
            {title || "kkkk"}
          </Typography.Text> */}
              <div>
                <div className={layoutstyles.blockItemContainer}>
                  {item.map((column, index) => {
                    return (
                      <>
                        <div key={index} />
                      </>
                    );
                  })}
                </div>
              </div>
            </BlockAvatarWrapper>
          </div>
        );
      })}
    </div>
  );
}
