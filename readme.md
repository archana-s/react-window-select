# Select using react-window
An alternate to react-virtualized-select which is no longer supported. 
This uses the react-window's FixedSizeList and react-select 2.0. It currently supports fixed size menu list for a select item. 

## Usage
``` 
  import { WindowSelect } from 'react-window-select';

  <WindowSelect
    options={options}
    value={{ value: 'Item167', label: 'Item167' }}
    onChange={this._onChange}
    isClearable={true}
    styles={{ clearIndicator: ClearIndicatorStyles }}
  />
```

## Run locally  
* yarn 
* yarn website:build (Should start running on localhost:8080)
* yarn website:run
* yarn test after yarn website:run (to run puppeteer/jest)

