import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;


import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;


class CalculateTest {


    @ParameterizedTest
    @ValueSource(strings = {"amma", "mom", "nitin"})
    void testPalindromePass(String candidate) {
        assertTrue(Calculate.isPalindrome(candidate));
    }
    //fail
    @Test
    void testPalindromeFail() {
        assertFalse(Calculate.isPalindrome("hello"), "Expected true but got false");
    }


    @ParameterizedTest
    @ValueSource(strings = {"java", "spring", "bank"})
    void testNotPalindrome(String candidate) {
        assertFalse(Calculate.isPalindrome(candidate));
    }
}
public class Calculate {

    // Palindrome method required by CalculateTest
    public static boolean isPalindrome(String candidate) {
        String reverse = new StringBuilder(candidate).reverse().toString();
        return candidate.equalsIgnoreCase(reverse);
    }

    public static void main(String[] args) {
        // Palindrome example
        String word = "amma";
        System.out.println(word + " is palindrome: " + Calculate.isPalindrome(word));
    }
}
