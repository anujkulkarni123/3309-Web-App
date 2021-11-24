package com.company;
import java.util.Random;
import java.util.Scanner;
import java.io.PrintStream;
import java.lang.System;
import java.io.FileNotFoundException;

public class Main {
    // file to write the sql queries on
    static PrintStream fileOut;

    static PrintStream originalOut = System.out;

    public static void main(String[] args) throws FileNotFoundException {

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
        originalOut.println("INSERT INTO " + tName + " (");
        if (tName.equalsIgnoreCase("users")) {
            // set the file to write the sql queries on
            fileOut = new PrintStream("../../../out/files/" + tName + ".sql");
            System.setOut(fileOut);

            // Variables to be used by users table
            originalOut.println("Username, Password, CreditCardNo, Address, Rating");
            originalOut.print(") VALUES");
            // For loop for users table
            for (int i = 0; i < tuples; i++) {
                originalOut.println("\n( '" + RandomString(10) + "', '");
                originalOut.println(RandomString(10) + "', '");
                RandomCreditCardNo();
                originalOut.print("' ,\n '");
                originalOut.println(RandomString(20) + "',");
                originalOut.print((int)Math.floor(Math.random()*(5+1)) + " )");
                if (i != tuples - 1) {
                    originalOut.print(", ");
                }
            }
            originalOut.print(";");
        } else if (tName.equalsIgnoreCase("Companies")) {
            // set the file to write the sql queries on
            fileOut = new PrintStream("../../../out/files/" + tName + ".sql");
            System.setOut(fileOut);

            // Values for companies
            originalOut.println("Name, Address, Rating");
            originalOut.print(") VALUES");
            // For loop for companies table
            for (int i = 0; i < tuples; i++) {
                originalOut.println("\n( '" + RandomString(10) + "', '");
                originalOut.println(RandomString(20) + "',");
                originalOut.print((int)Math.floor(Math.random()*(5+1)) + " )");
                if (i != tuples - 1) {
                    originalOut.print(", ");
                }
            }
            originalOut.print(";");
        } else if (tName.equalsIgnoreCase("Tools")) {
            // set the file to write the sql queries on
            fileOut = new PrintStream("../../../out/files/" + tName + ".sql");
            System.setOut(fileOut);

            originalOut.println("ToolType, ToolName, UserID, Price, ForSale, ForRent");
            originalOut.print(") VALUES");
            // For loop for users table
            for (int i = 0; i < tuples; i++) {
                originalOut.println("\n( '" + RandomString(10) + "', '");
                originalOut.println(RandomString(10) + "',");
                RandomID(tuples);
                originalOut.print(",\n");
                RandomPrice();
                originalOut.print(",\n");
                RandomBool();
                originalOut.print(",\n");
                RandomBool();
                originalOut.print(" )");
                if (i != tuples - 1) {
                    originalOut.print(", ");
                }
            }
            originalOut.print(";");
        }

        System.setOut(originalOut);
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
            originalOut.print((int)Math.floor(Math.random()*(9+1)));
        }
    }

    public static void RandomID(int size) {
        originalOut.print((int)Math.floor(Math.random()*(size) + 1));
    }

    public static void RandomBool() {
        if ((int)Math.floor(Math.random()*(1+1)) == 1) {
            originalOut.print("true");
        } else {
            originalOut.print("false");
        }
    }

    public static void RandomPrice() {
        originalOut.printf("%.2f", (float)(Math.random()*(300 - 10 + 1)+10));
    }
}
