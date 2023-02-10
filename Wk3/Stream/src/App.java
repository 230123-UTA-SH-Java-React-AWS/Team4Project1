import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

public class App {
    public static void main(String[] args) throws Exception {
        
        List<Integer> randomNums = new ArrayList<>();

        for (int i = 0; i < 10; i++) {
            randomNums.add(new Random().nextInt(10));
        }

        System.out.println(randomNums);

        //I want a list from randomNums that only have the numbers between 5 and 8
        //stream() method exists as long as it inherits the collection interface
        //It gives us a Stream object that has the required methods to do some operations
        //filter() great for filtering the collection
        //collect() method will dictate how this stream should give the collection back
        List<Integer> filtered = randomNums.stream()
            .filter((currentVal) -> currentVal>=5 && currentVal<=8)
            .collect(Collectors.toList());
    
        System.out.println(filtered);
        
        //This will give the average of numbers that are between 5 and 8
        double avg = randomNums.stream()
            .filter((currentVal) -> currentVal>=5 && currentVal<=8)
            .collect(Collectors.averagingInt(currentVal -> currentVal));
        
        System.out.println(avg);

        //What if I want to convert my interger list into a string list instead?
        //Map methods are great for mapping your values from the collection into a customized class or another datatype
        List<String> stringList = randomNums.stream()
            .map(Object::toString) //This is called method referencing, similar to currentVal -> currentVal.toString()
            .collect(Collectors.toList());

        System.out.println(stringList);
    }
}
