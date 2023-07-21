import React from 'react';
import { useNsUIColorScheme, rem } from '@ns-ui/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { HeaderControl } from './HeaderControl';

export function ColorSchemeControl() {
  const { colorScheme, toggleColorScheme } = useNsUIColorScheme();

  return (
    <HeaderControl
      onClick={() => toggleColorScheme()}
      tooltip={`${colorScheme === 'dark' ? 'Light' : 'Dark'} mode`}
    >
      {colorScheme === 'dark' ? (
        <IconSun size={rem(22)} stroke={1.5} />
      ) : (
        <IconMoon size={rem(22)} stroke={1.5} />
      )}
    </HeaderControl>
  );
}
