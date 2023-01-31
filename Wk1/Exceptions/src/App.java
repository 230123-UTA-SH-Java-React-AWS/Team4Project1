import com.revature.Pokemon;

public class App {
    public static void main(String[] args) throws Exception{
        System.out.println("Hello, World!");

        //Try-catch block can handling exceptions but will not handle errors
        //Errors usually hardware issue or limitation
        try {
            //Anything inside of the try block will be caught by our catch block
            int x = 100/1;
    
            int[] nums = {1, 2, 3};
            int y = nums[192];
        } 
        catch (ArithmeticException exc) {
            System.out.println("You have divide a zero! Changing the behavior to divide by 1 instead");
            int x = 100/1;
        }
        catch (IndexOutOfBoundsException exc) {
            System.out.println("Out of bounds was found!");
        }
        //Catching an Exception class will catch everything
        catch (Exception e) {
            //Will execute catch block if its exception was thrown
            System.out.println("Caught an exception!");
        }

        //Checked exceptions is able to be seen by your java compiler and notify the developer
        try {
            //It is possible to create your very own exception with its own message attach to it
            throw new Exception("Custom exception being given");

        } catch (Exception e) {
            // TODO Auto-generated catch block
           
        }

        //Unchecked exception demo
        Pokemon poke = new Pokemon();
        poke.setLevel(100);
        System.out.println("Pokemon level was set to 10");
        poke.setLevel(10);
        System.out.println("Pokemon level was set to -10");

        poke.method3();
    }
}
