public class App {
    public static double getAverage(int[] nums) {
        double sum = 0;
        //Focus on adding everything inside of nums
        for (int number : nums) {
            sum += number;
        }

        double average = sum/nums.length; //expressions with division, make sure at least one value is not an int

        //WRITE YOUR CODE HERE
        return average;
    }

    //DO NOT TOUCH ANYTHING DOWN HERE
    //Main method is used to test your method above to check if it is working as intended
    public static void main(String[] args) throws Exception {
        System.out.println("Testing getAverage method...");
        int[] nums = {1 , 2, 3, 4, 5, 6};

        double result = getAverage(nums);
        if (result == 3.5) {
            System.out.println("\u001B[32m"+"Correct"+"\u001B[0m");
            System.out.println("nums average is 3.5");
        }else {
            System.out.println("\u001B[31m"+"Failed"+"\u001B[0m");
            System.out.println("Your method gave: " + result);
        }
    }
}
