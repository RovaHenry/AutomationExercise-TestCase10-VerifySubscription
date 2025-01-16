const {By} = require('selenium-webdriver');
// Test Case ini tidak membutuhkjan lebih dari 2 file, karena hanya melakukan validasi pada halaman homepage

class DashboardPage {
    constructor(driver) {
        this.driver = driver;
        this.logoDisplay = By.xpath("//img[@alt='Website for automation practice']");
        this.fillEmail =  By.css('#susbscribe_email');
        this.buttonSubscribe = By.css('#subscribe');
        this.verifyAlert = By.css('.alert-success');
    }
    async navigate(baseURL){
        await this.driver.get(baseURL);
    }

    async verifyLogoHome() {
        const logo = await this.driver.findElement(this.logoDisplay);
        return logo;
    }

    async fillEmailSubscribe(){
        await this.driver.findElement(this.fillEmail).sendKeys("test@gmail.com");
    }
    
    async clickButtonSubscribe(){
        await this.driver.findElement(this.buttonSubscribe).click();
    }
    async verifyAlertSubscribe(){
        const alert = await this.driver.findElement(this.verifyAlert);
        return alert;
    }
}

module.exports = DashboardPage;