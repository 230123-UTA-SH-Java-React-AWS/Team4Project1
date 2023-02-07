public class some
{
    public enum Engine {
        On,
        Off,
        Stall;
    }

    public void someMethod()
    {
        Engine engineState = Engine.Off;

        switch (engineState) {
            case Off:
                
                break;
            case On:

                break;
            case Stall:
                
                break;
        
            default:
                break;
        }
    }
}