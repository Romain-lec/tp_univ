package ex2;

import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.io.PrintStream;
import java.io.IOException;
import java.lang.Thread;

public class server implements Runnable {

    private ServerSocket serv;
    private ArrayList<Thread> clients;

    public server() throws IOException{
        this.serv = new ServerSocket(2021);
        this.clients = new ArrayList<Thread>();
    }


    public void run(){
        try {

            this.conection();

        } catch (IOException e) {

            System.out.println("IOexeption");

        }
    }

    public void conection() throws IOException{
        
        
        while(true){
            Socket client = serv.accept();
            if (client.isConnected()){
                this.clients.add(new Thread(new client(client)));
                System.out.println(client.getInetAddress().getHostName());
            }
            for (Thread t : this.clients) {
                t.
            }
        }
    }
}
