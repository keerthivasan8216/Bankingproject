import java.util.Scanner;

public class Dowhile {
    public static void main(String[] args) {
        //TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
        // to see how IntelliJ IDEA suggests fixing it.
        Scanner sc=new Scanner(System.in);

        int no;
        System.out.println("Enter the no");
        no=sc.nextInt();
        String name = "";
        String password="";
        do {
            System.out.println("Enter your username:");
            name = sc.next();
            System.out.println("Enter the Password");
            password = sc.next();
            no=0;
        }while(no==1);
        if (name.equals("Prasunamba")) {
            if (password.equals("4321")){
                System.out.print("welcome");
            }
        }
    }
}
