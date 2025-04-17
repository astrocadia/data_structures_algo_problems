def is_isomorphic(s: str, t: str) -> bool:
    s_t_map = {}
    t_s_map = {}
    if len(s) != len(t):
        return False
    for char_s, char_t in zip(s, t):
        if s_t_map[char_s]:
            if s_t_map[char_s] != t[char_t]:
                return False
        else:
            s_t_map[char_s] = t[char_t]
    return True

print(is_isomorphic('baab', 'abba'))
print(is_isomorphic('abaa', 'acaa'))
print(is_isomorphic('ttabaa', 'ddacaa'))
print(is_isomorphic('aaaa', 'abcd'))