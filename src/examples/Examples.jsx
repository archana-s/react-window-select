import React from 'react';

import { SimpleVirtualizedSelect } from './SimpleVirtualizedSelect';
import { SelectWithCustomOptionRenderer } from './SelectWithCustomOptionRenderer';

export class Examples extends React.PureComponent {
  render() {
    return (
      <ul style={{ listStyleType: 'none' }}>
        <li>
          <h3> Simple Select </h3>
          <div className="simple-select">
            <SimpleVirtualizedSelect />
          </div>
        </li>
        <li className="select-option-renderer">
          <h3> Select with Custom Option Renderer </h3>
          <SelectWithCustomOptionRenderer />
        </li>
      </ul>
    )
  }
}