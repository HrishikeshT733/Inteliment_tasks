# Without lambda (verbose for simple operations)
def square(x):
    return x ** 2
result = list(map(square, [1, 2, 3, 4]))

# With lambda (concise)
result = list(map(lambda x: x*x, [1, 2, 3, 4]))


print(result);



def fibonacci(num:int):
    n1=0;
    n2=1;
    for i in range(0,num):
        print(n1 ,end=" ");
        n3=n1+n2;
        n1=n2;
        n2=n3;

fibonacci(9);