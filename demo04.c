#include<stdio.h>

int main(void)
{

    char ch = 'B';
    int num = 35;
    printf("");
    printf("num is %d\n", num);
    printf("ASCII value of A is %d\n", 'A');
    printf("ASCII value of %c is %d\n", ch, ch);

    printf("ASCII value of \\n is %d\n", '\n');
    printf("ASCII value of \\b is %d\n", '\b');
    printf("ASCII value of \\t is %d\n", '\t');
    printf("ASCII value of \\r is %d\n", '\r');
    printf("ASCII value of \\a is %d\n", '\a');

    printf("Associated character of %d is %c\n", num, num);
    return 0;
}