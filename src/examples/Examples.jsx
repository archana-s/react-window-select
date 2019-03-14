import React from 'react';

import { SimpleVirtualizedSelect } from './SimpleVirtualizedSelect';
import { SelectWithCustomOptionRenderer } from './SelectWithCustomOptionRenderer';

export class Examples extends React.PureComponent {
  render() {
    return (
      <>
        <SimpleVirtualizedSelect />
        <br />
        <SelectWithCustomOptionRenderer />
      </>
    )
  }
}