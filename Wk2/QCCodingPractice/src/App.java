import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Queue;

import solution.Solution;

public class App {
    /*
        Given an array of integers ex {1,2,3,4,5,6}

        output an array of boolean with the same length
        *True means the number in that current position is even
        *False means the number in that current position is odd

        Sample
        Input = {1, 2, 3, 4, 5, 6}
        Output = {F, T, F, T, F, T}
    */

    public static boolean[] determineEveryOddorEven(int nums[])
    {
        return new boolean[]{};
    }

    public static void main(String[] args) throws Exception {
        Queue<int[]> que = new ArrayDeque<>();

        que.add(new int[] {1, 2, 3, 4, 5, 6});
        que.add(new int[] {23, 432, 453, 134});
        que.add(new int[]{});
        que.add(new int[]{0});
        que.add(new int[]{4});

        for (int[] nums : que) {
            String expected = Arrays.toString(Solution.determineEveryOddorEven(nums));
            String actual = Arrays.toString(determineEveryOddorEven(nums));
            
            System.out.println("===============================");
            if (expected.equals(actual)) {
                System.out.println("Pass");
            }
            else 
            {
                System.out.println("Expected - " + expected);
                System.out.println("Actual - " + actual);
                System.out.println("Fail");
            }
        }
    }
}
