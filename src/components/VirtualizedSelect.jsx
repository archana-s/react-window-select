import React from 'react';
import { FixedSizeList as List } from 'react-window';
import Select from 'react-select';

import './VirtualizedSelect.css';

class MenuList extends React.PureComponent {
  constructor(props) {
    super(props);
    this._optionRenderer = this._optionRenderer.bind(this);
  }
  
  render() {
    let { children, 
      options, 
      selectProps: { maxHeight, optionHeight, width, value: selectedValue, optionRenderer }
    } = this.props
    optionRenderer = optionRenderer || this._optionRenderer

    const indexOfSelectedOption = selectedValue ? options.findIndex((option) => selectedValue.value === option.value) : 0;
    const initialScrollOffset = (indexOfSelectedOption > -1 ? indexOfSelectedOption : 0) * optionHeight;

    const childrenArray =  Array.from(children);

    options = childrenArray.map((child, index) => ({
        label: child.props.label,
        value: child.props.value, 
        isDisabled: child.props.isDisabled,
        className: this._getClassNamesForOption(index, children),
        selectOption: this.props.selectOption,
        innerRef: child.props.innerRef,
        onMouseOver: child.props.innerProps.onMouseOver
      })
    )

    return (
      <List
        height={maxHeight}
        itemCount={options.length}
        itemSize={optionHeight}
        width={width}
        itemData={options}
        initialScrollOffset={initialScrollOffset}
      >
        {optionRenderer}
      </List>
    )
  }

  _getClassNamesForOption(index, children) {
    return `VirtualizedSelectOption 
        ${children[index].props.isFocused ? 'VirtualizedSelectFocusedOption' : ''}
        ${children[index].props.isDisabled ? 'VirtualizedSelectDisabledOption' : ''}
        ${children[index].props.isSelected ? 'VirtualizedSelectSelectedOption' : ''}
    `;
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
        {options[index].value}
      </div> 
    )
  }
}

class VirtualizedSelect extends React.Component {
  constructor(props) {
    super(props)
    const selectedValue = props.options ? 
      (props.value ? props.options.find((item) => props.value.value === item.value) : props.options[0]) 
      : null

    this.state = {
      selectedValue
    }
    this._setSelectRef = this._setSelectRef.bind(this)
    this._onSelectChange = this._onSelectChange.bind(this)
  }

  render() {
    return (
      <Select
        { ...this.props }
        components={{ MenuList }}
        ref={this._setSelectRef}
        value={this.state.selectedValue}
        onChange={this._onSelectChange}
      />
    );
  }

  _onSelectChange(selectedOption) {
    const { value, label } = selectedOption;
    this.setState({
      selectedValue: this.props.options.find(item => item.value === value)
    })
    if (this.props.onChange) {
      this.props.onChange({ label, value });
    }
  }

  _setSelectRef(ref) {
    this._selectRef = ref
  }
}

VirtualizedSelect.defaultProps = {
  maxHeight: 200,
  optionHeight: 35,
}

export { VirtualizedSelect }