import java.util.*;

public class Work0701{
	public static void main(String[] args){
		//����������P1(x1,y1)��P2(x2,y2)֮��ľ���
		Scanner scr = new Scanner(System.in);
		System.out.println("�������1������������");
		int x1 = scr.nextInt();
		System.out.println("�������1������������");
		int y1 = scr.nextInt();
		
		System.out.println("�������2������������");
		int x2 = scr.nextInt();
		System.out.println("�������2������������");
		int y2 = scr.nextInt();
		
		double distance = getDistance(x1,y1,x2,y2);
		System.out.println("��������������֮��ľ�����:"+distance);
	}
	
	public static double getDistance(int x1,int y1,int x2,int y2){
		double distance = Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
		return distance;
	}
}