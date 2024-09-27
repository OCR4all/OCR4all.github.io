---
title: OCR4all-libraries – Setup
---
# {{ $frontmatter.title }}

If you want to try out the current release of **OCR4all-libraries** you can simply use the following Docker Compose file or download it [here]().

The prerequisite for this is having both [Docker](https://docs.docker.com/get-started/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) installed. 

A more in-depth installation guide will follow shortly.

::: warning
This will install an early release of **OCR4all-libraries** which may still contain some bugs and many features are yet to come.

A more detailed guide will follow shortly.
:::

```
services:
  msa-calamari:
    hostname: msa-calamari
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
    image: uniwuezpd/ocr4all-msa-calamari:${OCR4ALL_MSA_CALAMARI_TAG:-latest}
  msa-ocrd:
    hostname: msa-ocrd
    user: "${UID:-}"
    restart: always
    environment:
      - SPRING_PROFILES_ACTIVE=${OCRD_PROFILES:-logging-debug,msa-api,docker}
    volumes:
      - ${OCR4ALL_WORKSPACE_PROJECT:-~/ocr4all/docker/workspace/projects}:/srv/ocr4all/projects
      - ${OCR4ALL_RESOURCES_ORCD:-~/ocr4all/docker/opt/ocr-d/resources}:/usr/local/share/ocrd-resources
    ports:
      - "${OCRD_API_PORT:-127.0.0.1:9091}:8080"
    image: uniwuezpd/ocr4all-msa-ocrd:${OCR4ALL_MSA_OCRD_TAG:-latest}
  server:
    user: "${UID:-}"
    restart: always
    environment:
      - SPRING_PROFILES_ACTIVE=${OCR4ALL_PROFILES:-logging-debug,create_administrator,server,api,api-localhost,documentation,docker}
    volumes:
      - ${OCR4ALL_HOME:-~/ocr4all/docker}:/srv/ocr4all
    ports:
      - "${OCR4ALL_API_PORT:-9090}:8080"
    depends_on:
      - msa-calamari
      - msa-ocrd
    image: uniwuezpd/ocr4all-server:${OCR4ALL_SERVER_OCRD_TAG:-latest}
  webapp:
    ports:
      - "${OCR4ALL_WEBAPP_PORT:-8080}:80"
    environment:
      API_BASE_URL: ${OCR4ALL_WEBAPP_API_BASE_URL:-http://localhost:9090/api/v1.0}
      LAREX_URL: ${OCR4ALL_WEBAPP_LAREX_URL:-http://localhost:8081/Larex/directLibrary}
    restart: always
    image: uniwuezpd/ocr4all-frontend:${OCR4ALL_WEBAPP_TAG:-latest}
  larex:
    ports:
      - "${LAREX_PORT:-8081}:8080"
    restart: always
    volumes:
      - ${OCR4ALL_WORKSPACE:-~/ocr4all/docker/workspace}:/home/books
    image: uniwuezpd/larex:legacy
```
