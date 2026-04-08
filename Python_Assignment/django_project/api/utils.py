import pandas as pd
import numpy as np
from decimal import Decimal

def analyze_numbers(numbers_list):
    """
    Analyze numbers using Pandas and NumPy
    Returns dictionary with all statistics
    """
    # Convert to numpy array
    arr = np.array(numbers_list)
    
    # Calculate statistics using NumPy
    count = len(numbers_list)
    sum_value = float(np.sum(arr))
    mean_value = float(np.mean(arr))
    median_value = float(np.median(arr))
    min_value = float(np.min(arr))
    max_value = float(np.max(arr))
    std_value = float(np.std(arr))
    variance_value = float(np.var(arr))
    range_value = max_value - min_value
    
    # Quartiles using numpy
    q1_value = float(np.percentile(arr, 25))
    q3_value = float(np.percentile(arr, 75))
    
    # Using Pandas for additional validation
    series = pd.Series(numbers_list)
    pandas_desc = series.describe()
    
    return {
        'count': count,
        'sum_value': Decimal(str(round(sum_value, 2))),
        'mean_value': Decimal(str(round(mean_value, 2))),
        'median_value': Decimal(str(round(median_value, 2))),
        'min_value': Decimal(str(round(min_value, 2))),
        'max_value': Decimal(str(round(max_value, 2))),
        'std_value': Decimal(str(round(std_value, 2))),
        'variance_value': Decimal(str(round(variance_value, 2))),
        'range_value': Decimal(str(round(range_value, 2))),
        'q1_value': Decimal(str(round(q1_value, 2))),
        'q3_value': Decimal(str(round(q3_value, 2))),
    }

def process_csv_data(csv_content):
    """
    Process CSV content and extract numbers
    Expects CSV with 'numbers' column or first column as numbers
    """
    from io import StringIO
    
    df = pd.read_csv(StringIO(csv_content.decode('utf-8')))
    
    # Find numeric columns
    numeric_cols = df.select_dtypes(include=[np.number]).columns
    
    if len(numeric_cols) > 0:
        # Use first numeric column
        numbers = df[numeric_cols[0]].dropna().tolist()
    elif 'numbers' in df.columns:
        numbers = df['numbers'].dropna().tolist()
    else:
        # Try to convert first column
        numbers = pd.to_numeric(df.iloc[:, 0], errors='coerce').dropna().tolist()
    
    return numbers