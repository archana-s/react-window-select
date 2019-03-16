import React from 'react';

import { SimpleVirtualizedSelect } from './SimpleVirtualizedSelect';
import { SelectWithCustomOptionRenderer } from './SelectWithCustomOptionRenderer';

export class Examples extends React.PureComponent {
  render() {
    return (
      <>
        <div className="simple-select">
          <SimpleVirtualizedSelect />
        </div>
        <br />
        <div className="select-option-renderer">
          <SelectWithCustomOptionRenderer />
        </div>
      </>
    )
  }
}