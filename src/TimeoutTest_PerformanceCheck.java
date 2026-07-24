import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertTimeout;
import java.time.Duration;

class TimeoutTest_PerformanceCheck {

    @Test
    void testQuickExecutionPass() {

        TimeOut service = new TimeOut();

        assertTimeout(Duration.ofMillis(5000), () -> {
            service.quickOperation();
        });
    }

    // This test will fail intentionally
    @Test
    void testSlowExecutionFail() {

        TimeOut service = new TimeOut();

        assertTimeout(Duration.ofMillis(500), () -> {
            service.slowOperation();
        });
    }

    // This test will fail intentionally
    @Test
    void testUnrealisticTimeoutFail() {

        TimeOut service = new TimeOut();

        assertTimeout(Duration.ofMillis(50), () -> {
            service.quickOperation();
        });
    }
}
