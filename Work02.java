
import java.util.*;

public class Work02
{
	public static void main(String[] args){
		//ʵ��ʵ�ֺ������㣺y = f��x�� = x^2 - 2x + 4 ע��x^2 ��ʾ��x ��ƽ����  

		Scanner sca = new Scanner(System.in);
		System.out.print("����������Ҫת��������:");
		int i = sca.nextInt();
		System.out.println(getResult(i));
	}
	
	public static int getResult(int i ){
		return i*i-2*i+4;
	}
}