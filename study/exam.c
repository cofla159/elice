#include <stdio.h>
#include <string.h>

int main(void)
{
    int num, blue, red, yellow = 0;
    char answer[100];
    scanf("%d\n%s", &num, answer);
    //printf("%d\n%d", num, answer);
    
    for (int i=0; i<strlen(answer); i++){
        if (answer[i] == 3){
            yellow++;
        }
        int a = i % 5;
        switch (a){
            case 1 :
                if (answer[i] == 5){
                    blue++;
                } else if (answer[i] == 1){
                    red++;
                }
                break;
            case 2 :
                if (answer[i] == 4){
                    blue++;
                } else if (answer[i] == 2){
                    red++;
                }
                break;
            case 3 :
                if (answer[i] == 3){
                    blue++;
                } else if (answer[i] == 3){
                    red++;
                }
                break;
            case 4 :
                if (answer[i] == 2){
                    blue++;
                } else if (answer[i] == 4){
                    red++;
                }
                break;
            case 0 :
                if (answer[i] == 1){
                    blue++;
                } else if (answer[i] == 5){
                    red++;
                }
                break;
        }
    }
    printf("red : %d\nblue: %d\nyellow: %d", red, blue, yellow);
    return 0;
}