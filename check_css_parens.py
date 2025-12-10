
import re

file_path = "src/components/CardNav/CardNav.css"

with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

stack = []
for i, char in enumerate(text):
    if char == '(':
        stack.append((i, char))
    elif char == ')':
        if not stack:
            print(f"Error: Unmatched closing paren at index {i}")
        else:
            stack.pop()

if stack:
    print(f"Error: Unmatched opening paren at index {stack[-1][0]}")
    # Print context
    start = max(0, stack[-1][0] - 20)
    end = min(len(text), stack[-1][0] + 20)
    print(f"Context: {text[start:end]}")
else:
    print("Parens are balanced.")
