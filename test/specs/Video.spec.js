const { expect } = require("chai")
const VideoPage = require("../pageobjects/Video.POM")

describe("Validate CNN WebPage", () => {
    it("Validate video functions", async () => {
        await VideoPage.openURL()
        await VideoPage.waitAndclickPlay()
        await VideoPage.waitForSpinnerToBeDisappeared()

        if (await VideoPage.adDiv.isDisplayed()) {

            //If Ad is present
            browser.pause(1000)
            await VideoPage.adPauseButton.waitForDisplayed()
            expect(await VideoPage.adPauseButton.isDisplayed()).to.be.true; //Validating whether pause button is present
            await VideoPage.adPauseButton.click() //Click Pause BTN

            expect(await VideoPage.adPauseButton.isDisplayed()).to.be.false; //Onclicking pause expect pause to be disabled
            expect(await VideoPage.adPlayButton.isEnabled()).to.be.true; //Validating whether play button is present

            await VideoPage.adPlayButton.click() //Click Play

            expect(await VideoPage.adMuteButton.isDisplayed()).to.be.true; //Validating whether mute icon is present on screen or not
            await VideoPage.adMuteButton.click() //Click mute
            expect(await VideoPage.adMuteButton.isDisplayed()).to.be.false; //mute button should disappear
            expect(await VideoPage.adUnmuteButton.isDisplayed()).to.be.true; //unmute should be shown on screen
            await VideoPage.adUnmuteButton.click() //Click unmute

            expect(await VideoPage.adFullScreenBtn.isDisplayed()).to.be.true; //Full screen button is displayed
            await VideoPage.adFullScreenBtn.click() //Click to full screen
            expect(await VideoPage.adFullScreenBtn.isDisplayed()).to.be.false; //Full screen button should disappear
            expect(await VideoPage.adCollapseButton.isDisplayed()).to.be.true; //Collapse button is displayed

            await VideoPage.adCollapseButton.click() //Click Collapse screen

            //Wait until Title of the main video is present
            await VideoPage.adProgressBar.waitUntil(async function () {
                return (await VideoPage.videoTitle.isDisplayed())
            },
                {
                    timeout: 60000,
                    timeoutMsg: "Ad didn't end in 30 secs."
                })


            //Actual video validation starts from here
            await VideoPage.validateVideoPlayer()
        }

        else {
            //If Ad is not present
            await VideoPage.validateVideoPlayer()
        }
    })
})