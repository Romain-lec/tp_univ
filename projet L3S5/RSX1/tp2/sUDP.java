import java.net.DatagramSocket;
import java.net.DatagramPacket;
import java.net.InetAddress;
import java.lang.String;
import java.io.IOException;
import java.net.SocketException;
import java.net.UnknownHostException;

public class sUDP{

    public static void main(String[] args) throws SocketException, IOException, UnknownHostException{
        assert(args.length == 3);
        String Smsg = args[2];
        byte[] Bmsg = Smsg.getBytes();
        DatagramSocket sUDP = new DatagramSocket();
        DatagramPacket msg = new DatagramPacket(Bmsg,Bmsg.length,InetAddress.getByName(args[0]),Integer.parseInt(args[1]));
        sUDP.send(msg);
    }
}