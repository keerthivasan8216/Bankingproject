class Node{
        int data;
        Node next;

    public Node(int data) {
        this.data = data;
        this.next = null;
    }
}
public class Main {
    public static void main(String[] args) {

        Node n1=new Node(1);
        Node n2=new Node(2);
        Node n3=new Node(3);
        n1.next=n2;
        n2.next=n3;
        Node current = n1;
        while (current != null) {
            System.out.print(current.data + " ");
            current = current.next;
        }
    }
}
