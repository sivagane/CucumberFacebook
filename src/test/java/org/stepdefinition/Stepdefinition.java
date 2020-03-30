package org.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Stepdefinition {
	static WebDriver d;
	@Given("^User enters the Login Page$")
	public void user_enters_the_Login_Page() throws Throwable {
	    System.setProperty("webdriver.chrome.driver","C:\\Users\\jegan\\eclipse-workspace\\CucumberFacebook\\div\\chromedriver.exe");
	    d=new ChromeDriver();
	    d.get("https://www.facebook.com/r.php");
	    
	}

	@Then("^User enters the \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\"$")
	public void user_enters_the(String firstname, String lastname, String emailid, String newpassword) throws Throwable {
	   d.findElement(By.xpath("//input[@id='u_0_m']")).sendKeys(firstname);
	   d.findElement(By.id("u_0_o")).sendKeys(lastname);
	   d.findElement(By.id("u_0_r")).sendKeys(emailid);
	   d.findElement(By.id("u_0_w")).sendKeys(newpassword);
	}
	
	@And("^User Selects the \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\"$")
	public void user_Selects_the(String day, String month, String year) throws Throwable {
		WebElement Day = d.findElement(By.id("day"));
	    Select s=new Select(Day);
	    s.selectByVisibleText(day); 
	    
	    WebElement Month = d.findElement(By.id("month"));
	    Select s1=new Select(Month);
	    s1.selectByVisibleText(month);
	    
	    WebElement Year = d.findElement(By.id("year"));
	    Select s2=new Select(Year);
	    s2.selectByVisibleText(year);
	}
	
	/*@And("^User Select the \"([^\"]*)\"$")
	public void user_Select_the(String gender) throws Throwable {
	    WebElement female = d.findElement(By.id("u_0_6"));
	    WebElement male = d.findElement(By.id("u_0_7"));
	    if(gender.equals(male)) {
	    	male.click();
	    	}
	    else {
	    	female.click();
	    }
	}*/

	@Then("^User Clicks the SignUp button$")
	public void user_Clicks_the_SignUp_button() throws Throwable {
	   d.findElement(By.id("u_0_13")).click();
	   }
	
	@Then("^User Close the Browser$")
	public void user_Close_the_Browser() throws Throwable {
	    d.quit();
	}
}
