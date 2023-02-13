package Solution;

public class Solution {

    public static String WhoIsRicher(int[] E1, int[] E2, int B)
    {
        int currentDayE1 = 0, currentDayE2 = 0, totalE1 = 0, totalE2 = 0;

        while (B > 0) {
            if (B - E1[currentDayE1] >= 0) {
                totalE1 += E1[currentDayE1];
                B -= E1[currentDayE1];
            }

            if (B - E2[currentDayE2] >= 0) {
                totalE2 += E2[currentDayE2];
                B -= E2[currentDayE2];
            }

            if (++currentDayE1 >= E1.length)
                currentDayE1 = 0;

            if (++currentDayE2 >= E2.length) 
                currentDayE2 = 0;
        }


        return totalE1 >= totalE2 ? "Employee 1" : "Employee 2";
    }

}
