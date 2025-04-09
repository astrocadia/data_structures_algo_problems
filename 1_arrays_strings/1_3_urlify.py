# write a method to replace all the spaces in a string with '%20'

def urlify(string: str, true_length: int) -> bool:
    spaces = 0
    for char in string:
        if char == ' ':
            spaces += 1
    index = true_length + spaces*2
    string_list = ['']*index
    for i in range(true_length-1,-1,-1):
        if string[i] == ' ':
            string_list[index-3] = '%'
            string_list[index-2] = '2'
            string_list[index-1] = '0'
            index -= 3
        else:
            string_list[index-1] = string[i]
            index -= 1
    print(''.join(string_list))

string = 'this is a test as  '
urlify(string, len(string)-5)
