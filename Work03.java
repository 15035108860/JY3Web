import java.util.*;

public class Work03
{
	public static void main(String[] args){
		/*ʵ�� 2 ���������㣺
			1) y = f��x�� = x%3
			2) y = f��x�� = x++ */
		Scanner sca = new Scanner(System.in);
		System.out.print("���������������������:");
		int i = sca.nextInt();
		int y1 = f1(i);
		int y2 = f2(i);
		System.out.println("��ʽf1�ļ�������:"+y1);
		System.out.println("��ʽf2�ļ�������:"+y2);
	}
	
	public static int f1(int x){
		return x%3;
	}
	
	public static int f2(int x){
		return x++;
	}
	
}