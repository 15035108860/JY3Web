import java.util.Random;
import java.util.Scanner;

public class Demo02 {
	public static void main(String[] args) {
		//��ϰ1
		int age1 = 23;
		int age2 = 24;
		System.out.println("�������������:"+age1+age2);
		System.out.println("================");
		
		//��ϰ2
		int i = 19;
		System.out.println(Integer.toBinaryString(i));
		System.out.println(Integer.toOctalString(i));
		System.out.println(Integer.toHexString(i));
		System.out.println("================");
		
		//��ϰ3
		long a = 12345678901l;
		float b = 3.1415926f;
		double c = 1234567890.0987654321;
		
		//��ϰ4
		Random r = new Random();
	    int rInt = r.nextInt(26);  //����һ�������[0,26);
	    System.out.println(rInt);
	    char d = (char)('A' + rInt);
	    System.out.println(d);
	    System.out.println("================");
	    
	    //��ϰ4 ����
		int e = 97;
		System.out.println((char)e);
		
		char f = 'o';
		System.out.println((int)f);
	    System.out.println("================");
		
		//��ϰ5.1
		Scanner sc = new Scanner(System.in);
		int g = sc.nextInt();
		System.out.println("������������ƽ����:"+g*g);
		
		//��ϰ5.2
		long distance = (long) (4.2*3*(10^8)*60*60*24*365);
		float magpie = 0.45f;
		double number = (double)(distance/magpie);
		System.out.println("��Ҫ"+number+"ֻϲȵ.");
		
		float a = (float)3.14;
		float a1 = 3.14f;
		System.out.println(10^8);
		
	}
}