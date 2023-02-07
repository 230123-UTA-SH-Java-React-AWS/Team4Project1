package CustomCollection;

import java.util.Iterator;


//Hence the name Iterable meaning you can now iterate (go through) this DS
public class CustomArray implements Iterable<Integer>{
    
    private int[] someArray;

    public CustomArray(int size) {
        someArray = new int[size];
    }

    public int[] getSomeArray() {
        return someArray;
    }

    public void setSomeArray(int[] someArray) {
        this.someArray = someArray;
    }

    @Override
    public Iterator iterator() {
        // TODO Auto-generated method stub
        return new CustomArrayIterator(this);
    }

    /*
        We have to make a custom class that will basically tell the iterable how can you iterate through this custom DS
        Iterator interface is essentially an agreement to add two methods that will help iterate through your custom DS
    */
    class CustomArrayIterator implements Iterator<Integer>{

        //A field that stores our custom DS
        private CustomArray cArray;

        //A field that will keep track of where we are in this DS
        private int currentIndex;

        public CustomArrayIterator(CustomArray cArray) {
            this.cArray = cArray;
        }

        //This one checks if there is any value left
        @Override
        public boolean hasNext() {
            //Checks that the currentIndex doesn't go beyond the length of my array field in this custom DS
            if (currentIndex < cArray.getSomeArray().length) {
                return true;
            }
            return false;
        }

        //Return the value of the current position and go to the next position
        @Override
        public Integer next() {
            // TODO Auto-generated method stub
            int currentVal = cArray.getSomeArray()[currentIndex++];
            return currentVal;
        }

    }
}
