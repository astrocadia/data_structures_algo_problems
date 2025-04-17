def longest_substring(s):
    char_set = set()
    first_char = 0
    last_char = 0
    max_length = 0
    for char in s:
        while char in char_set:
            char_set.remove(s[first_char])
            first_char += 1
        char_set.add(char)
        last_char += 1
        max_length = max(max_length, last_char - first_char)
    return max_length

print(longest_substring('babbacdefaba'))