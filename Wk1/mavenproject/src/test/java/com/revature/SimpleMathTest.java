package com.revature;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Assertions;

/**
 * Unit test for simple App.
 */
public class SimpleMathTest {

    /**
     * Rigorous Test.
     */
    //Each @Test method is called a unit test
    @Test
    public void addTwoNumbersShouldWork() {
        //AAA

        //Arrange - what do I need for this unit test to work?
        int num1 = 30;
        int num2 = 900;
        int expectedValue = num1 + num2;
        SimpleMath mathObj = new SimpleMath();

        //Act - execute the specific method you want to test
        int actualValue = mathObj.addTwoNumbers(num1, num2); 

        //Assert - check if what we got is what we expected
        Assertions.assertEquals(expectedValue, actualValue);
    }
}
