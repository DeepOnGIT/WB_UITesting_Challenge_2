const { expect } = require("chai")
const Gallery = require("../pageobjects/Gallery.POM")

let expectedNextCount = '2 of 26'
let expectedPrevCount = '1 of 26'
let invalidExpectedNextCount = '1 of 26'
let invalidExpectedPrevCount = '2 of 26'

describe("Validate CNN WebPage", () => {
    it("Validate gallery page", async () => {
        await Gallery.openURL()
        await Gallery.waitAndScrollToHeadline()
        await Gallery.waitForImgtoBeDisplayed()
        await Gallery.validateTotalCount()

        //Validate photo counts when clicked buttons
        await Gallery.clickNextButton()

        await Gallery.waitForImageToBeLoaded()
        let nextPhotoCount = await Gallery.photoCount.getText()
        expect (nextPhotoCount).to.be.equal(expectedNextCount)
        expect (nextPhotoCount).to.be.not.equal(invalidExpectedNextCount)
        
        await Gallery.clickPrevButton()

        await Gallery.waitForImageToBeLoaded()
        let prevPhotoCount = await Gallery.photoCount.getText()
        expect (prevPhotoCount).to.be.equal(expectedPrevCount)
        expect (prevPhotoCount).to.be.not.equal(invalidExpectedPrevCount)


        //Validate photo counts when clicked overlay buttons

        await Gallery.clickNextOverlay()

        await Gallery.waitForImageToBeLoaded()
        let nextOverlayCount = await Gallery.photoCount.getText()
        expect (nextOverlayCount).to.be.equal(expectedNextCount)
        expect (nextOverlayCount).to.be.not.equal(invalidExpectedNextCount)

        await Gallery.clickPrevOverlay()

        await Gallery.waitForImageToBeLoaded()
        let prevOverlayCount = await Gallery.photoCount.getText()
        expect (prevOverlayCount).to.be.equal(expectedPrevCount)
        expect (prevOverlayCount).to.be.not.equal(invalidExpectedPrevCount)
    })
})