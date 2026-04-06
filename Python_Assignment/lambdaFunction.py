# Without lambda (verbose for simple operations)
def square(x):
    return x ** 2
result = list(map(square, [1, 2, 3, 4]))

# With lambda (concise)
result = list(map(lambda x: x*x, [1, 2, 3, 4]))


print(result);