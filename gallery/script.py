import os


current_dir = "img"


file_numbers = []

for filename in os.listdir(current_dir):
    if filename.endswith(".jpeg"):
        file_number = int(filename[4:8])
        file_numbers.append(file_number)
    else:
        continue

    
file_numbers.sort()

n = 1

for file_number in file_numbers:
    for filename in os.listdir(current_dir):
        if str(file_number) in filename:
            print('<div class="p-2"><img src="{}/{}" alt="img-{}"></div>'.format(current_dir, filename, n))
            n += 1