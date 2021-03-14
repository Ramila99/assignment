#include<stdio.h>
int missingNumber(int arr[],int n)
{
	int t= (n+1) * (n+2) /2;
	int i=0;
	for(i=0;i<n;i++)
	{
		t-=arr[i];
	}
	return t;
}
int main()
{
	int n;
	int i;
	printf("Enter Number : ");
	scanf("%d",&n);
	int arr[n];
	printf("\nEnter series of Number ");
	for(i=0;i<n;i++)
	{
		scanf("%d",&arr[i]);
	}
	for(i=0;i<n;i++)
	{
		printf(" %d ",arr[i]);
	}
	printf("Missing number is %d",missingNumber(arr,n));

}
