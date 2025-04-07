# Given two strings, write a method to decide if one is a permutation of the other

def check_string_permutation(str_1, str_2):
    if len(str_1) != len(str_2):
        return False
    
    return sorted(str_1) == sorted(str_2)

def check_string_permutation_list(str_1, str_2):
    if len(str_1) != len(str_2):
        return False
    
    letters = [0]*128
    for i in range(len(str_1)):
        letters[ord(str_1[i])] += 1
    
    for i in range(len(str_2)):
        if letters[ord(str_2[i])] == 0:
            return False
        letters[ord(str_2[i])] -= 1
        
    return True


print(check_string_permutation_list('a','ba'))
print(check_string_permutation_list('abc','cab'))
print(check_string_permutation_list('abcd','cab'))
print(check_string_permutation_list('abcdd','cabdd'))