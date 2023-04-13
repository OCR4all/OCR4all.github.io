---
lang: en-US
title: macOS
---
# Setup Guide – {{ $frontmatter.title }}

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
│   |   ├── [Another book]
│   |   |   ├── input
│   |   |   |   ...
│   ├── models
...
```

Explanation:
- `ocr4all` (main folder)
- `models` (folder for the neural network models)
- `data` (folder for the documents you want to recognize)
- `[Your book]` (folder that contains all data of a single, specific print/book)
- `input` (folder for original, coloured / grayscaled book scans on page level)


### Docker Setup

- [Install Docker Desktop on macOS](https://docs.docker.com/desktop/install/mac-install/)

### OCR4all setup

- The OCR4all folder structure detailed above (`Preparation`) can be located anywhere you want.
- Open a terminal inside the OCR4all folder and load an OCR4all image by using the following command (this will take up a few minutes and requires a stable connection to the internet):

```
docker pull uniwuezpd/ocr4all
```

- Create the OCR4all container using the following command:

```
sudo docker run -p 1476:8080 \
    --name ocr4all \
    -v $PWD/data:/var/ocr4all/data \
    -v $PWD/models:/var/ocr4all/models/custom \
    -it uniwuezpd/ocr4all
```

- Do not enter line breaks manually!

### Browser access and further use

- OCR4all is optimized for Chrome/Chromium.
- Browser access: <a href="http://localhost:1476/ocr4all/" target="_blank" rel="noreferrer">http://localhost:1476/ocr4all/</a>
- If you want to check whether the mapping is working correctly you can add the example projects `Cirurgia` and `GNM` from [here](https://github.com/OCR4all/getting_started/tree/master/ocr4all/data) to your `data` directory. In the browser, check `Project Overview` -> `Project selection`: If you can find the two aforementioned books (or any other book that you added), the mapping (`-v $PWD/data:/…`) is working properly.

- Otherwise, it´s likely that there was a typo in the “docker run” command, so you will have to create the container again. First, delete the container you just created:

- Stop the process in the terminal using CTRL+C, then type:

```
docker rm ocr4all
```

- Check and correct your command (as with most terminals, you can sift through your previous commands using the arrow keys), especially the `-v $PWD/data:/…` lines, then run it again.
- If everything is set up properly, you are able to restart OCR4all in the future by using:

```
docker start –ia ocr4all
```
