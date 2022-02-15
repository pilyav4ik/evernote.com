import Basic from "../pageObjects/basic";

const basic = new Basic();


Given('I open page with url {string}', (url) => {
    basic.openUrl(url)
});

When('click link {string}', (loginLinkName) => {
    basic.linkByText(loginLinkName).click()
});
