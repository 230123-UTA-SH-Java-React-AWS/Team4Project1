public class App {

    public static void main(String[] args) throws Exception {

        //A comment is designed to add additional information within your code
        //Java/compiler will ignore these line and treat like they don't exist
        //Comments in Java are denoted with "//"

        //This line will interact with our terminal and output whatever is inside the ""
        System.out.println("Hello, World!");


        //Variables
        //They are designed to hold data
        //We can always reference variables to use/show their value
        //You cannot have duplicate variable names within the same scope


        //data types
        //byte - 8 bit
        //short - 16 bit
        //char - 16 bit - will hold a single character

        //Primitives data type
        //int means integer which can only hold whole numbers 32 bit
        int x = 10;
        //long can hold 64 bits
        long l = 20;
        System.out.println(x);

        //double will hold a floating number 64 bit
        double d = 10.6;
        //float will hold floating numbers but 32-bit
        float f = 10.5f;

        //boolean will hold either a true or false
        boolean b = true;
        boolean b2 = false;

        //Reference data type
        //String
        //Used to hold sentences or multiple characters
        String s = "Hello World but this is a String variable";
        System.out.println(s);


        //Addition Operations
        int x2 = 5 + 10;
        System.out.println(x2);

        int x3 = 10;
        //I am using the previous value of x3 and adding 1 and setting it to x3
        x3 = x3 + 1;
        System.out.println(x3);
        
        //Incrementing operators
        //Adding ++ operator before a variable will add 1 to the previous value before printing the x3 value into the terminal
        System.out.println(++x3);

        //Adding ++ operator after a variable will add 1 to the previous value after printing the x3 value into the terminal
        System.out.println(x3++);
        System.out.println(x3);

        x3 = x3 + 10;
        x3 += 10; //+= operator is the same as the previous expression

        //Decrementing operations
        //replace the "+" into a "-" and it will substract instead

        //Logical Operators
        //They are associated with boolean

        boolean b3 = true;
        boolean b4 = false;

        boolean b5 = b3 && b4; //and - b3 and b4  have to both be true otherwise give false
        System.out.println(b5); //Gives a false
        boolean b6 = b3 || b4; //or - if b3 is true then it will be true regardless of whats inside b4
        System.out.println(b6); //Gives a true

        boolean b7 = !b4; //Not - it will flip whatever the current value of that boolean
        System.out.println(b7); //Gives true

        boolean b8 = (b3 && b4) || !(b6 || b7);
        System.out.println(b8); 

        //Control Flow Statements
        //Allows us more control over what lines needs to be run or how many times they need to be executed

        //IF statements
        //We can choose what lines to be executed based on some condition
        if (false) {
            //Lines between the two curly brackets are the lines that will be executed/ignored for this if statement
            System.out.println("This specific line was executed");
            System.out.println("More lines to be executed!");

        } 
        //Else if will only check is condition if previous if statements were false
        else if (false) {
            System.out.println("Else if is being executed!");
        } else if(false){
            System.out.println("The second else if was executed!");
        } 
        //else will execute if all previous if statements were false
        else {
            System.out.println("Else block was executed!");
        }

        //Lets put the timmy, Tom, LB scenario in code
        double timmyHeight = 3.5;
        double LBHeight = 6;
        double tomHeight = 2.7;

        double selectedPerson = tomHeight;

        //I want a person that is between 3ft and 5ft
        //How would you write that boolean expression?
        if (selectedPerson >= 3 && selectedPerson <= 5) {
            //Imaginary code that will swap the selectedPerson after the pole
            System.out.println("This person was swapped!");
        }
        
        //We can put an if like statement while assigning a value
        // [Condition] ? [True] : [False]
        String person = selectedPerson>= 3 ? "At least 3 feet tall" : "Not 3 feet tall";
        System.out.println(person);

        String name = "Muher";
        //Switch statement
        //Used to check a variable's information through multiple cases
        //name == "Stephen"
        switch (name) {
            case "Stephen":
                System.out.println("Stephen was executed");
                break;
            case "Munther":
                System.out.println("Munther was executed");
            case "Keshawn":
                System.out.println("Keshawn was executed");
                //Adding breaks will stop the execution of your lines of code and will not bleed over to the next case
                break;
            case "Jung":
                System.out.println("Jung was executed");
                break;
            //Acts the same was as else block
            default:
                System.out.println("Random person was executed");
                break;
        }

        //For Loops
        //Allows you to execute the lines of code multiple times
        //Iterate means to go to each value of an array

        //Arrays
        int[] nums = {1, 2, 3, 4, 5}; //Allows you to hardcode values within the array
        int[] nums2 = new int[10]; //We specify the size of the array. By default, it will hold nothing but 0s

        //Display all the contents of an array
        System.out.println(nums[0]);
        System.out.println(nums[1]);
        System.out.println(nums[2]);
        System.out.println(nums[3]);
        System.out.println(nums[4]);

        //For loop that will display all the contents
        //First block of a for loop will create temporary variables to be used within the loop
        //Second block this is the condition the loop will check if it needs to execute again
        //Third block, this is what will happen once a loop has finished
        System.out.println("=========================");
        for(int i = nums.length - 1; i>=0; i--){
            System.out.println(nums[i]);
        }

        System.out.println("===============");
        //Enhanced for loop
        //You have less control on selecting specific positions
        //TLDR if you just want to iterate through the entire array and grab its values
        for (int i : nums)
        {
            System.out.println(i);
        }

        //While loops
        //They will keep repeating the lines of code based on a condition
        //If you don't know the exact time to stop your lines of code being executed
        System.out.println("=============");
        int pos = 0;
        while (pos < nums.length) {
            System.out.println(nums[pos++]);
        }

        boolean alwaysTrue = true;
        //do-while loop
        //do while will at least execute your code once regardless if the condition was false in the beginning
        while (alwaysTrue == false) {
            System.out.println("Will not print");
        }

        do {
            //Will always run this code at least once
            System.out.println("Will it print?");
        } while (alwaysTrue == false);
    }
}
