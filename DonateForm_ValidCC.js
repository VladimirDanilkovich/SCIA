// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Valid CC', function() {
  this.timeout(50000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Valid CC', async function() {
    await driver.get("https://sciadev-scia.cs31.force.com/donate")
    await driver.sleep(3000)
    vars["href"] = await driver.executeScript("return window.location.href")
    await driver.findElement(By.css(".donate__button--submit")).click()
    {
      const dropdown = await driver.findElement(By.id("Title *"))
      await dropdown.findElement(By.css("*[value='Mr']")).click()
    }
    await driver.findElement(By.id("First Name *")).sendKeys("Selenium")
    await driver.findElement(By.id("Last Name *")).sendKeys("Test")
    await driver.findElement(By.id("Email *")).sendKeys("djjd@gmail.com")
    await driver.findElement(By.css(".col-sm-8 .ng-scope > .form-control")).sendKeys("2848461638")
    await driver.findElement(By.id("Unit Number or Level Number")).sendKeys("2")
    await driver.findElement(By.css(".c-google-address-autocomplete > #address")).click()
    await driver.findElement(By.css(".c-google-address-autocomplete > #address")).sendKeys("dd")
    await driver.findElement(By.id("Suburb *")).sendKeys("aaa")
    await driver.findElement(By.id("State *")).sendKeys("Arizona")
    await driver.findElement(By.id("Postcode *")).sendKeys("12345766")
    await driver.findElement(By.id("Comments")).sendKeys("sss")
    await driver.findElement(By.id("customerName")).sendKeys("asdff")
    await driver.findElement(By.id("cardNumber")).sendKeys("4444 3333 2222 1111")
    await driver.findElement(By.id("Expiry Month *")).click()
    {
      const dropdown = await driver.findElement(By.id("Expiry Month *"))
      await dropdown.findElement(By.css("*[value='01']")).click()
    }
    await driver.findElement(By.id("Expiry Year *")).click()
    {
      const dropdown = await driver.findElement(By.id("Expiry Year *"))
      await dropdown.findElement(By.css("*[value = '2032']")).click()
    }
    await driver.findElement(By.id("CVN")).sendKeys("1738")
    await driver.switchTo().frame(1)
    await driver.findElement(By.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/donate[1]/div[1]/main[1]/div[2]/div[3]/section[1]/div[1]/form[1]/div[15]/div[1]")).click()
    await driver.switchTo().defaultContent()
    await driver.sleep(5000)
    await driver.findElement(By.css(".donate-now")).click()
    await driver.sleep(20000)
    vars["new_href"] = await driver.executeScript("return window.location.href")
    if (!!await driver.executeScript("return (arguments[0] == arguments[1])", vars["href"],vars["new_href"])) {
      await driver.close()
    }
  })
})

