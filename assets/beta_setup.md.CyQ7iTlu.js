import{_ as n,c as p,j as s,a as e,t as l,a4 as t,o}from"./chunks/framework.CI6U-QuP.js";const h=JSON.parse('{"title":"OCR4all 1.0 – Setup","description":"","frontmatter":{"title":"OCR4all 1.0 – Setup"},"headers":[],"relativePath":"beta/setup.md","filePath":"beta/setup.md","lastUpdated":1724832369000}'),c={name:"beta/setup.md"},r={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),d=t(`<p>If you want to try out the beta version of release 1.0 of OCR4all you can simply use the following Docker Compose file or download it <a href="./">here</a>.</p><p>The prerequisite for this is having both <a href="https://docs.docker.com/get-started/get-docker/" target="_blank" rel="noreferrer">Docker</a> and <a href="https://docs.docker.com/compose/install/" target="_blank" rel="noreferrer">Docker Compose</a> installed.</p><p>A more in-depth installation guide will follow with the stable release of OCR4all 1.0.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This will install a beta version of OCR4all 1.0 which may still contain some bugs and many features are yet to come.</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>version: &quot;3.9&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>  msa-calamari:</span></span>
<span class="line"><span>    hostname: msa-calamari</span></span>
<span class="line"><span>    build:</span></span>
<span class="line"><span>      context: ocr4all-app-calamari-msa</span></span>
<span class="line"><span>      dockerfile: Dockerfile</span></span>
<span class="line"><span>      args:</span></span>
<span class="line"><span>        - TAG=\${CALAMARI_TAG:-20240502}</span></span>
<span class="line"><span>        - JAVA_VERSION=\${CALAMARI_JAVA_VERSION:-17}</span></span>
<span class="line"><span>        - APP_VERSION=\${CALAMARI_APP_VERSION:-1.0-SNAPSHOT}</span></span>
<span class="line"><span>    user: &quot;\${UID:-}&quot;</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>      - SPRING_PROFILES_ACTIVE=\${CALAMARI_PROFILES:-logging-debug,msa-api,docker}</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - \${OCR4ALL_DATA:-~/ocr4all/docker/data}:/srv/ocr4all/data</span></span>
<span class="line"><span>      - \${OCR4ALL_ASSEMBLE:-~/ocr4all/docker/assemble}:/srv/ocr4all/assemble</span></span>
<span class="line"><span>      - \${OCR4ALL_WORKSPACE_PROJECT:-~/ocr4all/docker/workspace/projects}:/srv/ocr4all/projects</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &quot;\${CALAMARI_API_PORT:-127.0.0.1:9092}:8080&quot;</span></span>
<span class="line"><span>  msa-ocrd:</span></span>
<span class="line"><span>    hostname: msa-ocrd</span></span>
<span class="line"><span>    build:</span></span>
<span class="line"><span>      context: ocr4all-app-ocrd-msa</span></span>
<span class="line"><span>      dockerfile: Dockerfile</span></span>
<span class="line"><span>      args:</span></span>
<span class="line"><span>        - TAG=\${OCRD_TAG:-2024-04-29}</span></span>
<span class="line"><span>        - JAVA_VERSION=\${OCRD_JAVA_VERSION:-17}</span></span>
<span class="line"><span>        - APP_VERSION=\${OCRD_APP_VERSION:-1.0-SNAPSHOT}</span></span>
<span class="line"><span>    user: &quot;\${UID:-}&quot;</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>      - SPRING_PROFILES_ACTIVE=\${OCRD_PROFILES:-logging-debug,msa-api,docker}</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - \${OCR4ALL_WORKSPACE_PROJECT:-~/ocr4all/docker/workspace/projects}:/srv/ocr4all/projects</span></span>
<span class="line"><span>      - \${OCR4ALL_RESOURCES_ORCD:-~/ocr4all/docker/opt/ocr-d/resources}:/usr/local/share/ocrd-resources</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &quot;\${OCRD_API_PORT:-127.0.0.1:9091}:8080&quot;</span></span>
<span class="line"><span>  server:</span></span>
<span class="line"><span>     build:</span></span>
<span class="line"><span>      context: ocr4all-app</span></span>
<span class="line"><span>      dockerfile: Dockerfile</span></span>
<span class="line"><span>      args:</span></span>
<span class="line"><span>        - TAG=\${OCR4ALL_TAG:-17-jdk-slim}</span></span>
<span class="line"><span>        - APP_VERSION=\${OCR4ALL_APP_VERSION:-1.0-SNAPSHOT}</span></span>
<span class="line"><span>    user: &quot;\${UID:-}&quot;</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>      - SPRING_PROFILES_ACTIVE=\${OCR4ALL_PROFILES:-logging-debug,server,api,documentation,docker}</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - \${OCR4ALL_HOME:-~/ocr4all/docker}:/srv/ocr4all</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &quot;\${OCR4ALL_API_PORT:-9090}:8080&quot;</span></span>
<span class="line"><span>    depends_on:</span></span>
<span class="line"><span>      - msa-calamari</span></span>
<span class="line"><span>      - msa-ocrd</span></span></code></pre></div>`,5);function _(a,A,u,R,m,O){return o(),p("div",null,[s("h1",r,[e(l(a.$frontmatter.title)+" ",1),i]),d])}const P=n(c,[["render",_]]);export{h as __pageData,P as default};
