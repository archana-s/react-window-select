import React from 'react';
import { WindowSelect } from 'react-window-select';

export class CustomSelectStyling extends React.PureComponent {
  constructor(props) {
    super(props)
    this._onChange = this._onChange.bind(this)
  }

  render() {
    const options = Array(200).fill({ label: 'Item', value: 'Item' })
      .map((item, index) => ({
        label: `${item.label}${index}`,
        value: `${item.label}${index}`
      }))

    return (
      <WindowSelect
        options={options}
        value={{ value: 'Item167', label: 'Item167' }}
        onChange={this._onChange}
      />
    )
  }

  _onChange(option) {
    // do something with it.
  }
}