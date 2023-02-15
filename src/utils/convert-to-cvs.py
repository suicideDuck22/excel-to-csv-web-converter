import pandas as pd
import sys;

project_path = sys.argv[1]
project_name = sys.argv[2]

file_to_convert_path = f'{project_path}\\src\\uploads\\{project_name}'

read_file = pd.read_excel(file_to_convert_path)

save_file_path = f'{project_path}src\\converted\\{project_name}'

read_file.to_csv(
    save_file_path,
    index = None,
    header = False,
    sep = ";",
    decimal = ","
)
print(save_file_path)