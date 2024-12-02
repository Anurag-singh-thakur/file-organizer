# File Organizer

A simple Node.js script that organizes files and folders on your desktop into categorized directories based on file types. This script helps keep your workspace tidy by automatically sorting your files and folders.

## Table of Contents

- [File Organizer](#file-organizer)
  - [Table of Contents](#table-of-contents)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Usage](#usage)
  - [How It Works](#how-it-works)
  - [Ignore List](#ignore-list)
  - [Contributing](#contributing)

## Technologies Used

- **Node.js**: JavaScript runtime for executing the script.
- **fs-extra**: A Node.js module that extends the built-in `fs` module with more file system methods.
- **path**: A Node.js module for handling and transforming file paths.

## Installation

To set up the File Organizer on your local machine, follow these steps:

1. **Ensure Node.js is Installed**:
   - Before proceeding, make sure you have Node.js installed on your system. You can download it from the [official Node.js website](https://nodejs.org/).
   - To check if Node.js is installed, run the following command in your terminal or command prompt:
     ```bash
     node -v
     ```
   - If Node.js is installed, you will see the version number. If not, please install it first.

2. **Clone the Repository**:
   - Open your terminal or command prompt and run the following command to clone the repository:
     ```bash
     git clone https://github.com/Anurag-Singh-thakur/file-organizer.git
     ```
   - Change into the project directory:
     ```bash
     cd file-organizer
     cd app
     ```

3. **Install Dependencies**:
   - Once you are in the project directory, install the required dependencies by running:
     ```bash
     npm install
     ```

## Usage

1. **Update the Script**:
   - Open the `organize.js` file in your preferred code editor.
   - Update the `desktopPath` and `targetBasePath` variables to match your system's directory paths. This is where the script will look for files to organize and where it will place the organized files.

2. **Run the Script**:
   - After configuring the paths, execute the script using Node.js with the following command:
     ```bash
     node organize.js
     ```

3. **Check the Output**:
   - After running the script, check the specified target directory for organized files and folders.

## How It Works

- The script scans your desktop for files and folders.
- It categorizes files based on their extensions (e.g., images, documents, audio, video, installers).
- Folders are moved directly to a designated "desktop folders" directory.
- Files and folders specified in the ignore list are skipped during processing.

## Ignore List

The ignore list is defined in the script and includes the following items by default:
- `.gitignore`
- `.env`
- `node_modules`
- `temp`
- `log.txt`

You can modify the `ignoreList` array in the script to add or remove items as needed.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create your feature branch:
   ```bash
   git checkout -b feature/YourFeature