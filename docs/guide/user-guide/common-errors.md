---
title: Common errors
---
# {{ $frontmatter.title }}
::: danger Warning
This page is still under construction.
If you come across any problems please [contact us](mailto:florian.langhanki@uni-wuerzburg.de).
:::
## Errors, frequent problems and how to avoid them

Problems with the installation and start of Docker:
- Did you encounter problems while installing and starting Docker: you will find a detailed guide here.
- Do you have difficulties starting the Docker containers for OCR4all? Is no server start possible? First, start Docker again (if necessary, reload OCR4all image anew and reset the corresponding container, following the steps described in the OCR4all setup guide here).
- Are you using an Apple device with a M1 / M2 chip? We currently don't offer specific images for these systems but are working on it.

Problems selecting works in 'Project Overview':
- If available works are not displayed in 'project overview', review your folder structure and check if it is correct, following the guidelines outlined in chapter 1.2. If there is no problem with your folder structure, delete the OCR4all Docker container and re-execute the `docker run...` command, following the setup guide here.
- Are you unable to select a work? Please ensure that your work/document title contains no blanks or umlauts.

Problems with Calamari recognition or training:
- Are you experiencing errors with mentions to AVX? If you're using an old CPU w/o AVX or on a virtual machine where AVX passthrough wasn't enabled you might run into several errors during the process execution as official TensorFlow builds don't offer support for these systems.

**We welcome all questions and encourage to contact us if you have any problem. Please send an email to [Dr. Christian Reul](mailto:christian.reul@uni-wuerzburg.de) (project lead) or [Florian Langhanki](mailto:florian.langhanki@uni-wuerzburg.de) (consultation, guides, and non-technical user support) or contact us on GitHub.**
