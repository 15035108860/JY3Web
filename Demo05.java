import java.util.*;

public class Demo05
{
	public static void main(String[] args){
		//�ַ�ת��������
		Scanner scanner = new Scanner(System.in);
		System.out.println("����������Ҫת�����ַ�:");
		String num = scanner.next();
		
		char ch = num.charAt(0);
		
		System.out.println(ch);
		
		//System.out.println(intToChar(i));
		
		
		//System.out.println(charToInt(ch));
	}
	
	
	
	public static char intToChar(int i){
		return((char)i);
	}
	public static int charToInt(char c){
		return(c);
	}
}