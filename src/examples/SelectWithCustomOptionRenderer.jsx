import React from 'react';
import { VirtualizedSelect } from '../components/VirtualizedSelect';

export class SelectWithCustomOptionRenderer extends React.PureComponent {
  constructor(props) {
    super(props)
    this._onChange = this._onChange.bind(this)
    this._optionRenderer = this._optionRenderer.bind(this)
  }

  render() {
    const options = Array(200).fill({ label: 'Item', value: 'Item' })
      .map((item, index) => ({
        label: `${item.label}${index}`,
        value: `${item.label}${index}`
      }))

    return (
      <VirtualizedSelect
        options={options}
        value={{ value: 'Item167', label: 'Item167' }}
        onChange={this._onChange}
        optionRenderer={this._optionRenderer}
      />
    )
  }

  _optionRenderer({ style, index, data: options }) {
    const ref = options[index].innerRef;
    const events = options[index].isDisabled ? {} :
      {
        onClick: () => options[index].selectOption(options[index]),
        onMouseOver: options[index].onMouseOver
      }

    return (
      <div
        style={style}
        className={options[index].className}
        {...events}
        ref={ref}
        key={options[index].label}
      >
        Hi {options[index].value}
      </div>
    )
  }

  _onChange({ value, label }) {
    // do something with it.
  }
}