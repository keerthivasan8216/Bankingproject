public class Access {
    public void employee1(){
        System.out.println("I am from employee1");
    }
    private void employee2(){
        System.out.println("I am from employee2");
    }
    protected void employee3(){
        System.out.println("I am from employee3");
    }
    void employee4(){
        System.out.print("I am from default");
    }
    public void employee2pub(){
        employee2();
    }

}


public class Main {
    public static void main(String[] args) {
        //TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
        // to see how IntelliJ IDEA suggests fixing it.
        Access a=new Access();
        a.employee1();
        a.employee2pub();
        a.employee3();
        a.employee4();
    }
}
