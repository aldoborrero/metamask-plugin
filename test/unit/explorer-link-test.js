var assert = require('assert')
var linkGen = require('../../ui/lib/explorer-link')

describe('explorer-link', function () {
  it('adds ropsten prefix to ropsten test network', async function () {
    var result = await linkGen('hash', '3')
    assert.notEqual(result.indexOf('ropsten'), -1, 'ropsten injected')
  })

  it('adds kovan prefix to kovan test network', async function () {
    var result = await linkGen('hash', '42')
    assert.notEqual(result.indexOf('kovan'), -1, 'kovan injected')
  })
})
