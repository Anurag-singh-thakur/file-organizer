const fs = require('fs-extra');
const path = require('path');

// Update this path to your actual Desktop path
const desktopPath = path.join('C:', 'Users', 'singh', 'OneDrive', 'Desktop');
const targetBasePath = 'D:/OrganizedFiles'; // Change this to your desired target directory
const desktopFoldersPath = path.join(targetBasePath, 'desktop folders');
const ignoreList = ['.gitignore', '.env', 'node_modules', 'temp', 'log.txt'];

const organizeFilesAndFolders = async () => {
    try {
        await fs.ensureDir(targetBasePath);
        await fs.ensureDir(desktopFoldersPath);

        const items = await fs.readdir(desktopPath);
        console.log(`Found items: ${items}`);

        for (const item of items) {
            const itemPath = path.join(desktopPath, item);
            const stats = await fs.stat(itemPath);
            console.log(`Processing: ${itemPath}`);

            
            if (ignoreList.includes(item)) {
                console.log(`Skipping ignored item: ${item}`);
                continue; 
            }

            if (stats.isFile()) {
                let destDir;
                if (/\.(jpg|jpeg|png|gif|bmp|svg)$/i.test(item)) {
                    destDir = path.join(targetBasePath, 'Images');
                } else if (/\.(pdf|doc|docx|ppt|pptx|txt)$/i.test(item)) {
                    destDir = path.join(targetBasePath, 'Documents');
                } else if (/\.(mp3|wav|ogg|flac)$/i.test(item)) {
                    destDir = path.join(targetBasePath, 'Audio');
                } else if (/\.(mp4|avi|mkv)$/i.test(item)) {
                    destDir = path.join(targetBasePath, 'Videos');
                } else if (/\.(exe|msi)$/i.test(item)) {
                    destDir = path.join(targetBasePath, 'Installers');
                } else {
                    console.log(`Skipping unsupported file type: ${item}`);
                    continue; 
                }

                await fs.ensureDir(destDir);
                console.log(`Destination directory created: ${destDir}`);

                try {
                    await fs.move(itemPath, path.join(destDir, item), { overwrite: true });
                    console.log(`Moved file ${item} to ${destDir}`);
                } catch (moveError) {
                    console.error(`Error moving file ${item}:`, moveError);
                }

            } else if (stats.isDirectory()) {
                if (stats.isSymbolicLink()) {
                    console.log(`Skipping symlink: ${item}`);
                    continue;
                }
                const folderDest = path.join(desktopFoldersPath, item);
                try {
                    await fs.copy(itemPath, folderDest);
                    await fs.remove(itemPath); 
                    console.log(`Moved folder ${item} to ${desktopFoldersPath}`);
                } catch (moveError) {
                    console.error(`Error moving folder ${item}:`, moveError);
                }
            }
        }

        console.log('File and folder organization complete!');
    } catch (error) {
        console.error('Error organizing files and folders:', error);
    }
};

organizeFilesAndFolders();