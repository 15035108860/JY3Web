import java.util.*;

public class Work05
{
	public static void main(String[] args){
		//����ɼ�,�жϳɼ��ȼ�
		while(true){
			Scanner sca = new Scanner(System.in);
			System.out.println("������ѧ���ĳɼ�����");
			int score = sca.nextInt();
			getLevel(score);
		}
	}
	
	public static void getLevel(int score){
		if(score < 80 && score > 0){
			System.out.print("ѧ���ɼ���Ӧ�ĵȼ���:������");
		}else if(score < 90){
			System.out.print("ѧ���ɼ���Ӧ�ĵȼ���:����");
		}else if(score < 100){
			System.out.print("ѧ���ɼ���Ӧ�ĵȼ���:����");
		}else{
			System.out.print("ѧ���ɼ���Ӧ�ĵȼ���:����");
		}
	}
}