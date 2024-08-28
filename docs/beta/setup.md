---
title: OCR4all 1.0 – Setup
---
# {{ $frontmatter.title }}

If you want to try out the beta version of release 1.0 of OCR4all you can simply use the following Docker Compose file or download it [here]().

The prerequisite for this is having both [Docker](https://docs.docker.com/get-started/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) installed. 

A more in-depth installation guide will follow with the stable release of OCR4all 1.0.

::: warning
This will install a beta version of OCR4all 1.0 which may still contain some bugs and many features are yet to come.
:::

```
version: "3.9"

services:
  msa-calamari:
    hostname: msa-calamari
    build:
      context: ocr4all-app-calamari-msa
      dockerfile: Dockerfile
      args:
        - TAG=${CALAMARI_TAG:-20240502}
        - JAVA_VERSION=${CALAMARI_JAVA_VERSION:-17}
        - APP_VERSION=${CALAMARI_APP_VERSION:-1.0-SNAPSHOT}
    user: "${UID:-}"
    restart: always
    environment:
      - SPRING_PROFILES_ACTIVE=${CALAMARI_PROFILES:-logging-debug,msa-api,docker}
    volumes:
      - ${OCR4ALL_DATA:-~/ocr4all/docker/data}:/srv/ocr4all/data
      - ${OCR4ALL_ASSEMBLE:-~/ocr4all/docker/assemble}:/srv/ocr4all/assemble
      - ${OCR4ALL_WORKSPACE_PROJECT:-~/ocr4all/docker/workspace/projects}:/srv/ocr4all/projects
    ports:
      - "${CALAMARI_API_PORT:-127.0.0.1:9092}:8080"
  msa-ocrd:
    hostname: msa-ocrd
    build:
      context: ocr4all-app-ocrd-msa
      dockerfile: Dockerfile
      args:
        - TAG=${OCRD_TAG:-2024-04-29}
        - JAVA_VERSION=${OCRD_JAVA_VERSION:-17}
        - APP_VERSION=${OCRD_APP_VERSION:-1.0-SNAPSHOT}
    user: "${UID:-}"
    restart: always
    environment:
      - SPRING_PROFILES_ACTIVE=${OCRD_PROFILES:-logging-debug,msa-api,docker}
    volumes:
      - ${OCR4ALL_WORKSPACE_PROJECT:-~/ocr4all/docker/workspace/projects}:/srv/ocr4all/projects
      - ${OCR4ALL_RESOURCES_ORCD:-~/ocr4all/docker/opt/ocr-d/resources}:/usr/local/share/ocrd-resources
    ports:
      - "${OCRD_API_PORT:-127.0.0.1:9091}:8080"
  server:
     build:
      context: ocr4all-app
      dockerfile: Dockerfile
      args:
        - TAG=${OCR4ALL_TAG:-17-jdk-slim}
        - APP_VERSION=${OCR4ALL_APP_VERSION:-1.0-SNAPSHOT}
    user: "${UID:-}"
    restart: always
    environment:
      - SPRING_PROFILES_ACTIVE=${OCR4ALL_PROFILES:-logging-debug,server,api,documentation,docker}
    volumes:
      - ${OCR4ALL_HOME:-~/ocr4all/docker}:/srv/ocr4all
    ports:
      - "${OCR4ALL_API_PORT:-9090}:8080"
    depends_on:
      - msa-calamari
      - msa-ocrd
```
