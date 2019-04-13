# Select using react-window
Infinite scrolling list in a select component. This uses react-window and react-select 2.0. 
This is an alternate to react-virtualized-select which is no longer supported ([See here](https://github.com/bvaughn/react-virtualized-select#this-component-is-no-longer-supported));

## react-window-select vs react-virtualized-select
* react-window-select uses react-select 2.0. react-virtualized-select uses react-select 1.0
* react-window-select only exposes fixed size list item.

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

Here are a couple of [examples](https://cryptic-plains-61029.herokuapp.com/).

## Run locally  
* `yarn`
* `yarn build`
* `yarn local:start` (Should start running on localhost:8080)
* `yarn test` (to run puppeteer/jest)
