import java.util.ArrayDeque;
import java.util.HashMap;
import java.util.Map;
import java.util.Queue;
import java.util.Set;
import java.util.Map.Entry;

public class App {

    public static int getLongestSubstringLength(String someString)
    {
        int repeatCount;
        int indexPointer;
        int longestString = 0;

        //we create an array of strings to hold our substrings
        String[] subs;

        for (int i=0; i<someString.length(); i++) {
            //for each iteration we check the character one position ahead
            //if the next character is equal, we start a counter
            if(someString.charAt(i+1).equalsIgnoreCase()) {
                repeatCount++;

                //we store the first substring, then we start the process over with the remaining string
                //we use the pointer so we know where to split() the string
                indexPointer = i;

                //once we've detected a repeat char, we immediately split the string
                //we store the first substring
                //we use repeatCount-1 to account for array index
                subs[repeatCount-1] = someString.split();

                //we break out of this iteration and continue iterating through the string
                break;
            }

            //now that all substrings are stored, we can compare their lengths and return the largest one
            foreach(String s : subs) {
                //we check to see if the next subString is larger
                //if so we reassign longestString
                //else we break this iteration
                if(s.length() > longestString){
                longestString = s.length;
                } else {break;}

            }

        }
        //finally we return the longestString
        return longestString;
    }
    public static void main(String[] args) throws Exception {
        Map<String, Integer> testcases = new HashMap<>();

        testcases.put("abcdddef", 4);
        testcases.put("aaaaa", 1);
        testcases.put("pwwkew", 3);
        testcases.put("",0);
        testcases.put("uthyysleelsinkkweoroikkkpoqweriueeeerrttyy",9);
        testcases.put("dvdf", 3);
        testcases.put("aab", 2);

        for (Entry<String,Integer> elemeEntry : testcases.entrySet()) {
            int actual = getLongestSubstringLength(elemeEntry.getKey());

            System.out.println("Testcase: " + elemeEntry.getKey());

            if (actual == elemeEntry.getValue()) {
                System.out.println("\u001B[32m"+"Correct"+"\u001B[0m");
                System.out.println("longest substring is " + elemeEntry.getValue());
            }else {
                System.out.println("\u001B[31m"+"Failed"+"\u001B[0m");
                System.out.println("Your method gave: " + actual);
            }
            
            System.out.println("===============================");
        }

        
    }
}
