# Rado Watch Data Scraper

This project is a Python-based web scraper designed to extract information about Rado watches from a specific website. It utilizes Selenium for web automation and BeautifulSoup for HTML parsing. 🌐⌚️

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Dependencies](#dependencies)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)

## Introduction

The Rado Watch Data Scraper automates the process of gathering information about Rado watches from the web. It performs searches for each model number in a provided CSV file, extracts relevant details from the search results, and stores them in a CSV file. 🤖🔍

## Features

- Automated search for Rado watch model numbers.
- Extraction of detailed information including product description and price.
- Robust error handling to handle exceptions during scraping.
- Data stored in a CSV file for easy analysis and manipulation. 💼📊

## Dependencies

- Python 3.x
- Selenium
- BeautifulSoup
- Pandas 🐍📦

## Installation

1. Clone the repository to your local machine:

    ```
    git clone https://github.com/yourusername/your-repository.git
    ```

2. Install Python 3.x if not already installed.

3. Install required dependencies using pip:

    ```
    pip install selenium beautifulsoup4 pandas
    ```

## Usage

1. Ensure you have a CSV file containing Rado watch model numbers. Each model number should be in a separate row under a column named "Model Number".

2. Modify the path to your CSV file in the Python script (`rado_watch_scraper.py`).

3. Run the Python script:

    ```
    python rado_watch_scraper.py
    ```

4. The script will launch a Chrome browser window and start scraping data. Make sure you have Chrome installed and the chromedriver executable available in your PATH.

5. Once the scraping is complete, the extracted data will be saved to a CSV file named `rado1.csv`. 🎉💾

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or create a pull request. 🛠️🚀

## License

## License

This project is currently not licensed. Feel free to use the code for personal or educational purposes, but please note that there are no guarantees or liabilities associated with its use. 🚫⚖️

