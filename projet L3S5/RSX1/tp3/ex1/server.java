package ex1;

import java.net.ServerSocket;
import java.net.Socket;
import java.io.PrintStream;
import java.io.IOException;

public class server{

    public static void main(String[] args)throws IOException{
        ServerSocket serv = new ServerSocket(2021);
        while (true) {
            Socket client = serv.accept();
            if (client.isConnected()){
                System.out.print(client.getInetAddress().getHostName());
            }
            PrintStream clientOutput = new PrintStream(client.getOutputStream());
            clientOutput.println("Bienvenue sur mon serveur et au revoir");
            client.close();
        }
    }
}