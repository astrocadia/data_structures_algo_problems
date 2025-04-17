
# implement an algorithm to determine if a string has all unique characters.
# what if you cannot use additional data structures?

def is_unique(test_string: str) -> bool:
    seen = set()
    for char in test_string:
        if char in seen:
            return False
        seen.add(char)
    return True

def is_unique_bitwise(test_string: str) -> bool:
	checker = 0
	for char in test_string:
		val = ord(char)
		if checker & (1 << val) > 0:
			return False
		checker |= (1 << val)
	return True

def is_unique_bool(test_string: str) -> bool:
	if len(test_string) > 128:
		return False
	char_list = [False]*128
	for char in test_string:
		if char_list[ord(char)]:
			return False
		else:
			char_list[ord(char)] = True
	return True

test_strings = ['abcdefg', 'abcdefgg', 'aabcdefg', 'a bc']

for string in test_strings:
	print(is_unique(string))
	print(is_unique_bitwise(string))
	print(is_unique_bool(string))
	print('')