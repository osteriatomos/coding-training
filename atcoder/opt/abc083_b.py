n, a, b = map(int, input().split())

print(
    sum(
        [i * (a <= sum(map(int, str(i))) <= b)
         for i in range(n+1)]
    )
)
