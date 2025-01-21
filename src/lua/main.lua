local date = os.date("*t")

print("Hello, world! The current date and time is:")
print(string.format("%04d-%02d-%02d %02d:%02d:%02d", date.year, date.month, date.day, date.hour, date.min, date.sec))