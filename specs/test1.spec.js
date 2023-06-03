// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Test #1', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Test #1', async function() {
    await driver.get("http://localhost:8080/login")
    await driver.manage().window().setRect({ width: 1424, height: 929 })
    await driver.findElement(By.id("username")).sendKeys("ivan")
    await driver.findElement(By.id("password")).sendKeys("qqQQ123456!")
    await driver.findElement(By.id("login")).click()
    await driver.findElement(By.id("add_new_post_link")).click()
    await driver.findElement(By.id("title")).click()
    await driver.findElement(By.id("title")).sendKeys("Silenium IDE")
    await driver.findElement(By.id("description")).click()
    await driver.findElement(By.id("description")).sendKeys("Silenium IDE test")
    await driver.findElement(By.id("title")).click()
    await driver.findElement(By.id("title")).sendKeys("Selenium IDE")
    await driver.findElement(By.id("description")).click()
    await driver.findElement(By.id("description")).sendKeys("Selenium IDE test")
    await driver.findElement(By.id("body")).click()
    await driver.findElement(By.id("body")).click()
    await driver.findElement(By.id("body")).sendKeys("Selenium IDE body")
    await driver.findElement(By.id("author")).click()
    await driver.findElement(By.id("author")).sendKeys("ivanholub.js@gmail.com")
    await driver.findElement(By.id("post")).click()
    await driver.findElement(By.css(".list-group-item:nth-child(4)")).click()
    await driver.findElement(By.id("username")).sendKeys("ivan")
    await driver.findElement(By.id("password")).sendKeys("qqQQ123456!")
  })
})
