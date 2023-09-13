import { Stack } from '@demo/components/Stack';
import { useFocusIdx, useEditorProps } from 'vikasit-email-editor';
import { AttributesPanelWrapper, ColorPickerField, ImageUploaderField, NumberField, TextField } from 'vikasit-email-extensions';
import React from 'react';


export function Panel() {
  const { focusIdx } = useFocusIdx();
  const { onUploadImage } = useEditorProps();
  return (
    <AttributesPanelWrapper style={{ padding: '20px' }}>
      <Stack vertical>
        {/* <NumberField
          label='Quantity'
          inline
          max={6}
          name={`${focusIdx}.data.value.quantity`}
        /> */}
        <ImageUploaderField
              label={t('src')}
              labelHidden
              name={`${focusIdx}.attributes.src`}
              helpText={t(
                'The image suffix should be .jpg, jpeg, png, gif, etc. Otherwise, the picture may not be displayed normally.',
              )}
              uploadHandler={onUploadImage}
            />
        <TextField
          label='Title'
          name={`${focusIdx}.data.value.title`}
          inline
          alignment='center'
        />
        <TextField
          label='Button text'
          name={`${focusIdx}.data.value.buttonText`}
          inline
          alignment='center'
        />
        {/* <TextField
          label='Button rounded'
          name={`${focusIdx}.data.value.button-radius`}
          inline
          border-radius='20px'
        /> */}
        <ColorPickerField
          label='Background color'
          name={`${focusIdx}.attributes.background-color`}
          inline
          alignment='center'
        />
        <ColorPickerField
          label='Title color'
          name={`${focusIdx}.attributes.title-color`}
          inline
          alignment='center'
        />
        <ColorPickerField
          label='Location name color'
          name={`${focusIdx}.attributes.product-name-color`}
          inline
          alignment='center'
        />
        <ColorPickerField
          label='message color'
          name={`${focusIdx}.attributes.product-price-color`}
          inline
          alignment='center'
        />
        <ColorPickerField
          label='Button color'
          name={`${focusIdx}.attributes.button-color`}
          inline
          alignment='center'
        />
        <ColorPickerField
          label='Button text color'
          name={`${focusIdx}.attributes.button-text-color`}
          inline
          alignment='center'
        />
      </Stack>
    </AttributesPanelWrapper>
  );
}
