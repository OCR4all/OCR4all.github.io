---
lang: en-US
title: Setup guide
description: Setup guide
---
# Setup guide

## Preparation
You have to prepare the following folder structure:

```
...
├── ocr4all
│   ├── data
│   |   ├── [Your book]
│   |   |   ├── input
│   |   |   |   ├── 0001.png
│   |   |   |   ├── 0002.png
│   |   |   |   ├── ...
│   ├── models
...
```

Explanation:
- ocr4all (main folder)
- models (folder for the neural network models)
- data (folder for the documents you want to recognize)
- *work title* (Your book) (folder that contains all data of a single, specific print/book)
- input (folder for original, coloured/grayscaled book scans on page level)

<p style="text-align: justify">This structure can be created provisionally anywhere in your system. However, depending on your system (Linux, Windows, MacOS), you might have to move it later, see below.</p>

## Choosing the right Docker version
- You will need the Community Edition (CE) of Docker for installation.
- **Recommendation:** 
	- If you can: Use Linux!
	- Else, try to use a more recent Windows version that is compatible with *Docker for Windows*.

- Linux: https://docs.docker.com/install/ (choose your distribution on the left)

- Windows:

	- Docker for Windows:
		- Available for Windows 10, 64 bit: Pro, Enterprise or Education (Build 14393 or later; check for your version, which can be found in your System Information)
		- https://docs.docker.com/docker-for-windows/release-notes/ (If you do not want to register, do not chose “Download Docker for Windows” right away, but instead use “Download” under the “Stable Releases” section below)

- Mac: https://docs.docker.com/docker-for-mac/
	- Like with Windows, there is Docker for Mac
	- However, this will not be covered in this guide.


**Following up, you will find two separate guides, each for a Linux system, Docker and for Windows**

**You can copy the different terminal commands without line breaks from the accompanying file calls.txt.**


## Linux
### Docker Setup

- follow the instructions under https://docs.docker.com/install/
- ...and appreciate that everything works without further adjustments!

### OCR4all Setup

- The OCR4all folder structure detailed above (“Preparation”) can be located anywhere you want.
- Open a terminal inside the OCR4all folder and load an OCR4all image by using the following command (this will take up a few minutes and requires a stable connection to the internet):

*docker pull uniwuezpd/ocr4all*

- Create the OCR4all container using the following command:

*sudo docker run -p 1476:8080 -u `id -u root`:`id -g $USER` --name ocr4all -v $PWD/data:/var/ocr4all/data -v $PWD/models:/var/ocr4all/models/custom -it uniwuezpd/ocr4all*

- Do not enter line breaks manually!

### Browser access and further use

- OCR4all is optimized for Chrome/Chromium.
- Browser access: http://localhost:1476/ocr4all/
- In the browser tool, check Project Overview -> Project selection: If you can find the two pre- loaded books called “Cirurgia” and “GNM”, the mapping (-v $PWD/data:/…) is working properly.

- Otherwise, it´s likely that there was a typo in the “docker run” command, so you will have to create the container again. First, delete the container you just created:

- Stop the process in the terminal using CTRL+C, then type:

*docker rm ocr4all*

- Check and correct your command (as with most terminals, you can sift through your previous commands using the arrow keys), especially the “-v $PWD/data:/…”-lines, then run it again.
- If everything is set up properly, you are able to restart OCR4all in the future by using:

*docker start –ia ocr4all*

## Docker for Windows
### Docker Setup

- Follow the installation guide under https://docs.docker.com/desktop/windows/install/.

- Make sure to give all needed permissions, install all additional drivers etc.

- Start Docker.
- Adjust the Docker settings (Right-click on the Docker symbol in the hidden bottom-right toolbar, then chose Settings):
    - *Shared Drives*: Chosen drive (or partition).
        - You will need at least one. Our recommendation: Simply use “C:”.
        - Click Apply. (Attention: This requires a valid, non-empty Windows password. Changing or removing the password later results in a silent removal of your Docker privileges!).
    - *Advanced*: Adjust CPUs (max) and Memory (2GB+) if you want to.


### OCR4all Setup

- Move the OCR4all folder structure detailed above (“Preparation”) to the shared drive (or partition). In the following example, we use “C:\Users\Public\ocr4all\...”. We recommend to use the same for the first setup.
- Inside the OCR4all folder, open PowerShell (Shift + right click inside OCR4all folder -> Open PowerShell window here) and load an OCR4all image using the following command (this will take up a few minutes and requires a stable connection to the internet):

*docker pull uniwuezpd/ocr4all*

- Create the OCR4all container using the following command (Note: this works only for the recommended setup, i.e. when the OCR4all folder is located in “C:\Users\Public\...”)

*docker run -p 1476:8080 -p 5000:5000 --name ocr4all -v C:\Users\Public\ocr4all\data:/var/ocr4all/data -v C:\Users\Public\ocr4all\models:/var/ocr4all/models/custom -it uniwuezpd/ocr4all*

- Do not enter line breaks manually!

- Alternatively, you will have to adjust the paths marked in bold print.
    - Use absolute paths!
    - Use auto completion! (default: Tabulator)
    - It is recommended to not use print working directory (PWD) in this case.

### Browser access and further use

- OCR4all is optimized for Chrome/Chromium.
- Browser access: http://localhost:1476/ocr4all/
- In the browser tool, check Project Overview -> Project selection: If you can find the two pre- loaded books called “Cirurgia” und “GNM”, the mapping (-v C:\Users\...) is working properly.
 
 - Otherwise, there might be a typo in the “docker run” command, so you will have to create the container again. First, delete the container you just created:
- Stop the process in PowerShell using CTRL + C, then type:

*docker rm ocr4all*

- Check and correct your command (as with most terminals, you can sift through your previous commands using the arrow keys), especially the two “-v C:\Users\...”-lines, then run it again.
- If everything is set up properly, you are able to restart OCR4all in the future by using

*docker start –ia ocr4all*

