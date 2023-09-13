import { Stack } from '@demo/components/Stack';
import { useFocusIdx } from 'vikasit-email-editor';
import { AttributesPanelWrapper, ColorPickerField, Height, NumberField, Padding, TextField, Width } from 'vikasit-email-extensions';
import React, { useCallback } from 'react';
import { Grid } from '@arco-design/web-react';


export function FooterPanel() {
  const { focusIdx } = useFocusIdx();
  return (
    <AttributesPanelWrapper style={{ padding: '20px' }}>
      <Stack vertical>
        {/* <NumberField
          label='Quantity'
          inline
          max={6}
          name={`${focusIdx}.data.value.quantity`}
        /> */}
        <TextField
          label='Title'
          name={`${focusIdx}.data.value.title`}
          inline
          alignment='center'
        />
        {/* <TextField
          label='Button text'
          name={`${focusIdx}.data.value.buttonText`}
          inline
          alignment='center'
        /> */}
        <ColorPickerField
          label='Background color'
          name={`${focusIdx}.attributes.background-color`}
          inline
          alignment='center'
        />
        {/* <Grid.Row>
              <Grid.Col span={11}>
                <Width />
              </Grid.Col>
              <Grid.Col
                offset={1}
                span={11}
              >
                <Height />
              </Grid.Col>
            </Grid.Row>

            <Padding /> */}
        <ColorPickerField
          label='Title color'
          name={`${focusIdx}.attributes.title-color`}
          inline
          alignment='center'
        />
        <ColorPickerField
          label='Location name color'
          name={`${focusIdx}.attributes.location-color`}
          inline
          alignment='center'
        />
        <ColorPickerField
          label='message color'
          name={`${focusIdx}.attributes.message-color`}
          inline
          alignment='center'
        />
        <ColorPickerField
          label='resion color'
          name={`${focusIdx}.attributes.resion-color`}
          inline
          alignment='center'
        />
        
        <ColorPickerField
          label='buttonText color'
          name={`${focusIdx}.attributes.buttonText-color`}
          inline
          alignment='center'
        />
        {/* <ColorPickerField
          label='Button color'
          name={`${focusIdx}.attributes.button-color`}
          inline
          alignment='center'
        /> */}
        {/* <ColorPickerField
          label='Button text color'
          name={`${focusIdx}.attributes.button-text-color`}
          inline
          alignment='center'
        /> */}
      </Stack>
    </AttributesPanelWrapper>
  );
}

