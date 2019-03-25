import React from 'react';
import { VirtualizedSelect } from '../components/VirtualizedSelect';

export class AsyncSelect extends React.PureComponent {
  constructor(props) {
    super(props)
    this._onChange = this._onChange.bind(this)
  }

  render() {
    const options = Array(300).fill({ label: 'Item', value: 'Item' })
      .map((item, index) => ({
        label: `${item.label}${index}`,
        value: `${item.label}${index}`
      }))

    /* TODO: Fix async */
    return (
      <VirtualizedSelect
        options={options}
        value={{ value: 'Item167', label: 'Item167' }}
        onChange={this._onChange}
        // async={true}
      />
    )
  }

  _onChange(option) {
    // do something with it.
  }
}