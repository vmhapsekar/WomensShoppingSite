const Enzyme = require('enzyme')
const EnzymeAdapter = require('enzyme-adapter-react-16')

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() })

/*
 Jest outputs warning (such as PropType validations) to console.error.
 Below captures warnings we are interested in testing and throws an error
 for each relevant warning so that a unit test can verify the warning.
 */
console.error = message => {
  if (message.indexOf('Input elements should not switch from controlled to uncontrolled') === -1) {
    throw new Error(message.replace(/\n/g, ' ').replace(/ {2}/g, ''))
  }
}
