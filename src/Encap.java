class Encap{
    private int age;
    public int getage(){
        return age;
    }
    public void setage(int age){
        this.age=age;
    }
}
public class Main {
    public static void main(String[] args) {
        Encap e=new Encap();
        e.setage(27);
        System.out.println(e.getage());
        }
    }
