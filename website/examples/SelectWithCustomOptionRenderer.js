import React from 'react';
import { WindowSelect } from 'react-window-select';

export class SelectWithCustomOptionRenderer extends React.PureComponent {
  constructor(props) {
    super(props)
    this._onChange = this._onChange.bind(this)
    this._optionRenderer = this._optionRenderer.bind(this)
    this._onMouseOver = this._onMouseOver.bind(this)
    this._onMouseOut = this._onMouseOut.bind(this)
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

  _onMouseOver(evt) {
    evt.currentTarget.style.backgroundColor = 'lavender';
  }

  _onMouseOut(evt) {
    evt.currentTarget.style.backgroundColor = 'transparent';
  }

  _optionRenderer(option) {
    let {
      label, 
      value, 
      ref, 
      classNames,
      style,
      events,
      isDisabled,
      isFocused, 
    } = option;

    events = {
      ...events,
      onMouseOver: this._onMouseOver,
      onMouseOut: this._onMouseOut
    }

    return (
      <div
        style={style}
        className={classNames}
        {...events}
        ref={ref}
        key={label}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ color: '#50A5A6' }}>{value}</div>
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