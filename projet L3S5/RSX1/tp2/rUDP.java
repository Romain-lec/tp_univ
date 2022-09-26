import java.net.DatagramSocket;
import java.net.DatagramPacket;
import java.net.InetAddress;
import java.lang.String;
import java.io.IOException;
import java.net.SocketException;

public class rUDP{

    public static void main(String[] args) throws SocketException, IOException{
        assert(args.length == 1);
        byte[] buf = new byte[100];
        DatagramSocket rUDP = new DatagramSocket(Integer.parseInt(args[0]));
        DatagramPacket rPack = new DatagramPacket(buf,100);
        rUDP.receive(rPack);
        System.out.println(new String(rPack.getData()));
    }
}