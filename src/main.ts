import $ from 'jquery'
import { registryCustomComponents } from './components'

registryCustomComponents()

$('#show-btn').on('click', () => {
  const value = $('#counter').prop('value')
  alert(`value is ${value}`)
})
