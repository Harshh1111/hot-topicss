

public class RandomNumberGenerator {
    public static void main(String[] args) {
        // Create an instance of the Random class
        Random random = new Random();

        // Generate and print 10 random numbers between 0 and 100
        System.out.println("Generating 10 random numbers between 0 and 100:");
        for (int i = 0; i < 10; i++) {
            int randomNumber = random.nextInt(101); // Generates random number between 0 and 100
            System.out.println(randomNumber);
        }
    }
}
