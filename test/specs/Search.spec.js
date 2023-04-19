const Search = require('../pageobjects/Search.POM')

const textToSearch = 'India' //Text to be entered in search box

describe('Validate CNN web page', () => {
    it('Validate search functionality', async () => {
        await Search.openURL()
        await Search.waitAndClickSearchIcon()
        await Search.waitAndEnterTextInSearchBar(textToSearch)
        await Search.clickSearchButton()
        await Search.validateSearchResult(textToSearch)
        await Search.scrollToFooterSearchAndEnterText(textToSearch)
        await Search.validateSearchResult(textToSearch)
    })
})


