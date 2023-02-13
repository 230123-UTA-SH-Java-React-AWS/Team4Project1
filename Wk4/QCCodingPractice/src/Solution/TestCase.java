package Solution;

import java.util.Arrays;

public class TestCase {
    public int[] E1;
    public int[] E2;
    public int B;
    
    public TestCase(int[] e1, int[] e2, int b) {
        E1 = e1;
        E2 = e2;
        B = b;
    }

    @Override
    public String toString() {
        return "TestCase [B=" + B + ", E1=" + Arrays.toString(E1) + ", E2=" + Arrays.toString(E2) + "]";
    }

    
}
