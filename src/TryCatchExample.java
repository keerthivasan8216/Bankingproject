public class TryCatchExample {
    public static void main(String[] args) {
    int a=7;
    int b=0;
    try{
        int div=a/b;
    }
    catch(ArithmeticException e){
        System.out.println("Arithmetic problem");
    }
    finally{
        System.out.println("From finally");
    }
    }
}
