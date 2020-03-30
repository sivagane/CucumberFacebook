package org.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\jegan\\eclipse-workspace\\CucumberFacebook\\src\\test\\java\\org\\features\\Cucmberfacebk.feature",glue="org.stepdefinition",format= {"pretty", "html:test-output"},monochrome=true,strict=true,dryRun=false)
public class Testrunner {

}
