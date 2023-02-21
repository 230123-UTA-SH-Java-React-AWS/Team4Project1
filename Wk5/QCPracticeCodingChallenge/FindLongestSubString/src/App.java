import java.util.ArrayDeque;
import java.util.HashMap;
import java.util.Map;
import java.util.Queue;
import java.util.Set;
import java.util.Map.Entry;

public class App {

    public static int getLongestSubstringLength(String someString)
    {
        return 0;
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
