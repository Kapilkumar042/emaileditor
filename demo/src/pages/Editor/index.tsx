/* eslint-disable react/jsx-wrap-multilines */
//editors
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import template from '@demo/store/template';
import { useAppSelector } from '@demo/hooks/useAppSelector';
import { useLoading } from '@demo/hooks/useLoading';
import {
  Button,
  ConfigProvider,
  Dropdown,
  Form,
  Input,
  Menu,
  Message,
  Modal,
  PageHeader,
  Select,
  Layout,
} from '@arco-design/web-react';
import { useQuery } from '@demo/hooks/useQuery';
import { useHistory } from 'react-router-dom';
import { cloneDeep, set, isEqual } from 'lodash';
import { Loading } from '@demo/components/loading';
import mjml from 'mjml-browser';
import { copy } from '@demo/utils/clipboard';
import { useEmailModal } from './components/useEmailModal';
import services from '@demo/services';
import { IconMoonFill, IconSunFill } from '@arco-design/web-react/icon';
import { Liquid } from 'liquidjs';
import { saveAs } from 'file-saver';
import {
  BlockAvatarWrapper,
  EmailEditor,
  EmailEditorProvider,
  EmailEditorProviderProps,
  IEmailTemplate,
} from 'vikasit-email-editor';

import CustomHeader from '@demo/components/Header/CustomHeader';

import { Stack } from '@demo/components/Stack';
import { pushEvent } from '@demo/utils/pushEvent';
import { FormApi } from 'final-form';
import { UserStorage } from '@demo/utils/user-storage';

import { useCollection } from './components/useCollection';
import { AdvancedType, BasicType, IBlockData, JsonToMjml } from 'vikasit-email-core';
import {
  BlockMarketManager,
  ExtensionProps,
  MjmlToJson,
  StandardLayout,
} from 'vikasit-email-extensions';
import { AutoSaveAndRestoreEmail } from '@demo/components/AutoSaveAndRestoreEmail';

// Register external blocks
import './components/CustomBlocks';

import 'vikasit-email-editor/lib/style.css';
import 'vikasit-email-extensions/lib/style.css';
import blueTheme from '@arco-themes/react-tailwind-sky/css/arco.css?inline';
import purpleTheme from '@arco-themes/react-easy-email-theme-purple/css/arco.css?inline';
import greenTheme from '@arco-themes/react-easy-email-theme-green/css/arco.css?inline';
import { testMergeTags } from './testMergeTags';
import { useMergeTagsModal } from './components/useMergeTagsModal';

import { useWindowSize } from 'react-use';
import { CustomBlocksType } from './components/CustomBlocks/constants';
import localesData from 'vikasit-email-localization/locales/locales.json';
import { Uploader } from '@demo/utils/Uploader';
import axios from 'axios';
import enUS from '@arco-design/web-react/es/locale/en-US';
import TextIcon from '../../Icons/svg/block-full-text-single-tone-v1.svg';
import ButtonIcon from '../../Icons/svg/block-button-v1-single-tone.svg';
import SocialIcon from '../../Icons/svg/block-social-single-tone-v1.svg';
import ImageIcon from '../../Icons/svg/block-image-text-vertical-single-tone-v1.svg';
import Image3xIcon from '../../Icons/svg/block-image-3x-v2-single-tone.svg';
import Image2xIcon from '../../Icons/svg/block-image-2x-v2-single-tone.svg';
import ImageText3XIcon from '../../Icons/svg/block-image-text-3x-v1-single-tone.svg';
// import ImageIcon from '../../Icons/svg/block-single-image-v1-single-tone.svg';
import VerticalIcon from '../../Icons/svg/block-image-text-vertical-single-tone-v1.svg';
import RightTextImageIcon from '../../Icons/svg/block-image-text-horizontal-single-tone-v1.svg';
import WrapperIcon from '../../Icons/svg/block-wrapper-single-tone-v1.svg';
import DividerIcon from '../../Icons/svg/block-divider-single-tone-v1.svg';
import HeroIcon from '../../Icons/svg/block-hero-single-tone-v1.svg';
import SpacerIcon from '../../Icons/svg/block-horizontal-spacing-single-tone-v1.svg';
import HeaderIcon from '../../Icons/svg/block-header-single-tone-v1.svg';
import TitleIcon from '../../Icons/svg/block-title-single-tone-v1.svg';
import TwoTextIcon from '../../Icons/svg/block-text-text-horizontal-single-tone-v1.svg';

import ShadowIcon from '../../Icons/svg/block-shadow-single-tone-v1.svg';

import col25_75 from '../../Icons/svg/layout-25-75-single-tone-v1.svg';
import col75_25 from '../../Icons/svg/layout-75-25-single-tone-v1.svg';
import col50_50 from '../../Icons/svg/layout-50-50-single-tone-v1.svg';
import col33_67 from '../../Icons/svg/layout-33-67-single-tone-v1.svg';
import col67_33 from '../../Icons/svg/layout-67-33-single-tone-v1.svg';
import col25_25_50 from '../../Icons/svg/layout-25-25-50-single-tone-v1.svg';
import col50_25_25 from '../../Icons/svg/layout-50-25-25-single-tone-v1.svg';
import col33_33_33 from '../../Icons/svg/layout-33-33-33-single-tone-v1.svg';
import col25_25_25_25 from '../../Icons/svg/layout-25-25-25-25-single-tone-v1.svg';

//  import layoutIcon from '../../Icons/svg/layout-25-25-25-25-single-tone-v1.svg';

import FooterIcon from '../../Icons/svg/block-footer-single-tone-v1.svg';

console.log(localesData);

const defaultCategories: ExtensionProps['categories'] = [
  {
    label: 'Content',
    active: true,
    blocks: [
      {
        type: AdvancedType.TEXT,
        iconUrl: TextIcon,
      },
      {
        type: AdvancedType.IMAGE,
        iconUrl: ImageIcon,

        payload: { attributes: { padding: '0px 0px 0px 0px' } },
      },
      {
        type: AdvancedType.BUTTON,
        iconUrl: ButtonIcon,
      },
      {
        type: AdvancedType.SOCIAL,
        iconUrl: SocialIcon,
      },
      {
        type: AdvancedType.DIVIDER,
        iconUrl: DividerIcon,
      },
      {
        type: AdvancedType.SPACER,
        iconUrl: SpacerIcon,
      },
      {
        type: AdvancedType.HERO,
        iconUrl: HeroIcon,
      },
      {
        type: AdvancedType.WRAPPER,
        iconUrl: WrapperIcon,
      },
      {
        type: AdvancedType.HEADER_WITH_LOGO,
        iconUrl: HeaderIcon,
      },
      {
        type: AdvancedType.IMAGE_WITH_RIGHT_TEXT,
        iconUrl: RightTextImageIcon,
      },

      {
        type: AdvancedType.VERTICAL,
        iconUrl: VerticalIcon,
      },
      {
        type: AdvancedType.TITLE,
        iconUrl: TitleIcon,
      },
      {
        type: AdvancedType.TWOTEXTNEW,
        iconUrl: TwoTextIcon,
      },
      {
        type: AdvancedType.IMAGE_WITH_3_VERTICAL_TEXT,
        iconUrl: ImageText3XIcon,
      },
      {
        type: AdvancedType.IMAGE_3X,
        iconUrl: Image3xIcon,
      },
      {
        type: AdvancedType.IMAGE_2X,
        iconUrl: Image2xIcon,
      },
      {
        type: AdvancedType.SHADOW,
        iconUrl: ShadowIcon,
      },

      {
        type: AdvancedType.FOOTER,
        iconUrl: FooterIcon,
      },
    ],
  },
  {
    label: 'Layout',
    active: true,
    displayType: 'column',
    blocks: [
      // {
      //   title: '3 columns',
      //   payload: [
      //     ['33.33%', '33.33%', '33.33%'],
      //     ['25%', '25%', '50%'],
      //     ['50%', '25%', '25%'],
      //   ],
      // },
      {
        title: '2 columns',
        payload: [['50%', '50%']],
        iconUrl: col50_50,
      },
      {
        title: '2 columns',
        payload: [['33%', '67%']],
        iconUrl: col33_67,
      },
      {
        title: '2 columns',
        payload: [['67%', '33%']],
        iconUrl: col67_33,
      },
      {
        title: '2 columns',
        payload: [['25%', '75%']],
        iconUrl: col25_75,
      },
      {
        title: '2 columns',
        payload: [['75%', '25%']],
        iconUrl: col75_25,
      },
      {
        title: '3 columns',
        payload: [['33.33%', '33.33%', '33.33%']],
        iconUrl: col33_33_33,
      },
      {
        title: '3 columns',
        payload: [['25%', '25%', '50%']],
        iconUrl: col25_25_50,
      },
      {
        title: '3 columns',
        payload: [['50%', '25%', '25%']],
        iconUrl: col50_25_25,
      },

      {
        title: '4 columns',
        payload: [['25%', '25%', '25%', '25%']],
        iconUrl: col25_25_25_25,
      },
    ],
  },
  {
    label: 'Custom',
    active: true,
    displayType: 'custom',
    blocks: [
      <BlockAvatarWrapper type={CustomBlocksType.PRODUCT_RECOMMENDATION}>
        <div
          style={{
            position: 'relative',
            // border: '1px solid #ccc',
            marginBottom: 20,
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <img
            src={'#'}
            style={{
              maxWidth: '100%',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 2,
            }}
          />
        </div>
      </BlockAvatarWrapper>,
    ],
  },
];

const imageCompression = import('browser-image-compression');

const fontList = [
  'Arial',
  'Tahoma',
  'Verdana',
  'Times New Roman',
  'Courier New',
  'Georgia',
  'Lato',
  'Montserrat',
  '黑体',
  '仿宋',
  '楷体',
  '标楷体',
  '华文仿宋',
  '华文楷体',
  '宋体',
  '微软雅黑',
].map(item => ({ value: item, label: item }));

export default function Editor() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState<'blue' | 'green' | 'purple'>('blue');
  const dispatch = useDispatch();
  const history = useHistory();
  const templateData = useAppSelector('template');
  const [locale, setLocale] = useState('en');
  const { addCollection, removeCollection, collectionCategory } = useCollection();
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');
  const { width } = useWindowSize();

  const emailPattern =
    // eslint-disable-next-line
    /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;

  const postEmail = async () => {
    if (!emailPattern.test(text)) {
      Message.error('Please enter a valid email address');
      return;
    }
    pushEvent({
      event: 'TryNewEditor',
      payload: { email: text },
    });
    await axios.post(`/api/email`, {
      email: text,
    });
    setVisible(false);
  };

  const smallScene = width < 1400;

  const { openModal, modal } = useEmailModal();
  const { id, userId } = useQuery();
  const loading = useLoading(template.loadings.fetchById);
  const {
    modal: mergeTagsModal,
    openModal: openMergeTagsModal,
    mergeTags,
    setMergeTags,
  } = useMergeTagsModal(testMergeTags);

  const isSubmitting = useLoading([
    template.loadings.create,
    template.loadings.updateById,
  ]);

  useEffect(() => {
    if (collectionCategory) {
      BlockMarketManager.addCategories([collectionCategory]);
      return () => {
        BlockMarketManager.removeCategories([collectionCategory]);
      };
    }
  }, [collectionCategory]);

  useEffect(() => {
    if (id) {
      if (!userId) {
        UserStorage.getAccount().then(account => {
          dispatch(template.actions.fetchById({ id: +id, userId: account.user_id }));
        });
      } else {
        dispatch(template.actions.fetchById({ id: +id, userId: +userId }));
      }
    } else {
      dispatch(template.actions.fetchDefaultTemplate(undefined));
    }

    return () => {
      dispatch(template.actions.set(null));
    };
  }, [dispatch, id, userId]);

  useEffect(() => {
    if (isDarkMode) {
      document.body.setAttribute('arco-theme', 'dark');
    } else {
      document.body.removeAttribute('arco-theme');
    }
  }, [isDarkMode]);

  const onUploadImage = async (blob: Blob) => {
    const compressionFile = await (
      await imageCompression
    ).default(blob as File, {
      maxWidthOrHeight: 1440,
    });
    return services.common.uploadByQiniu(compressionFile);
  };

  const onChangeTheme = useCallback(t => {
    setTheme(t);
  }, []);

  const onChangeMergeTag = useCallback((path: string, val: any) => {
    setMergeTags(old => {
      const newObj = cloneDeep(old);
      set(newObj, path, val);
      return newObj;
    });
  }, []);

  const onImportMJML = async ({
    restart,
  }: {
    restart: (val: IEmailTemplate) => void;
  }) => {
    const uploader = new Uploader(() => Promise.resolve(''), {
      accept: 'text/mjml',
      limit: 1,
    });

    const [file] = await uploader.chooseFile();
    const reader = new FileReader();
    const pageData = await new Promise<[string, IEmailTemplate['content']]>(
      (resolve, reject) => {
        reader.onload = function (evt) {
          if (!evt.target) {
            reject();
            return;
          }
          try {
            const pageData = MjmlToJson(evt.target.result as any);
            resolve([file.name, pageData]);
          } catch (error) {
            reject();
          }
        };
        reader.readAsText(file);
      },
    );

    restart({
      subject: pageData[0],
      content: pageData[1],
      subTitle: '',
    });
  };

  const onImportJSON = async ({
    restart,
  }: {
    restart: (val: IEmailTemplate) => void;
  }) => {
    const uploader = new Uploader(() => Promise.resolve(''), {
      accept: 'application/json',
      limit: 1,
    });

    const [file] = await uploader.chooseFile();
    const reader = new FileReader();
    const emailTemplate = await new Promise<IEmailTemplate>((resolve, reject) => {
      reader.onload = function (evt) {
        if (!evt.target) {
          reject();
          return;
        }
        try {
          const template = JSON.parse(evt.target.result as any) as IEmailTemplate;
          resolve(template);
        } catch (error) {
          reject();
        }
      };
      reader.readAsText(file);
    });

    restart({
      subject: emailTemplate.subject,
      content: emailTemplate.content,
      subTitle: emailTemplate.subTitle,
    });
  };

  const onExportMJML = (values: IEmailTemplate) => {
    const mjmlString = JsonToMjml({
      data: values.content,
      mode: 'production',
      context: values.content,
      dataSource: mergeTags,
    });

    pushEvent({ event: 'MJMLExport', payload: { values, mergeTags } });
    navigator.clipboard.writeText(mjmlString);
    saveAs(new Blob([mjmlString], { type: 'text/mjml' }), 'vikasit-email.mjml');
  };

  const onExportHTML = (values: IEmailTemplate) => {
    const mjmlString = JsonToMjml({
      data: values.content,
      mode: 'production',
      context: values.content,
      dataSource: mergeTags,
    });

    const html = mjml(mjmlString, {}).html;

    pushEvent({ event: 'HTMLExport', payload: { values, mergeTags } });
    navigator.clipboard.writeText(html);
    saveAs(new Blob([html], { type: 'text/html' }), 'vikasit-email.html');
  };

  const onExportJSON = (values: IEmailTemplate) => {
    navigator.clipboard.writeText(JSON.stringify(values, null, 2));
    saveAs(
      new Blob([JSON.stringify(values, null, 2)], { type: 'application/json' }),
      'vikasit-email.json',
    );
  };

  const onExportImage = async (values: IEmailTemplate) => {
    Message.loading('Loading...');
    const html2canvas = (await import('html2canvas')).default;
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    const mjmlString = JsonToMjml({
      data: values.content,
      mode: 'production',
      context: values.content,
      dataSource: mergeTags,
    });

    const html = mjml(mjmlString, {}).html;

    container.innerHTML = html;
    document.body.appendChild(container);

    const blob = await new Promise<any>(resolve => {
      html2canvas(container, { useCORS: true }).then(canvas => {
        return canvas.toBlob(resolve, 'png', 0.1);
      });
    });
    saveAs(blob, 'demo.png');
    Message.clear();
  };

  const initialValues: IEmailTemplate | null = useMemo(() => {
    if (!templateData) return null;
    const sourceData = cloneDeep(templateData.content) as IBlockData;
    return {
      ...templateData,
      content: sourceData, // replace standard block
    };
  }, [templateData]);

  const onSubmit = useCallback(
    async (
      values: IEmailTemplate,
      form: FormApi<IEmailTemplate, Partial<IEmailTemplate>>,
    ) => {
      pushEvent({ event: 'EmailSave' });
      if (id) {
        const isChanged = !(
          isEqual(initialValues?.content, values.content) &&
          isEqual(initialValues?.subTitle, values?.subTitle) &&
          isEqual(initialValues?.subject, values?.subject)
        );

        if (!isChanged) {
          Message.success('Updated success!');
          form.restart(values);
          return;
        }
        dispatch(
          template.actions.updateById({
            id: +id,
            template: values,
            success() {
              Message.success('Updated success!');
              form.restart(values);
            },
          }),
        );
      } else {
        dispatch(
          template.actions.create({
            template: values,
            success(id, newTemplate) {
              Message.success('Saved success!');
              form.restart(newTemplate);
              history.replace(`/editor?id=${id}`);
            },
          }),
        );
      }
    },
    [dispatch, history, id, initialValues],
  );

  const onBeforePreview: EmailEditorProviderProps['onBeforePreview'] = useCallback(
    (html: string, mergeTags) => {
      const engine = new Liquid();
      const tpl = engine.parse(html);
      return engine.renderSync(tpl, mergeTags);
    },
    [],
  );

  const themeStyleText = useMemo(() => {
    if (theme === 'green') return greenTheme;
    if (theme === 'purple') return purpleTheme;
    return blueTheme;
  }, [theme]);

  if (!templateData && loading) {
    return (
      <Loading loading={loading}>
        <div style={{ height: '100vh' }} />
      </Loading>
    );
  }

  if (!initialValues) return null;

  return (
    <ConfigProvider locale={enUS}>
      <div>
        <style>{themeStyleText}</style>
        <EmailEditorProvider
          key={id}
          height={'calc(100vh - 68px)'}
          data={initialValues}
          // interactiveStyle={{
          //   hoverColor: '#78A349',
          //   selectedColor: '#1890ff',
          // }}
          // onAddCollection={addCollection}
          // onRemoveCollection={({ id }) => removeCollection(id)}
          onUploadImage={onUploadImage}
          fontList={fontList}
          onSubmit={onSubmit}
          onChangeMergeTag={onChangeMergeTag}
          autoComplete
          enabledLogic
          // enabledMergeTagsBadge
          dashed={false}
          mergeTags={mergeTags}
          mergeTagGenerate={tag => `{{${tag}}}`}
          onBeforePreview={onBeforePreview}
          socialIcons={[]}
          locale={localesData[locale]}
        >
          {({ values }, { submit, restart }) => {
            return (
              <>
                <CustomHeader />
                <StandardLayout
                  compact={!smallScene}
                  categories={defaultCategories}
                >
                  <EmailEditor />
                </StandardLayout>
                <AutoSaveAndRestoreEmail />
              </>
            );
          }}
        </EmailEditorProvider>
        {modal}
        {mergeTagsModal}
        <Modal
          title={<p style={{ textAlign: 'left' }}>Leave your email</p>}
          visible={visible}
          onCancel={() => setVisible(false)}
          onOk={postEmail}
        >
          <Form.Item label='Email'>
            <Input
              value={text}
              onChange={setText}
            />
          </Form.Item>
        </Modal>
        <style>{`#bmc-wbtn {display:none !important;}`}</style>
      </div>
    </ConfigProvider>
  );
}

function replaceStandardBlockToAdvancedBlock(blockData: IBlockData) {
  const map = {
    [BasicType.TEXT]: AdvancedType.TEXT,
    [BasicType.TITLE]: AdvancedType.TITLE,

    [BasicType.BUTTON]: AdvancedType.BUTTON,
    [BasicType.IMAGE]: AdvancedType.IMAGE,
    [BasicType.DIVIDER]: AdvancedType.DIVIDER,
    [BasicType.SPACER]: AdvancedType.SPACER,
    [BasicType.SOCIAL]: AdvancedType.SOCIAL,
    [BasicType.ACCORDION]: AdvancedType.ACCORDION,
    [BasicType.CAROUSEL]: AdvancedType.CAROUSEL,
    [BasicType.NAVBAR]: AdvancedType.NAVBAR,
    [BasicType.WRAPPER]: AdvancedType.WRAPPER,
    [BasicType.SECTION]: AdvancedType.SECTION,
    [BasicType.GROUP]: AdvancedType.GROUP,
    [BasicType.COLUMN]: AdvancedType.COLUMN,
    [BasicType.HEADER_WITH_LOGO]: AdvancedType.HEADER_WITH_LOGO,
  };

  if (map[blockData.type]) {
    blockData.type = map[blockData.type];
  }
  blockData.children.forEach(replaceStandardBlockToAdvancedBlock);
  return blockData;
}
