import React from 'react';
import { IBlockData } from '@core/typings';
import { BasicType } from '@core/constants';
import { createBlock } from '@core/utils/createBlock';
import { getImg } from '@core/utils/getImg';
import { mergeBlock } from '@core/utils/mergeBlock';
import { t } from '@core/utils';
import { BasicBlock } from '@core/components/BasicBlock';

export type IImageWith3VerticalText = IBlockData<
  {
    'background-color'?: string;
    'background-height'?: string;
    'background-position'?: string;
    'background-url'?: string;
    'background-width'?: string;
    'vertical-align'?: string;
    'border-radius'?: string;
    width?: string;
    height?: string;
    mode: 'fluid-height' | 'fixed-height';
    padding?: string;
  },
  { }
>;

export const ImageWith3VerticalText = createBlock<IImageWith3VerticalText>({
  get name() {
    return t('3 image with vertical text');
  },
  type: BasicType.IMAGE_WITH_3_VERTICAL_TEXT,
  create: payload => {
    const defaultData: IImageWith3VerticalText = {
      type: BasicType.IMAGE_WITH_3_VERTICAL_TEXT,
      data: {
        value: { },
      },
      attributes: {
        'background-color': '#ffffff',
        'background-position': 'center center',
        mode: 'fluid-height',
        padding: '0px 0px 10px 0px',
        'vertical-align': 'top',
        'background-url': getImg('IMAGE_31'),
      },
      children: [
        {
          type: 'section',
          data: {
            value: {
              noWrap: false,
            },
          },
          attributes: {
            padding: '0px 0px 0px 0px',
            'background-repeat': 'repeat',
            'background-size': 'auto',
            'background-position': 'top center',
            border: 'none',
            direction: 'ltr',
            'text-align': 'center',
          },
          children: [
            {
              type: 'column',
              data: {
                value: {},
              },
              attributes: {
                padding: '0px 10px 0px 15px',
                border: 'none',
                'vertical-align': 'top',
              },
              children: [
                {
                  type: 'image',
                  data: {
                    value: {},
                  },
                  attributes: {
                    align: 'center',
                    height: 'auto',
                    padding: '10px 0px 10px 0px',
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVGHL9r9OucwArH8yO3rEDPryG4V3tSCBw-w&usqp=CAU',
                  },
                  children: [],
                },
                {
                  type: 'text',
                  data: {
                    value: {
                      content: 'Some Title Here',
                    },
                  },
                  attributes: {
                    padding: '0px 0px 0px 0px',
                    align: 'left',
                    color: '#000000',
                    'font-size': '18px',
                  },
                  children: [],
                },
                {
                  type: 'text',
                  data: {
                    value: {
                      content:
                        'A small river named Duden flows by their place and supplies it with the necessary regelialia.<br>',
                    },
                  },
                  attributes: {
                    align: 'left',
                    'background-color': '#414141',
                    color: '#000000',
                    'font-weight': 'normal',
                    'border-radius': '3px',
                    padding: '10px 0px 10px 0px',
                    'inner-padding': '10px 25px 10px 5px',
                    'line-height': '1.5',
                    target: '_blank',
                    'vertical-align': 'middle',
                    border: 'none',
                    'text-align': 'center',
                    href: '#',
                    'font-size': '14px',
                  },
                  children: [],
                },
                // {
                //   type: 'button',
                //   data: {
                //     value: {
                //       content: 'Get Your Order Here!',
                //     },
                //   },
                //   attributes: {
                //     align: 'left',
                //     'background-color': '#f3a333',
                //     color: '#ffffff',
                //     'font-size': '13px',
                //     'font-weight': 'normal',
                //     'border-radius': '30px',
                //     padding: '10px 0px 10px 0px',
                //     'inner-padding': '10px 25px 10px 5px',
                //     'line-height': '120%',
                //     target: '_blank',
                //     'vertical-align': 'middle',
                //     border: 'none',
                //     'text-align': 'center',
                //     href: '#',
                //   },
                //   children: [],
                // },
              ],
            },
            {
              type: 'column',
              data: {
                value: {},
              },
              attributes: {
                padding: '0px 10px 0px 10px',
                border: 'none',
                'vertical-align': 'top',
              },
              children: [
                {
                  type: 'image',
                  data: {
                    value: {},
                  },
                  attributes: {
                    align: 'center',
                    height: 'auto',
                    padding: '10px 0px 10px 0px',
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVGHL9r9OucwArH8yO3rEDPryG4V3tSCBw-w&usqp=CAU',
                  },
                  children: [],
                },
                {
                  type: 'text',
                  data: {
                    value: {
                      content: 'Some Title Here',
                    },
                  },
                  attributes: {
                    padding: '0px 0px 0px 0px',
                    align: 'left',
                    color: '#000000',
                    'font-size': '18px',
                  },
                  children: [],
                },
                {
                  type: 'text',
                  data: {
                    value: {
                      content:
                        'A small river named Duden flows by their place and supplies it with the necessary regelialia.<br>',
                    },
                  },
                  attributes: {
                    align: 'left',
                    'background-color': '#414141',
                    color: '#000000',
                    'font-weight': 'normal',
                    'border-radius': '3px',
                    padding: '10px 0px 10px 0px',
                    'inner-padding': '10px 0px 10px 0px',
                    'line-height': '1.5',
                    target: '_blank',
                    'vertical-align': 'middle',
                    border: 'none',
                    'text-align': 'center',
                    href: '#',
                    'font-size': '14px',
                  },
                  children: [],
                },
                // {
                //   type: 'button',
                //   data: {
                //     value: {
                //       content: 'Get Your Order Here!',
                //     },
                //   },
                //   attributes: {
                //     align: 'left',
                //     'background-color': '#f3a333',
                //     color: '#ffffff',
                //     'font-size': '13px',
                //     'font-weight': 'normal',
                //     'border-radius': '30px',
                //     padding: '10px 0px 10px 0px',
                //     'inner-padding': '10px 25px 10px 5px',
                //     'line-height': '120%',
                //     target: '_blank',
                //     'vertical-align': 'middle',
                //     border: 'none',
                //     'text-align': 'center',
                //     href: '#',
                //   },
                //   children: [],
                // },
              ],
            },
            {
              type:'column',
              data: {
                value: {},
              },
              attributes: {
                padding: '0px 15px 0px 10px',
                border: 'none',
                'vertical-align': 'top',
              },
              children: [
                {
                      type: 'image',
                      data: {
                        value: {},
                      },
                      attributes: {
                        align: 'center',
                        height: 'auto',
                        padding: '10px 0px 10px 0px',
                        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVGHL9r9OucwArH8yO3rEDPryG4V3tSCBw-w&usqp=CAU',
                      },
                      children: [],
                    },
                    {
                      type: 'text',
                      data: {
                        value: {
                          content: 'Some Title Here',
                        },
                      },
                      attributes: {
                        padding: '0px 0px 0px 0px',
                        align: 'left',
                        color: '#000000',
                        'font-size': '18px',
                      },
                      children: [],
                    },
                    {
                      type: 'text',
                      data: {
                        value: {
                          content:
                            'A small river named Duden flows by their place and supplies it with the necessary regelialia.<br>',
                        },
                      },
                      attributes: {
                        align: 'left',
                        'background-color': '#414141',
                        color: '#000000',
                        'font-weight': 'normal',
                        'border-radius': '3px',
                        padding: '10px 0px 10px 0px',
                        'inner-padding': '10px 0px 10px 0px',
                        'line-height': '1.5',
                        target: '_blank',
                        'vertical-align': 'middle',
                        border: 'none',
                        'text-align': 'center',
                        href: '#',
                        'font-size': '14px',
                      },
                      children: [],
                    },
                    // {
                    //     type: 'button',
                    //     data: {
                    //       value: {
                    //         content: 'Get Your Order Here!',
                    //       },
                    //     },
                    //     attributes: {
                    //       align: 'left',
                    //       'background-color': '#f3a333',
                    //       color: '#ffffff',
                    //       'font-size': '13px',
                    //       'font-weight': 'normal',
                    //       'border-radius': '30px',
                    //       padding: '10px 0px 10px 0px',
                    //       'inner-padding': '10px 25px 10px 5px',
                    //       'line-height': '120%',
                    //       target: '_blank',
                    //       'vertical-align': 'middle',
                    //       border: 'none',
                    //       'text-align': 'center',
                    //       href: '#',
                    //     },
                    //     children: [],
                    //   },
              ],
            },
          ],
        },
      ],
    };
    return mergeBlock(defaultData, payload);
  },
  validParentType: [BasicType.PAGE, BasicType.WRAPPER],
  render(params) {
    return (
      <BasicBlock
        params={params}
        tag='mj-hero'
      />
    );
  },
});
