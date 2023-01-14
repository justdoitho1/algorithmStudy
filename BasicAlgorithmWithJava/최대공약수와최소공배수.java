package BasicAlgorithmWithJava;

import java.util.Arrays;

public class 최대공약수와최소공배수 {
    public static void main(String[] args) {
        // 30과 24의 최대공약수, 최소공배수 구하기
//        int gcd = gcd(30, 24);
//        lcm(gcd, 30*24);
    }

    /**
     * GCD : Greatest Common Divisor
     * 최대공약수 로직
     * 유클리드 호제법 사용.
     * 자연수 a, b가 존재, a > b.
     * a를 b로 나눈 나머지 r
     * a와 b의 최대공약수는, b와 r의 최대공약수와 같다.
     */
    public static int gcd(int num1, int num2){
        if(num2 == 0) { //num2가 0이 될 때 : a를 b로 나눴을 때, 딱 떨어질 경우.
            System.out.println("최대공약수　：　" + num1);
            return num1;
        }

        return gcd(num2, num1 % num2);
    }

    /**
     * LCM : Least Common Multiple
     * @param gcd : 최대공약수
     * @param total : 두 수의 곱
     *  m * n = gcd * lcm 이므로, lcm = (m*n)/gcd. 따라서 gcd를 먼저 구하면 lcm은 쉽다!
     * @return 최소공배수
     */
    public static int lcm(int gcd, int total){
        int rtn = total/gcd;
        System.out.println("최소공배수 : "+rtn);
        return rtn;
    }

    /**
     * 프로그래머스 분수의 덧셈
     * @param numer1
     * @param denom1
     * @param numer2
     * @param denom2
     * @return
     */
    public int[] fractionsSum(int numer1, int denom1, int numer2, int denom2) {

        //재귀는 아무래도 느리니까..
        //분수의 합을 구할 때
        //최소공배수를 구해서 하려 했으나, 오히려 속도가 느림.
        //분모 : 둘이 아예 곱해버림
        //분자 : 분자 * 상대 분모
        //둘이 더한 뒤, 약분. 약분은 for문으로 돌리며, 1부터 분자까지 풀스캔하며 돌기.
        //i가 분모, 분자를 나눴을 때 둘 다 나머지가 0이면 약분 가능하다고 보고, 최대공약수 구함
        // 속도를 위해서는 재귀함수보다 그냥 무작정 곱해버리는 게 빠르다.
        // 또, 최대공약수를 구하는 방법 중에 for문도 있다..
        int bunja = numer1*denom2+ numer2*denom1;
        int bunmo = denom1*denom2;
        int maximum = 1;

        for(int i = 1 ; i <= bunja ; i ++) {
            if(bunja%i == 0 && bunmo%i == 0) {
                maximum = i;
            }
        }

        int[] answer = {bunja/maximum, bunmo/maximum};
        return answer;
    }
}

