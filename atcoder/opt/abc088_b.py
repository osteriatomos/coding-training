n = int(input())
a = list(map(int, input().split()))

ans = 0

for i, v in enumerate(sorted(a, reverse=True)):
    if i % 2 == 0:
        ans += v
    else:
        ans -= v

print(ans)
