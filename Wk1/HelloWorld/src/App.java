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
    }
}
