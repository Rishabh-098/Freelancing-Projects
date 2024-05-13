# 🎥 YouTube Video Data Scraper

## 🌟 Project Overview
This project automates the extraction of video data from a specified YouTube channel and uploads it into a Google Spreadsheet in a custom format daily. Utilizing the YouTube API for scraping and the Google Sheets API for data management, this Python application is later transpiled to JavaScript for deployment on Google Apps Script for scheduled automation.

## 🛠️ Technologies Used
- **Python** ![Python](https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white) - Primary programming language for scripting.
- **JavaScript** ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) - Used in Google Apps Script for automation within Google's infrastructure.
- **YouTube API** ![YouTube API](https://img.shields.io/badge/-YouTube_API-FF0000?style=flat-square&logo=youtube&logoColor=white) - For retrieving video metadata.
- **Google Sheets API** ![Google Sheets](https://img.shields.io/badge/-Google_Sheets-34A853?style=flat-square&logo=google-sheets&logoColor=white) - For manipulating spreadsheet data.
- **Google Apps Script** ![Google Apps Script](https://img.shields.io/badge/-Google_Apps_Script-34A853?style=flat-square&logo=google&logoColor=white) - For automating daily script execution in the Google cloud platform.

## ✨ Features
- **Data Scraping** 🔄: Automatically fetches new video data from a designated YouTube channel.
- **Data Management** 📊: Updates a Google Spreadsheet with video data based on specified formats.
- **Script Automation** 🤖: Facilitates daily updates through automated script execution.
- **Cross-platform Compatibility** 🌐: Converts Python code to JavaScript for deployment on Google Apps Script.

## 📦 Installation Instructions
Ensure you have Python installed, then clone the repository and install dependencies:

  - git clone https://github.com/yourusername/youtube-video-scraper.git
  - cd youtube-video-scraper
  - pip install -r requirements.txt


## 🚀 Usage Instructions
### Configuring API Access
1. **Obtain API keys** 🔑 for both YouTube and Google Sheets APIs from the Google Developer Console.
2. **Securely store** these keys in environment variables or a configuration file not tracked by Git.

### Running the Script
Execute the script to scrape data and load it into Google Sheets:
```python```

## Script Conversion to JavaScript
Convert the Python script to JavaScript using any available Python-to-JavaScript transpiler or manually adapt the code. Ensure the JavaScript is compatible with Google Apps Script standards.

## Deployment on Google Apps Script
1. **Create a new script** in Google Apps Script with the converted JavaScript code.
2. **Set up triggers** in the Google Apps Script environment to run the script daily.

## 👥 Contributing
To contribute, please fork the repository, create a feature branch, and submit a pull request with a clear list of what you've done.

## 🎉 Credits
Developed using powerful APIs provided by Google. Special thanks to the open-source community for continuous contributions.

## 📬 Contact
For support or contributions, please contact Rishabh at rishabhsengar098@gmail.com.


