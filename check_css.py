
import re

file_path = "src/components/CardNav/CardNav.css"

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

stack = []
for i, line in enumerate(lines):
    for char in line:
        if char == '{':
            stack.append((i + 1, char))
        elif char == '}':
            if not stack:
                print(f"Error: Unmatched closing brace at line {i + 1}")
            else:
                stack.pop()

if stack:
    print(f"Error: Unmatched opening brace at line {stack[-1][0]}")
else:
    print("Braces are balanced.")
