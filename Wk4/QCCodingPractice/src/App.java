import java.util.ArrayList;
import java.util.List;

import Solution.Solution;
import Solution.TestCase;

public class App {

    /* 
        Commission Based income
        Bank will have a limited amount of money
        Employee 1 will have an array that will indicate per day how much he will earn for that day
        Employee 2 will have a different array that has its own indicated amount of what he should be earning per day

        Employee 1 will always be the first one to get paid

        Determine who will have the most money. Output the the one with the most money. Given a tie, just give the money E1 has.

        Constraints:
        E1 elements > 0
        E2 elements > 0
        B > 0

        Ex:
        B (Bank) has $20

        E1 = [$3, $5, $1];
        E2 = [$5, $5, $1];

        day 1 - E1 total = 3, E2 total = 5, Bank = 12
        day 2 - E1 total = 3+5 = 8, E2 total = 5 + 5 = 10, Bank = 12 - 5 - 5 = 2
        day 3 - E1 total = 8 + 1 = 9, E2 total = 10 + 1= 11, Bank = $0

        Employee 2 wins, Output: Employee 2
    */


    public static String WhoIsRicher(int[] E1, int[] E2, int B)
    {
        return "";
    }

    public static void main(String[] args) throws Exception {
        List<TestCase> testCases = new ArrayList<>();

        testCases.add(new TestCase(new int[]{3, 5, 1}, new int[]{5, 5, 1}, 20));
        testCases.add(new TestCase(new int[]{1, 2, 1}, new int[]{1, 1, 1}, 10));
        testCases.add(new TestCase(new int[]{1, 2, 3, 4, 5, 6, 7, 8}, new int[]{1, 5}, 100));
        testCases.add(new TestCase(new int[]{5, 5}, new int[]{5, 5}, 100));
        testCases.add(new TestCase(new int[]{10}, new int[]{1, 20}, 100));
        testCases.add(new TestCase(new int[]{10}, new int[]{1, 20}, 1));
        testCases.add(new TestCase(new int[]{20, 1, 32, 10}, new int[]{21, 4, 43, 12}, 10000));

        for (TestCase testCase : testCases) {

            String yourSol = WhoIsRicher(testCase.E1, testCase.E2, testCase.B), mineSol = Solution.WhoIsRicher(testCase.E1, testCase.E2, testCase.B);

            if (yourSol.equals(mineSol)) {
                System.out.println("Test case passes");
            }
            else
            {
                System.out.println("Test case failed");
                System.out.println("Expected - " + mineSol);
                System.out.println("Actual - " + yourSol);
            }

            System.out.println("========================");
        }
    }
}
