"""
    Randomly generates a fun schedule.
    Script by: tailsjs
    PYTHON PORT
"""

import random 
strings = "wake up,go to school,teach python,play cs:go with onetap,become boomer".split(",")
new_string = ""
for i in range(1, 13):
    new_string += f"{i}. {strings[random.randint(0, len(strings) - 1)]}\n"
print(new_string)
