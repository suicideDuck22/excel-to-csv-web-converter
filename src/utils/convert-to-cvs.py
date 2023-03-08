import pandas as pd
import sys;
import platform

project_path = sys.argv[1]
project_name = sys.argv[2]

separator = None

if platform.system().lower() == 'linux':
    separator = '/'
elif platform.system().lower() == 'widows':
    separator = "\\"

file_to_convert_path = f'{project_path}{separator}src{separator}uploads{separator}{project_name}'

read_file = pd.read_excel(file_to_convert_path)

new_name = None
if ".xlsx" in project_name:
    new_name = project_name.replace('xlsx', 'csv')
else:
    new_name = project_name.replace('xls', 'csv')

save_file_path = f'{project_path}src{separator}converted{separator}{new_name}'

read_file.to_csv(
    save_file_path,
    index = None,
    header = False,
    sep = ";",
    decimal = ","
)
print(save_file_path)