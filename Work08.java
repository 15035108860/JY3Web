
import java.util.*;

public class Work08
{
	public static void main(String[] args){
		Scanner scanner = new Scanner(System.in);
		System.out.print("������һ����Ʒ��12λ����");
		String num = scanner.next();
		int checkCode = getCheckCode(num);
		
		System.out.println("��������Ʒ��У������:" + checkCode);
	}
	
	public static int getCheckCode(String num){
		int checkCode = 0;
		int evenSum = 0;
		int oddSum = 0;
	
		for(int i=0;i<num.length();i+=2)
		{
			/*System.out.print(i);
			System.out.println(num.charAt(i)-'0');*/
			evenSum += (num.charAt(i)-'0');
		} 
		System.out.println(evenSum);
		for(int i=1;i<num.length();i+=2)
		{
			oddSum += (num.charAt(i)-'0');
		} 
		System.out.println(oddSum);
		
		checkCode = (10- ((oddSum+evenSum*3)%10))%10;
		return checkCode;
	}
	

}