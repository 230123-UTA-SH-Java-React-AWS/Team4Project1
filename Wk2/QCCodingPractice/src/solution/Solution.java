package solution;

public class Solution {
    public static boolean[] determineEveryOddorEven(int[] nums)
    {
        boolean[] result = new boolean[nums.length];

        for (int i = 0; i < result.length; i++) {
            if (nums[i] % 2 == 0) {
                result[i] = true;
            }
        }
        return result;
    }
}
