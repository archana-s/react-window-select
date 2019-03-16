import React from 'react';

import { AsyncSelect } from './AsyncSelect';
import { SimpleVirtualizedSelect } from './SimpleVirtualizedSelect';
import { SelectWithCustomOptionRenderer } from './SelectWithCustomOptionRenderer';

export class Examples extends React.PureComponent {
  render() {
    return (
      <ul style={{ listStyleType: 'none' }}>
        <li className="simple-select">
          <h3>Simple Virtualized Select</h3>
          <SimpleVirtualizedSelect />
        </li>
        <li className="select-option-renderer">
          <h3>Custom Option Renderer</h3>
          <SelectWithCustomOptionRenderer />
        </li>
        <li className="select-option-renderer">
          <h3>Async Select</h3>
          <AsyncSelect />
        </li>
      </ul>
    )
  }
}