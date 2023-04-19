const Gallery = require("../pageobjects/Gallery.POM")

describe("Validate CNN WebPage", () => {
    it("Validate gallery page", async () => {
        await Gallery.openURL()
        await Gallery.waitAndScrollToButton()
        await Gallery.clickNextButton()
        await Gallery.validateNextPhotoCount()
        await Gallery.clickPrevButton()
        await Gallery.validatePrevPhotoCount()
        await Gallery.clickNextOverlay()
        await Gallery.validateNextPhotoCount()
        await Gallery.clickPrevOverlay()
        await Gallery.validatePrevPhotoCount()
    })
})