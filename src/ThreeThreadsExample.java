class ThreeThreadsExample {

    static class WorkerThread extends Thread {
        private String threadName;
        private int sleepTime;

        WorkerThread(String name, int sleepTime) {
            this.threadName = name;
            this.sleepTime = sleepTime;
        }

        @Override
        public void run() {
            try {
                Thread.sleep(sleepTime);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            for (int i = 1; i <= 5; i++) {
                System.out.println(threadName + " - iteration " + i);
            }
        }
    }
}

public class Main {
    public static void main(String[] args) {

        Thread thread1 = new ThreeThreadsExample.WorkerThread("Morning", 2000);
        thread1.setPriority(Thread.MAX_PRIORITY);

        Thread thread2 = new ThreeThreadsExample.WorkerThread("Afternoon", 1000);
        thread2.setPriority(Thread.NORM_PRIORITY);

        Thread thread3 = new ThreeThreadsExample.WorkerThread("Evening", 0);
        thread3.setPriority(Thread.MIN_PRIORITY);

        thread1.start();
        thread2.start();
        thread3.start();

        try {
            thread1.join();
            thread2.join();
            thread3.join();
        } catch (InterruptedException e) {
            System.out.println("Main thread interrupted.");
        }
        System.out.println("All threads have finished execution.");
    }
}
