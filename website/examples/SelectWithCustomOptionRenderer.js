import React from 'react';
import { WindowSelect } from 'react-window-select';

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
        value: `${item.label}${index}`,
      }))

    return (
      <WindowSelect
        options={options}
        value={{ value: 'Item167', label: 'Item167' }}
        onChange={this._onChange}
        optionRenderer={this._optionRenderer}
        optionHeight={110}
        maxHeight={600}
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
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ color: '#50A5A6' }}>{options[index].value}</div>
          <p style={{ width: '80%', wordBreak: 'break-all', color: '#034F50', margin: '4px 0'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          </p>
        </div>
      </div>
    )
  }

  _onChange(option) {
    // do something with it.
  }
}