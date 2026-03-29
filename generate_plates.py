import csv
import os

with open('_data/gallery.csv', mode='r', encoding='utf-8') as file:
    reader = csv.DictReader(file)
    for row in reader:
        filename = f"_plates/{row['image_id']}.md"
        os.makedirs(os.path.dirname(filename), exist_ok=True)
        with open(filename, 'w') as f:
            f.write(f"---\nlayout: plate\nimage_id: {row['image_id']}\n---\n")