import java.util.*;
public class Main {
    public static void main(String[] args) {
   Runnable r1=new Runnable(){
       public void run(){
           System.out.println("Before: Hello");
       }
   };
   Runnable r2=()-> System.out.println("After:Hello");
   List<String> names=Arrays.asList("Alice","Bob","Kumar");
   names.forEach(name->System.out.println("Name is:"+name));
   r1.run();
   r2.run();
    }
}
