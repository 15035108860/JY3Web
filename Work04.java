import java.util.*;

public class Work04
{
	public static void main(String[] args){
		//ʹ����Ԫ�����ʵ�ַ�ҳ���ܡ�
		Scanner sca = new Scanner(System.in);
		System.out.print("�����������������");
		int i = sca.nextInt();
		System.out.print("������ÿҳ���ݵ�����");
		int j = sca.nextInt();
		
		int page = getPage(i,j);
		System.out.println("�����������ݿ��Էֳ�"+page+"ҳ");
	}
	
	public static int getPage(int i , int j ){
		int page = i%j== 0 ? i/j : i/j+1;
		return page;
	}
}