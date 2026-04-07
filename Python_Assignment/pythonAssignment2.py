import time
from functools import wraps
#1.Data Structures: Implement a custom stack data structure with push, pop, and min operations, all in constant time.
class CustomStack:
    def __init__(self):
        # Using a list as the internal storage
        self._items = []
        # Auxiliary stack to track minimum values
        self._min_stack = []

    def push(self, item):
        """Add an item to the top of the stack."""
        self._items.append(item)
        
        # Push to min_stack if it's empty or item is new minimum
        if not self._min_stack or item <= self._min_stack[-1]:
            self._min_stack.append(item)

    def pop(self):
        """Remove and return the top item. Raise error if empty."""
        if self.is_empty():
            raise IndexError("pop from an empty stack")
        
        item = self._items.pop()
        
        # If popped item is current minimum, pop from min_stack too
        if item == self._min_stack[-1]:
            self._min_stack.pop()
        
        return item

    def peek(self):
        """Return the top item without removing it."""
        if self.is_empty():
            return None
        return self._items[-1]

    def is_empty(self):
        """Check if the stack is empty."""
        return len(self._items) == 0

    def size(self):
        """Return the number of items in the stack."""
        return len(self._items)
   
    def min(self):
        """Return minimum element in stack."""
        if self.is_empty():
            raise IndexError("Stack is empty")
        return self._min_stack[-1]

# Example usage:
# Test the CustomStack
stack = CustomStack()

stack.push(5)
stack.push(3)
stack.push(7)
stack.push(2)

# print(f"Minimum: {stack.min()}")  # Output: 2
# print(f"Top element: {stack.peek()}")  # Output: 2
# print(f"Stack size: {stack.size()}")  # Output: 4

# print(f"Popped: {stack.pop()}")  # Output: 2
# print(f"Minimum after pop: {stack.min()}")  # Output: 3

# stack.push(1)
# print(f"New minimum: {stack.min()}")  # Output: 1

# # Check if empty
# print(f"Is stack empty? {stack.is_empty()}")  # Output: False


#2.File Handling: Write a script that reads a large text file, counts the frequency of each word, and writes the results to a new file.

f=open(r"B:\Inteliment_tasks\Python_Assignment\file.txt","r");
content=f.read();
#print(f.read());
freqWord={};

# Split content into words and clean them
words = content.split()  # Splits on whitespace

for word in words:
    # Remove punctuation and convert to lowercase for better counting
    word = word.strip('.,!?;:"\'()[]{}<>').lower()
    if word:  # Only count non-empty words
        freqWord[word] = freqWord.get(word, 0) + 1;
f.close();
#print(freqWord);
with open(r"B:\Inteliment_tasks\Python_Assignment\word_frequency_output.txt", "w") as output_file:
    output_file.write("Word Frequency Report\n")
    
    for word, count in freqWord.items():
        output_file.write(f"{word}: {count}\n")

#print(f"Word frequency analysis complete!")
#print(f"Total unique words: {len(freqWord)}")
#print(f"Total words processed: {sum(freqWord.values())}")
#print(f"Results written to: word_frequency_output.txt")


#3.Decorators: Create a decorator that logs the execution time of a function and use it to decorate a function of your choice.


def log_execution_time(func):
    
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        execution_time = end_time - start_time
        print(f" Function '{func.__name__}' executed in {execution_time:.6f} seconds")
        return result
    return wrapper

# Example usage
@log_execution_time
def calculate_sum(n):
   
    total = 0
    for i in range(1, n + 1):
        total += i
    return total

# Test the decorator
result = calculate_sum(1000000)
print(f"Result: {result}")


    
#4.Generators: Implement a generator function that yields prime numbers indefinitely.

def prime_generator():
   
    yield 2  # First prime
    num = 3
    while True:
        is_prime = True
        # Check divisibility only up to square root
        for i in range(2, int(num ** 0.5) + 1):
            if num % i == 0:
                is_prime = False
                break
        if is_prime:
            yield num
        num += 2  # Only check odd numbers after 2

# Usage example
#print("First 10 primes:")
gen = prime_generator()
for i in range(10):
    print(next(gen), end=" ")



#5.Metaclasses: Create a metaclass that enforces a singleton pattern in classes.

class DatabasePool:
    """Singleton database connection pool - Saves resources"""
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.connections = []
            cls._instance.max_connections = 10
            cls._instance.active_connections = 0
        return cls._instance
    
    def get_connection(self):
        if self.active_connections < self.max_connections:
            self.active_connections += 1
            return f"DB_Connection_{self.active_connections}"
        raise Exception("No connections available")
    
    def release_connection(self, conn):
        self.active_connections -= 1

# Anywhere in your project - same pool
class UserService:
    def get_users(self):
        db = DatabasePool()
        conn = db.get_connection()
        # Query users
        db.release_connection(conn)

class ProductService:
    def get_products(self):
        db = DatabasePool()  # Same pool as UserService
        conn = db.get_connection()
        # Query products
        db.release_connection(conn)

# Without Singleton: Each service would create its own pool (10+10=20 connections!)
# With Singleton: Only one pool exists (max 10 connections total)


#6.Concurrency: Use asyncio to fetch data from multiple URLs concurrently and process the results.

import asyncio
import aiohttp

async def fetch_data(session, url, name):
    """Fetch data from a single API"""
    try:
        async with session.get(url) as response:
            data = await response.json()
            print(f" {name}: {response.status}")
            return {name: data}
    except Exception as e:
        print(f" {name}: Error - {e}")
        return {name: None}

async def main():
    # Free, open source APIs (no API key needed)
    urls = {
        "Pokemon (Pikachu)": "https://pokeapi.co/api/v2/pokemon/pikachu",
        "Random Cat Fact": "https://catfact.ninja/fact",
        "Random Dog Image": "https://dog.ceo/api/breeds/image/random",
        "Sample Post": "https://jsonplaceholder.typicode.com/posts/1"
    }
    
    print(" Fetching data from multiple APIs concurrently...\n")
    
    async with aiohttp.ClientSession() as session:
        tasks = [fetch_data(session, url, name) for name, url in urls.items()]
        results = await asyncio.gather(*tasks)
    
    print("\n" + "="*40)
    print(" RESULTS:")
    print("="*40)
    
    for result in results:
        for name, data in result.items():
            if data:
                if "pikachu" in str(data).lower():
                    print(f"\n {name}:")
                    print(f"   Height: {data.get('height', 'N/A')}")
                    print(f"   Weight: {data.get('weight', 'N/A')}")
                elif "fact" in name.lower():
                    print(f"\n {name}:")
                    print(f"   {data.get('fact', 'N/A')[:100]}...")
                elif "dog" in name.lower():
                    print(f"\n {name}:")
                    print(f"   {data.get('message', 'N/A')}")
                else:
                    print(f"\n {name}:")
                    print(f"   Title: {data.get('title', 'N/A')}")

# Run the program
if __name__ == "__main__":
    asyncio.run(main())