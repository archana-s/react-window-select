# Select using react-window
An alternate to react-virtualized-select which is no longer supported. 
This uses the react-window's FixedSizeList and react-select 2.0. It currently supports fixed size menu list for a select item. 

## Usage
``` 
  import { VirtualizedSelect } from 'react-window-select';

  <VirtualizedSelect
    options={options}
    value={{ value: 'Item167', label: 'Item167' }}
    onChange={this._onChange}
    isClearable={true}
  />
```

## Run locally  
* yarn 
* yarn local-start (Should start running on localhost:8080)
* yarn test (to run puppeteer/jest)

