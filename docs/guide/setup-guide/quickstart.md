---
lang: en-US
title: Quickstart
---
# {{ $frontmatter.title }}
- [Download and install Docker](https://docs.docker.com/get-docker/)
- Open a terminal of your choice and enter the following command if you're running Linux
```
sudo docker run -p 1476:8080 \
    -u `id -u root`:`id -g $USER` \
    --name ocr4all \
    -v $PWD/data:/var/ocr4all/data \
    -v $PWD/models:/var/ocr4all/models/custom \
    -it uniwuezpd/ocr4all
```
- Access OCR4all in your browser under `http://localhost:1476/ocr4all/` 

# Detailed setup guides
For more detailed instructions follow one of the setup guides below
- [Linux](linux.md)
- [Windows](windows.md)
- [macOS](macos.md)
