import pandas as pd
import sys;
import os;

project_path = sys.argv[1]
project_name = sys.argv[2]

# working_dir = os.chdir(project_path)

file_to_convert_path = f'{project_path}\\src\\uploads\\{project_name}'

read_file = pd.read_excel(file_to_convert_path)

read_file.to_csv(
    f'{project_path}src\\converted',
    index = None,
    header = False,
    sep = ";",
    decimal = ","
)