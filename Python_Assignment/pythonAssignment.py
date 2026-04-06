#1.Create 2 separate arrays for even and odd numbers within the range of 0 to 100.
even=[];
odd=[];

for i in range(1,100):
    if(i%2!=0):
        odd.append(i);
    else:
        even.append(i);

# print(f"Even array is {even}");
# print(f"Odd array is {odd}");

#2.Print Star Patterns
# Center-aligned pyramid

# for i in range(1, 6):
#     print(' ' * (6 - i) + '* ' * i)



# for j in range(1,6):
#     for k in range(0,j):
#         print("*",end="");
#     print();  

# print();
# for j in range(6,1,-1):
#     for k in range(j,1,-1):
#         print("*",end="");
#     print();   

#3.Find prime numbers in the given range. Save in separate arrays.
prime = []
for i in range(2, 50):
    count = 0
    lim = int(i / 2)
    for j in range(2, lim + 1):  # Added +1 to include lim
        if i % j == 0:  # Fixed: check if i is divisible by j
            count += 1
    if count == 0:
        prime.append(i)
#print(f"Array of prime numbers are {prime}")

#4.Find given number is palindrome. The output will be True if it’s a Palindrome number otherwise it would be False.

# def isPalindrome(st:str):
#     rev: str = st[::-1] ;
#     if(st==rev):
#         return True;
#     return False;

# str1="nitin";
# if(isPalindrome(str1)):
#       print("String is palindrome");
# else:
#       print("String is not palidrome");

#5.Find the factorial of the given number.
def findFact(n:int):
   prod:int=1;
   for i in range(2,n+1):
       prod=prod*i;
   return prod;

#print(f"Factorial of 5 is {findFact(5)}");

#6.Program to print ASCII Value of a character.

def findAscii(c:str):
    if(len(c)>1):
        raise ValueError("String should be of single length");
    return ord(c);

str1:str="a";
#print(f"Ascii value of {str1} is {findAscii(str1)}");

#7.Find the maximum frequency character in string.
def findMaxFreq(st:str):
    freq={}; 
    for char in st:
        freq[char]=freq.get(char,0) +1;
    max_freq=max(freq,key=freq.get);
    return max_freq;

#print(f"Maximum frequency of character in programmming is {findMaxFreq("programmming")}");

#9.Sort below object by keys.
#myDict = {'Ashwin': 100, 'rakesh': 9,
#       'Ravindra': 25, 'yash': 200, 'sai': 32}

# myDict= {'Ashwin': 100, 'rakesh': 9,'Ravindra': 25, 'yash': 200, 'sai': 32};
# sorted_dict=dict(sorted(myDict.items()));
# for i in sorted_dict:
#     print(i);


#10.Program for linear search.

def linearSearch(num:int,arr:list[int]):
    for i in arr:
        if i==num:
            return print(f"Element {num} found at index {i-1} in array {arr}");

    return print(f"Element {num } is not found in  array {arr}");

arr=[1,2,3,4,5,6,7];

#linearSearch(5,arr);


#11.Insertion Sort

def insertion_sort(arr):
   # Traverse from index 1 to len(arr)-1
    for i in range(1, len(arr)):
        key = arr[i]  # Element to be positioned
        j = i - 1     # Start comparing with previous element
        
        # Shift elements greater than key to the right
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        
        # Place key in its correct position
        arr[j + 1] = key
    
    return arr;


arr=[1,4,2,3,56,23];
print(f"before insertion sort {arr}");
print(f"After insertion sort {insertion_sort(arr)}");

    




  


       