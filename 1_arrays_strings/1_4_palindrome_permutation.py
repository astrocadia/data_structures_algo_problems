# given a string write a function to check if it is a permutation of a palindrome.

def is_palindrome(string: str):
    letters = [0]*128
    for char in string:
        if char != ' ':
            letters[ord(char)] += 1
    
    middle_char_found = False
    for letter in letters:
        if letter%2 != 0:
            if middle_char_found:
                return False
            middle_char_found = True
    
    return True

print(is_palindrome('abcddcdba'))
print(is_palindrome('avas'))
print(is_palindrome('taco atccc aa'))

# given a string write a function to check if it is a permutation of a palindrome.

def is_palindrome_bit_array(string: str):
    checker = 0
    for char in string:
        if char != ' ':
            checker ^= 1 << ord(char)

    return not (checker & (checker - 1))

print(is_palindrome_bit_array('abcddcdba'))
print(is_palindrome_bit_array('avas'))
print(is_palindrome_bit_array('taco atccc aa'))