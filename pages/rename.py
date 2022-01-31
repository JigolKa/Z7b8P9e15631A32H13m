import random, string

chars = string.printable

print("".join(random.choice(chars) for i in range(16)))