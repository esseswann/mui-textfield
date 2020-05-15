import { createElement as $, StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  $(StrictMode, null,
    $(App)),
  document.getElementById('root'))