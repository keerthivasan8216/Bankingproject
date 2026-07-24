import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        //TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
        // to see how IntelliJ IDEA suggests fixing it.
        Scanner sc=new Scanner(System.in);
        System.out.println("Ënter the char");
        char c=sc.nextLine().charAt(0);
        switch(c){
            case 'A':
                System.out.print("Your charcter is A");
                break;
            case 'B':
                System.out.print("Your character is B");
                break;
            default:
                System.out.print("Try another value");
        }

    }
}
