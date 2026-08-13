import java.util.Objects;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Ënter your age:");
        int age=sc.nextInt();
        if(age>=18){
            System.out.println("Ënter your gender:");
            String gender=sc.next();
            if(gender.equals("male")){
                System.out.println("Male,You can vote");
            }
            else if(gender.equals("female")){
                System.out.println("Female,You can vote");
            }
        }
        else{
            System.out.print("Child you cannot vote");
        }
    }
}
