import React from 'react';
import { FixedSizeList as List } from 'react-window';
import Select from 'react-select';

import './WindowSelect.css';

class MenuList extends React.PureComponent {
  constructor(props) {
    super(props);
    this._optionRenderer = this._optionRenderer.bind(this);
    this._setListRef = this._setListRef.bind(this);
    this.focusedOptionIndex = -1;
  }

  componentDidUpdate() {
    /* To support keyboard press on the menu list. As the user keeps pressing down, the focusedIndex
       value changes and so should the scroll position on the fixed list. 
    */
    if (this.focusedOptionIndex > -1 && this._listRef) {
      this._listRef.scrollToItem(this.focusedOptionIndex);
      this.focusedOptionIndex = -1;
    }
  }
  
  render() {
    let { children, 
      options, 
      selectProps: { maxHeight, optionHeight, width, value: selectedValue, optionRenderer },
    } = this.props
    optionRenderer = optionRenderer || this._optionRenderer

    const childrenArray = Array.from(children);
    this.focusedOptionIndex = childrenArray.findIndex(child => child.props.isFocused); 

    const selectedOptionIndex =  selectedValue ? 
      options.findIndex((option) => selectedValue.value === option.value) : 0;
    const initialScrollOffset = (selectedOptionIndex > -1 ? selectedOptionIndex : 0) * optionHeight;

    options = childrenArray.map((child, index) => ({
      label: child.props.label,
      value: child.props.value, 
      isDisabled: child.props.isDisabled,
      isFocused: child.props.isFocused,
      className: this._getClassNamesForOption(index, children),
      selectOption: this.props.selectOption,
      innerRef: child.props.innerRef,
      onMouseOver: child.props.innerProps.onMouseOver
    }))

    return (
      <List
        height={maxHeight}
        itemCount={options.length}
        itemSize={optionHeight}
        width={width}
        itemData={options}
        initialScrollOffset={initialScrollOffset}
        ref={this._setListRef}
      >
        {optionRenderer}
      </List>
    )
  }

  _setListRef(ref) {
    this._listRef = ref;
  }

  _getClassNamesForOption(index, children) {
    return `VirtualizedSelectOption 
      ${children[index].props.isFocused ? 'VirtualizedSelectFocusedOption' : ''}
      ${children[index].props.isDisabled ? 'VirtualizedSelectDisabledOption' : ''}
      ${children[index].props.isSelected ? 'VirtualizedSelectSelectedOption' : ''}`;
  }

  _optionRenderer({ style, index, data: options }) {
    const ref = options[index].innerRef;
    const events = options[index].isDisabled ? {} :
      {
        onClick: () => options[index].selectOption(options[index]),
        onMouseOver: options[index].onMouseOver,
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

class WindowSelect extends React.Component {
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

  focus() {
    if (this._selectRef) {
      return this._selectRef.focus()
    }
  }

  render() {
    const Select = this._getSelectComponent();
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

  _onSelectChange(selectedOption, details) {
    const { action } = details;
    let selectedValue;

    if (action === 'clear') {
      selectedValue = null;
    }

    if (selectedOption){
      const { value, label } = selectedOption;
      selectedValue = this.props.options.find(item => item.value === value)
    }

    this.setState({
      selectedValue
    })
    
    if (this.props.onChange) {
      this.props.onChange(selectedOption);
    }
  }

  _setSelectRef(ref) {
    this._selectRef = ref
  }

  _getSelectComponent() {
    if (this.props.async) {
      return Select.async
    } else {
      return Select
    }
  }
}

WindowSelect.defaultProps = {
  maxHeight: 200,
  optionHeight: 35,
  async: false
}

export default WindowSelect