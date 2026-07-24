public class Main {
    public static void main(String[] args) {
        //TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
        // to see how IntelliJ IDEA suggests fixing it.
        Employee e=new Employee();
        System.out.println(e.add(3,7));
        System.out.println(e.add(3,7,3));
        System.out.println(e.add('f', 'c'));
        Employee a=new Access();
        System.out.print(a.add(5,6));
    }
}
public class Employee {
    public int add(int a,int b){
        return a+b;
    }
    public int add(int a,int b,int c){
        return a+b+c;
    }
    public char add(char a,char b){
        return a;
    }
    public int add(int a,char c){
        return a;
    }
}
public class Access extends Employee{
    public int add(int a,int b){
        return a+b;
    }

}
