import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.Map.Entry;

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
        Map<TestCase, String> testCases = new HashMap<>();

        testCases.put(new TestCase(new int[]{3, 5, 1}, new int[]{5, 5, 1}, 20), "Employee 2");
        testCases.put(new TestCase(new int[]{1, 2, 1}, new int[]{1, 1, 1}, 10), "Employee 1");
        testCases.put(new TestCase(new int[]{1, 2, 3, 4, 5, 6, 7, 8}, new int[]{1, 5}, 100), "Employee 1");
        testCases.put(new TestCase(new int[]{5, 5}, new int[]{5, 5}, 100), "Employee 1");
        testCases.put(new TestCase(new int[]{10}, new int[]{1, 20}, 100), "Employee 1");
        testCases.put(new TestCase(new int[]{10}, new int[]{1, 20}, 1), "Employee 2");
        testCases.put(new TestCase(new int[]{20, 1, 32, 10}, new int[]{21, 4, 43, 12}, 10000), "Employee 2");

        for (Entry<TestCase, String> testCase : testCases.entrySet()) {

            String yourSol = WhoIsRicher(testCase.getKey().E1, testCase.getKey().E2, testCase.getKey().B);
            System.out.println(testCase.getKey());
            if (yourSol.equals(testCase.getValue())) {
                System.out.println("Test case passes");
            }
            else
            {
                System.out.println("Test case failed");
                System.out.println("Expected - " + testCase.getValue());
                System.out.println("Actual - " + yourSol);
            }

            System.out.println("========================");
        }
    }
}
