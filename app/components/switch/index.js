"use client"; // this is a client componentimport React from 'react';
import * as React from 'react';
import { useState } from 'react';
import clsx from 'clsx';
import { styled } from '@mui/system';
import useSwitch from '@mui/base/useSwitch';

const SwitchRoot = styled('span')`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 36px;
  padding: 8px;
`;

const SwitchInput = styled('input')`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
  cursor: pointer;
`;

const SwitchThumb = styled('span')`
  position: absolute;
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  top: 3px;
  left: 4px;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    display: block;
    content: '';

    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CloseIcon"><path fill="${encodeURIComponent(
    '#e74c3c',
)}" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>')
      center center no-repeat;
      background-color: #fff;
    border-radius: 50%;
  }

  &.focusVisible {
    background-color: #79b;
  }

  &.checked {
    transform: translateX(24px);

    &::before {
        background-color: #fff;
        border-radius: 50%;
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckIcon"><path fill="${encodeURIComponent(
    '#198038',
)}" d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>');
    }
  }
`;

const SwitchTrack = styled('span')(
    ({ theme }) => `
  width: 100%;
  height: 100%;
  display: block;
`,
);

function MUISwitch(props) {

    const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

    const stateClasses = {
        checked,
        disabled,
        focusVisible,
    };

    return (
        <diV className='addCtaSwitch'>
            <SwitchRoot className={clsx(stateClasses)}>
                <SwitchTrack>
                    <SwitchThumb className={clsx(stateClasses)} />
                </SwitchTrack>
                <SwitchInput {...getInputProps()} />
            </SwitchRoot>
        </diV>
    );
}
export default MUISwitch;
