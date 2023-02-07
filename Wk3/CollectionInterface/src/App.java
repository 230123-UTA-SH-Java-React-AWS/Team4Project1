import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Hashtable;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.Set;
import java.util.TreeMap;
import java.util.TreeSet;
import java.util.Vector;
import java.util.Map.Entry;

import CustomCollection.CustomArray;

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("================== List Interface ==================");

        //ArrayList
        //The same as an array except with dynamically changing size
        //Still zero-based index and random access (because the behind the scenes it uses arrays)
        //Retrieval O(1)
        //Insert and removal O(n)
        List<Integer> someList = new ArrayList<>();
        someList.add(10);

        //LinkedList
        //Traversal is O(n)
        //Insert and removal O(1)
        someList = new LinkedList<>();

        //Vector
        //It is the legacy version of ArrayList (legacy just means older)
        //Slower than ArrayList in terms of performance
        //Thread-safe (This is safe to use when you are executing multiple methods at the same time)
        someList = new Vector<>();
        someList.add(10);

        System.out.println("================== Set Interface ==================");
        //All sets have unique values

        //HashSet
        //Does not maintain order
        //hash algorithm
            //the process of converting something into a numerical representation of it
        //O(1) add, removal, and search
        //O(n) traversal (give me all the data from this DS)
        Set<Integer> someSet = new HashSet<>();
        someSet.add(10);

        //TreeSet
        //Maintains the order whenever you insert something
        //O(log n) for adding, removal due to the inherit sorting it does with the tree
        //Since it is sorted by default, searching for a value is O(log(n))
        someSet = new TreeSet<>();
        someSet.add(1);
        someSet.add(10);
        someSet.add(5);
        someSet.add(-92);

        System.out.println(someSet);

        System.out.println("================== Iterable and Iterator interface ==================");
        CustomArray custArray = new CustomArray(10);

        //For enhanced loop
        for (Integer integer : custArray) {
            System.out.println(integer);
        }

        System.out.println("================== Map Interface ==================");
        //**Map does not inherit the Collection interface at all
        //**Maps is they are key, value pairs (Similar to your JSON)
        //Keys has to be unique but values don't have to be

        //It will ask for the datatype you want for your key and value
        Map<String, String> someMap = new HashMap<>();
        someMap.put("someKey", "someValue");
        someMap.put("anotherKey", "someValue");

        //To iterate through the map, we ask for the set version of it
        Set<Entry<String, String>> setVersionOfMap = someMap.entrySet();
        for (Entry<String,String> entry : setVersionOfMap) {
            System.out.println(entry);
        }
        System.out.println(someMap.get("someKey"));

        //TreeMap
        //It is sorted like a TreeSet
        //It will sort as you add
        someMap = new TreeMap<>();

        //HashTable
        //Similar to HashMap but legacy
        //Older version of HashMap
        //Thread-safe
        someMap = new Hashtable<>();

        System.out.println("================== Collections class ==================");
        //A bunch of static methods with useful behaviors that you usually want to do with a collection DS
        //Know the difference between collections class and interface
        //Can be used by most collection concrete classes
        //DON'T CONFUSE WITH COLLECTION INTERFACE

        List<Integer> randomNumbers = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            randomNumbers.add(new Random().nextInt(10));
        }

        System.out.println(randomNumbers);

        Collections.sort(randomNumbers, Comparator.reverseOrder()); //Fun fact, this uses the mergesort algorithm

        System.out.println(randomNumbers);

        int result = Collections.binarySearch(randomNumbers, 5);
        System.out.println(result);
    }
}
