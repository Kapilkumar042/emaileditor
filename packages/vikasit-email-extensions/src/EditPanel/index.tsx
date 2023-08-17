import { Collapse, Layout, Space, Tabs } from '@arco-design/web-react';
import { BlockAvatarWrapper, useEditorProps } from 'vikasit-email-editor';
import { AdvancedType } from 'vikasit-email-core';

import React, { useMemo, useState } from 'react';
import { Blocks } from './Blocks';
import { BlockLayer } from '@extensions/BlockLayer';
import { FullHeightOverlayScrollbars } from '@extensions/components/FullHeightOverlayScrollbars';
import styles from './index.module.scss';
import { ConfigurationDrawer } from './ConfigurationDrawer';
import { useExtensionProps } from '@extensions/components/Providers/ExtensionProvider';
import { IconCaretRight, IconCaretUp } from '@arco-design/web-react/icon';

const TabPane = Tabs.TabPane;

export function EditPanel({
  showSourceCode,
  jsonReadOnly,
  mjmlReadOnly,
}: {
  showSourceCode: boolean;
  jsonReadOnly: boolean;
  mjmlReadOnly: boolean;
}) {
  const { height } = useEditorProps();
  const { compact = true } = useExtensionProps();
  const { categories } = useExtensionProps();
  const defaultActiveKey = useMemo(
    () => [...categories.filter(item => item.active).map(item => item.label)],
    [categories],
  );

  return (
    <Layout.Sider
      className={styles.blocksPanel}
      style={{ paddingRight: 0, minWidth: 360 }}
      // collapsed={collapsed}
      collapsible
      trigger={null}
      breakpoint='xl'
      collapsedWidth={60}
      width={360}
    >
      <Tabs
        defaultActiveTab='2'
        style={{ width: '100%', padding: 0 }}
        renderTabHeader={(_, DefaultHeader) => (
          <div className={styles.largeTabsHeader}>
            <DefaultHeader />
          </div>
        )}
      >
        <TabPane
          key='2'
          title={t('Block')}
        >
          <FullHeightOverlayScrollbars height={`calc(${height} - 60px)`}>
            <Blocks />
          </FullHeightOverlayScrollbars>
        </TabPane>

        {/* <TabPane
          key='1'
          title={t('Layer')}
        >
          <FullHeightOverlayScrollbars height={`calc(${height} - 60px)`}>
            <div style={{ padding: 20 }}>
              <BlockLayer />
            </div>
          </FullHeightOverlayScrollbars>
        </TabPane> */}
        <TabPane
          key='1'
          title={t('Layout')}
        >
          <FullHeightOverlayScrollbars height={`calc(${height} - 60px)`}>
            <div style={{ padding: 20 }}>
              {/* <BlockLayer /> */}
              <Collapse
                defaultActiveKey={defaultActiveKey}
                style={{ paddingBottom: 30, minHeight: '100%'}}
              >
                {categories.map((cat, index) => {
                  if (cat.displayType === 'column') {
                    return (
                      <Collapse.Item
                        key={index}
                        contentStyle={{ padding: '0px 20px' }}
                        name={cat.label}
                        header={cat.label}
                      >
                        <Space direction='vertical'>
                          <div />
                        </Space>

                        {cat.blocks.map(item => (
                          <LayoutItem
                            key={item.title}
                            title={item.title || ''}
                            columns={item.payload}
                          />
                        ))}
                        <Space direction='vertical'>
                          <div />
                        </Space>
                      </Collapse.Item>
                    );
                  }
                })}
              </Collapse>
            </div>
          </FullHeightOverlayScrollbars>
        </TabPane>
      </Tabs>
      {!compact && (
        <ConfigurationDrawer
          height={height}
          showSourceCode={showSourceCode}
          compact={Boolean(compact)}
          jsonReadOnly={jsonReadOnly}
          mjmlReadOnly={mjmlReadOnly}
        />
      )}
    </Layout.Sider>
  );
}

function LayoutItem({ columns, title }: { columns: string[][]; title: string }) {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <p
        onClick={() => setVisible(v => !v)}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          cursor: 'pointer',
        }}
      >
        <span>{title}</span>
        {columns.length > 1 && (
          <span>{!visible ? <IconCaretRight /> : <IconCaretUp />}</span>
        )}
      </p>
      {columns.map((item, index) => {
        const hide = !visible && index !== 0;
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
            key={index}
            style={{
              height: hide ? 0 : undefined,
              overflow: 'hidden',
              marginBottom: hide ? 0 : 20,
            }}
          >
            <BlockAvatarWrapper
              type={AdvancedType.SECTION}
              payload={payload}
            >
              <div
                style={{
                  border: '1px solid rgb(229, 229, 229)',
                  width: '100%',
                  padding: 10,
                }}
              >
                <div
                  style={{
                    height: 16,
                    border: '1px solid rgb(85, 85, 85)',
                    borderRadius: 3,
                    display: 'flex',
                  }}
                >
                  {item.map((column, index) => {
                    return (
                      <div
                        key={index}
                        style={{
                          borderRight:
                            index === item.length - 1
                              ? undefined
                              : '1px solid rgb(85, 85, 85)',
                          height: '100%',
                          width: column,
                        }}
                      />
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
