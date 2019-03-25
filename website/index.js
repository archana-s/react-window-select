import React from 'react';
import ReactDOM from 'react-dom';
import { Examples } from './examples/Examples';

window.onload = function() {
  const element = <Examples />;
  ReactDOM.render(
    element,
    document.getElementById('list')
  );
}