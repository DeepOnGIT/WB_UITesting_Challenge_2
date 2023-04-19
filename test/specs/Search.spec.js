const { expect } = require('chai')
const Search = require('../pageobjects/Search.POM')

const textToSearch = 'India' //Text to be entered in search box

describe('Validate CNN web page', () => {
    it('Validate search functionality', async () => {
        await Search.openURL()
        await Search.waitAndClickSearchIcon()
        await Search.waitAndEnterTextInSearchBar(textToSearch)
        await Search.clickSearchButton()

        const queryDisplayResult = await Search.resultText.getText()
        await expect(queryDisplayResult).to.be.equal(textToSearch)

        await Search.scrollToFooterSearchAndEnterText(textToSearch)

        const footerDisplayResult = await Search.resultText.getText()
        await expect(footerDisplayResult).to.be.equal(textToSearch)
    })
})