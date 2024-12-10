import os

def convert_md_to_mdx(folder_path, output_file):

    with open(output_file, 'w') as file:
        for root, _, files in os.walk(folder_path):
            for filename in files:
                if filename.endswith('.md'):
                    old_path = os.path.join(root, filename)
                    new_filename = filename[:-3] + '.mdx'
                    new_path = os.path.join(root, new_filename)

                    os.rename(old_path, new_path)

                    relative_path = os.path.relpath(old_path, folder_path)
                    file.write(relative_path + '\n')

if __name__ == "__main__":

    folder_to_search = "C:\\Users\\Austin\\Desktop\\Migration\\docs\\community"
    output_txt_file = "C:\\Users\\Austin\\Desktop\\Migration\\output.txt"

   
    os.makedirs(os.path.dirname(output_txt_file), exist_ok=True)

    convert_md_to_mdx(folder_to_search, output_txt_file)
    print(f"Operation completed. Paths of renamed files are written to {output_txt_file}.")
