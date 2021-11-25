package com.company;
import java.util.Random;
import java.util.Scanner;
import java.lang.System;
import java.io.FileWriter;
import java.io.IOException;

public class Main {

    // rite the insert queries in a separate file for execution
    static FileWriter sqlFileWriter;

    public static void main(String[] args) throws IOException {

        // Initialize the scanner
        Scanner sc = new Scanner(System.in);

        // set the file to write the insert queries on
        sqlFileWriter = new FileWriter("../../../out/files/insertQueries.sql");

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
        sqlFileWriter.write("INSERT INTO " + tName + " (");
        if (tName.equalsIgnoreCase("users")) {
            // set the file to write the sql queries on

            // Variables to be used by users table
            sqlFileWriter.write("Username, Password, CreditCardNo, Address, Rating");
            sqlFileWriter.write(") VALUES");
            // For loop for users table
            for (int i = 0; i < tuples; i++) {
                sqlFileWriter.write("\n( '" + RandomString(10) + "', '");
                sqlFileWriter.write(RandomString(10) + "', '");
                RandomCreditCardNo();
                sqlFileWriter.write("' ,\n '");
                sqlFileWriter.write(RandomString(20) + "',");
                sqlFileWriter.write((int)Math.floor(Math.random()*(5+1)) + " )");
                if (i != tuples - 1) {
                    sqlFileWriter.write(", ");
                }
            }
            sqlFileWriter.write(";");
        } else if (tName.equalsIgnoreCase("Companies")) {

            // Values for companies
            sqlFileWriter.write("Name, Address, Rating");
            sqlFileWriter.write(") VALUES");
            // For loop for companies table
            for (int i = 0; i < tuples; i++) {
                sqlFileWriter.write("\n( '" + RandomString(10) + "', '");
                sqlFileWriter.write(RandomString(20) + "',");
                sqlFileWriter.write((int)Math.floor(Math.random()*(5+1)) + " )");
                if (i != tuples - 1) {
                    sqlFileWriter.write(", ");
                }
            }
            sqlFileWriter.write(";");
        } else if (tName.equalsIgnoreCase("Tools")) {

            sqlFileWriter.write("ToolType, ToolName, UserID, Price, ForSale, ForRent");
            sqlFileWriter.write(") VALUES");
            // For loop for users table
            for (int i = 0; i < tuples; i++) {
                sqlFileWriter.write("\n( '" + RandomString(10) + "', '");
                sqlFileWriter.write(RandomString(10) + "',");
                RandomID(tuples);
                sqlFileWriter.write(",\n");
                RandomPrice();
                sqlFileWriter.write(",\n");
                RandomBool();
                sqlFileWriter.write(",\n");
                RandomBool();
                sqlFileWriter.write(" )");
                if (i != tuples - 1) {
                    sqlFileWriter.write(", ");
                }
            }
            sqlFileWriter.write(";");
        }

        // close the file writer
        sqlFileWriter.close();
        sc.close();
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

    public static void RandomCreditCardNo() throws IOException {
        for (int i = 0; i < 16; i++) {
            sqlFileWriter.write((int)Math.floor(Math.random()*(9+1)));
        }
    }

    public static void RandomID(int size) throws IOException {
        sqlFileWriter.write((int)Math.floor(Math.random()*(size) + 1));
    }

    public static void RandomBool() throws IOException {
        if ((int)Math.floor(Math.random()*(1+1)) == 1) {
            sqlFileWriter.write("true");
        } else {
            sqlFileWriter.write("false");
        }
    }

    public static void RandomPrice() throws IOException {
        sqlFileWriter.write(String.format("%.2f", (float)(Math.random()*(300 - 10 + 1)+10)));
    }
}
