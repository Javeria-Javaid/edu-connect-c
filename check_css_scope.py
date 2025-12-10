
import re

file_path = "src/components/CardNav/CardNav.css"

with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Remove comments
text = re.sub(r'/\*.*?\*/', '', text, flags=re.DOTALL)

lines = text.split('\n')
stack = 0
for i, line in enumerate(lines):
    line = line.strip()
    if not line:
        continue
    
    # Count braces
    stack += line.count('{')
    stack -= line.count('}')
    
    # Check for property pattern: "name: value;"
    # Heuristic: contains ':' and ends with ';' or part of list
    if ':' in line and ';' in line:
        # It looks like a property.
        # It should be inside a block (stack > 0)
        # Exception: CSS variables at root? Still inside :root { ... }
        # Exception: @property?
        if stack <= 0:
            print(f"Suspicious property outside block at line {i+1}: {line}")
    
    if stack < 0:
        print(f"Stack went negative at line {i+1}")
        stack = 0

if stack != 0:
    print(f"Final stack is {stack}")
