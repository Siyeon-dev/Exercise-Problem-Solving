def solve(a: list):
    result_value = 0

    for i in a:
        result_value += i
        
    return result_value

print(solve([1, 2, 3, 4, 5]))