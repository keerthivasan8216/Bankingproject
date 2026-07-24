import java.util.LinkedList;
import java.util.Queue;
public class Main {
    public static void main(String[] args) {
        Queue<String> que=new LinkedList<>();
           que.offer("Raja");
           que.offer("kumar");
           que.offer("Rajakumar");
           System.out.println(que.peek());
           que.add("nandha");
         System.out.println(que.peek());
         System.out.println(que.contains("nandha"));
        System.out.println(que);
        }
    }
