const VideoPage = require("../pageobjects/Video.POM")

describe("Validate CNN WebPage", () => {
    it("Validate video functions", async () =>{
        await VideoPage.openURL()
        await VideoPage.waitAndclickPlay()
        await VideoPage.waitForSpinnerToBeDisappeared()
        await VideoPage.validateVideoFunctions()
    })
})