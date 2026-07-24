public class TimeOut {

    public void quickOperation() {
        try {
            Thread.sleep(100); // 100 milliseconds
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }

    public void slowOperation() {
        try {
            Thread.sleep(1000); // 1000 milliseconds
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }

    public static void main(String[] args) {

        TimeOut service = new TimeOut();

        System.out.println("Quick operation started");
        service.quickOperation();
        System.out.println("Quick operation completed");

        System.out.println("Slow operation started");
        service.slowOperation();
        System.out.println("Slow operation completed");
    }
}
