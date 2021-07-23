"""
*** PASSWORD GENERATOR
***
*** Kinda useless, because in internet you can find other scripts with same use, but it's my repo, it's my rules.
"""

import random
letters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789!@#$%^&*_"
passLength = 10
result = ""
for i in range(1, passLength):
    result += letters[random.randint(0, len(letters)-1)]
    
print(result)
