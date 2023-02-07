package OOP;

/*
    Encapsulation is the process of wrapping the state and logic together into a single class
    Data control and validation is important aspects to encapsulation

    We want to ensure the data is pristine and expected
    TLDR
    * Ensuring that validation happens across your entire project on whoever uses this class
    * Breaking projects to tell developers they used your class wrongfully
*/

public class Encapsulation {
    
    //We want all our fields to be private
    //Because we cannot implement any logical data control with just a field
    private int mustBeGreaterThan0;


    //Setters and Getters
    //They allow us to add logic to our field to enforce some constraints
    public void setMustBeGreaterThan0(int someNumber)
    {
        //Where we implement actual validation and should only exist here
        //When is it a good time to add validation on Service vs Model?
        //It will apply everywhere on where you used this object
        //Service validation is when you want to validate user input
        //Service interacts a lot with users (client)
        //Models are interacted by developers (We want our validate to break projects if developers are using it)
        if (someNumber > 0) {
            this.mustBeGreaterThan0 = someNumber;
        }
        else
        {
            //Make the message clear to a developer, not a normal user
            //I would've like to create my own exception to be even more specific
            throw new RuntimeException("Cannot set mustBeGreaterThan0 field less than 1");
        }
    }
}
