"""
** Callback Example
** For beginner coders.
"""

def helloworld(name, callback): # Main function (imagine, module)
    # name - Your parameter.
    # callback - Function.
    if name == None: # If the argument "name" is not specified, then we execute the code that the user has prepared for us.
        return callback({ "ok": False, "response": "Where's your name?" }) # Here we execute code.
    hello = f"Hello world! From {name}!" # Here some code.
    
    return callback({ "ok": True, "response": hello }) # Here we execute code.

def some_function(resp): #  The function that the callback will execute
    if resp["ok"] == False:
        return print(resp["response"])
    return print(resp["response"])
    # Here some code.
    
helloworld("tails", some_function) # Calling the main function with arguments: name ("tails") and callback (function)