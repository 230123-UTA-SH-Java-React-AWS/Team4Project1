package Solution;

public class Solution {

    public static String WhoIsRicher(int[] E1, int[] E2, int B)
    {
        //Arrange
        int totalE1 = 0, totalE2 = 0, currentDayE1 = 0, currentDayE2 = 0;

        //When should we stop?
        while (B > 0) {
            
            //I should only deduct when there is money from the bank
            if (B - E1[currentDayE1] > 0) {

                totalE1 += E1[currentDayE1];
                B -= E1[currentDayE1];

            } else {
                //In the event, bank doesn't have anything left
                totalE1 += B;
                B = 0;
            }


            //Employee 2
            if (B - E2[currentDayE2] > 0) {
                
                totalE2 += E2[currentDayE2];
                B -= E2[currentDayE2];

            } else {
                totalE2 += B;
                B = 0;
            }

            //In the event we go beyond the array given to a employee, what should we do?
            if (++currentDayE1 == E1.length) 
                currentDayE1 = 0;

            if (++currentDayE2 == E2.length) 
                currentDayE2 = 0;

        }

        return totalE1 >= totalE2 ? "Employee 1" : "Employee 2";
    }

}
