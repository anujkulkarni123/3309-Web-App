package com.company;
import java.util.Random;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        // Initialize the scanner
        Scanner sc = new Scanner(System.in);

        // String for the table name
        String tName;
        // Number of tuples
        int tuples = 0;

        // Get the name of the table
        System.out.println("Enter the table name: ");
        tName = sc.nextLine();
        // How many tuples to be generated
        System.out.println("How many tuples would you like to generate?");
        tuples = sc.nextInt();

        // Generate the table based on the name
        System.out.println("INSERT INTO " + tName + " (");
        if (tName.equalsIgnoreCase("users")) {
            // Variables to be used by users table
            System.out.println("Username, Password, CreditCardNo, Address, Rating");
            System.out.print(") VALUES");
            // For loop for users table
            for (int i = 0; i < tuples; i++) {
                System.out.println("\n( " + RandomString(10) + ",");
                System.out.println(RandomString(10) + ",");
                RandomCreditCardNo();
                System.out.print(",\n");
                System.out.println(RandomString(20) + ",");
                System.out.print((int)Math.floor(Math.random()*(5+1)) + " )");
                if (i != tuples - 1) {
                    System.out.print(", ");
                }
            }
            System.out.print(";");
        } else if (tName.equalsIgnoreCase("Companies")) {
            // Values for companies
            System.out.println("Name, Address, Rating");
            System.out.print(") VALUES");
            // For loop for companies table
            for (int i = 0; i < tuples; i++) {
                System.out.println("\n( " + RandomString(10) + ",");
                System.out.println(RandomString(20) + ",");
                System.out.print((int)Math.floor(Math.random()*(5+1)) + " )");
                if (i != tuples - 1) {
                    System.out.print(", ");
                }
            }
            System.out.print(";");
        } else if (tName.equalsIgnoreCase("Tools")) {
            System.out.println("ToolType, ToolName, UserID, Price, ForSale, ForRent");
            System.out.print(") VALUES");
            // For loop for users table
            for (int i = 0; i < tuples; i++) {
                System.out.println("\n( " + RandomString(10) + ",");
                System.out.println(RandomString(10) + ",");
                RandomID(tuples);
                System.out.print(",\n");
                RandomPrice();
                System.out.print(",\n");
                RandomBool();
                System.out.print(",\n");
                RandomBool();
                System.out.print(" )");
                if (i != tuples - 1) {
                    System.out.print(", ");
                }
            }
            System.out.print(";");
        }
    }

    public static String RandomString(int length) {
        int leftLimit = 48; // numeral '0'
        int rightLimit = 122; // letter 'z'
        Random random = new Random();

        return random.ints(leftLimit, rightLimit + 1)
                .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
                .limit(length)
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                .toString();
    }

    public static void RandomCreditCardNo() {
        for (int i = 0; i < 16; i++) {
            System.out.print((int)Math.floor(Math.random()*(9+1)));
        }
    }

    public static void RandomID(int size) {
        System.out.print((int)Math.floor(Math.random()*(size) + 1));
    }

    public static void RandomBool() {
        if ((int)Math.floor(Math.random()*(1+1)) == 1) {
            System.out.print("true");
        } else {
            System.out.print("false");
        }
    }

    public static void RandomPrice() {
        System.out.printf("%.2f", (float)(Math.random()*(300 - 10 + 1)+10));
    }
}
