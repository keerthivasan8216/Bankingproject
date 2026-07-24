class Threadprogram extends Thread{
    private int i;
    Threadprogram(int i){
        this.i=i;
    }
    public void run(){
        System.out.println("Thread"+i+"is running");
    }
}
class Main {
    public static void main(String[] args) {
        System.out.println("Start small. Ship something.");
        for(int i=0;i<5;i++){
            Threadprogram th=new Threadprogram(i);
            th.start();
        }
    }
}
