<div align="center">
  <h1>Hi there! 👋 I'm Rishabh Sengar</h1>
  <p>Welcome to my GitHub repository! Here's a glimpse of my skills and expertise:</p>
  <div style="padding: 20px; background-color: #f0f0f0; border-radius: 10px; box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);">
    <img src="https://img.shields.io/badge/Python-Expert-3776AB?logo=python&logoColor=white" alt="Python Expert" style="margin: 5px; padding: 10px; border-radius: 5px; background-color: #3776AB;">
    <img src="https://img.shields.io/badge/Web%20Scraping-Pro-FF6F61?logo=webcomponents.org&logoColor=white" alt="Web Scraping Pro" style="margin: 5px; padding: 10px; border-radius: 5px; background-color: #FF6F61;">
    <img src="https://img.shields.io/badge/API%20Integration-Pro-1ABC9C?logo=internet-explorer&logoColor=white" alt="API Integration Pro" style="margin: 5px; padding: 10px; border-radius: 5px; background-color: #1ABC9C;">
    <img src="https://img.shields.io/badge/SQL%20Master-4682B4?logo=sql&logoColor=white" alt="SQL Master" style="margin: 5px; padding: 10px; border-radius: 5px; background-color: #4682B4;">
    <img src="https://img.shields.io/badge/Data%20Analysis-Pro-F15B2A?logo=anaconda&logoColor=white" alt="Data Analysis Pro" style="margin: 5px; padding: 10px; border-radius: 5px; background-color: #F15B2A;">
    <img src="https://img.shields.io/badge/Power%20BI-Advanced-F2C811?logo=power-bi&logoColor=white" alt="Power BI Advanced" style="margin: 5px; padding: 10px; border-radius: 5px; background-color: #F2C811;">
    <img src="https://img.shields.io/badge/MongoDB-Proficient-4EA94B?logo=mongodb&logoColor=white" alt="MongoDB Proficient" style="margin: 5px; padding: 10px; border-radius: 5px; background-color: #4EA94B;">
    <img src="https://img.shields.io/badge/AWS-Expert-232F3E?logo=amazon-aws&logoColor=white" alt="AWS Expert" style="margin: 5px; padding: 10px; border-radius: 5px; background-color: #232F3E;">
    <img src="https://img.shields.io/badge/SAS-Advanced-1F76B4?logo=sas&logoColor=white" alt="SAS Advanced" style="margin: 5px; padding: 10px; border-radius: 5px; background-color: #1F76B4;">
    <img src="https://img.shields.io/badge/Excel%20Wizard-1F4068?logo=microsoft-excel&logoColor=white" alt="Excel Wizard" style="margin: 5px; padding: 10px; border-radius: 5px; background-color: #1F4068;">
  </div>
</div>



# Rado Watch Data Scraper

This project is a Python-based web scraper designed to extract information about Rado watches from a specific website. It utilizes Selenium for web automation and BeautifulSoup for HTML parsing. 🌐⌚️

![Screenshot 2024-03-18 135905](https://github.com/Rishabh-098/Freelancing-Projects/assets/121353743/bd1f38c9-5d26-4926-8910-3bc8352db10c)

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

