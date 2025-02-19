import{_ as p,o as l,c as e,j as a,a as r,t,ag as o}from"./chunks/framework.lTm5q8ku.js";const A=JSON.parse('{"title":"OCR4all-libraries – Setup","description":"","frontmatter":{"title":"OCR4all-libraries – Setup"},"headers":[],"relativePath":"ocr4all-libraries/setup.md","filePath":"ocr4all-libraries/setup.md","lastUpdated":1739952751000}'),i={name:"ocr4all-libraries/setup.md"},c={id:"frontmatter-title",tabindex:"-1"};function R(n,s,_,d,u,m){return l(),e("div",null,[a("h1",c,[r(t(n.$frontmatter.title)+" ",1),s[0]||(s[0]=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1))]),s[1]||(s[1]=o(`<p>If you want to try out the current release of <strong>OCR4all-libraries</strong> you can simply use the following Docker Compose file or download it <a href="https://github.com/OCR4all/ocr4all-libraries-docker" target="_blank" rel="noreferrer">here</a>.</p><p>The prerequisite for this is having both <a href="https://docs.docker.com/get-started/get-docker/" target="_blank" rel="noreferrer">Docker</a> and <a href="https://docs.docker.com/compose/install/" target="_blank" rel="noreferrer">Docker Compose</a> installed.</p><p>A more in-depth installation guide will follow shortly.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This will install an early release of <strong>OCR4all-libraries</strong> which may still contain some bugs and many features are yet to come.</p><p>A more detailed guide will follow shortly.</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>version: &quot;3.9&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>  msa-calamari:</span></span>
<span class="line"><span>    hostname: msa-calamari</span></span>
<span class="line"><span>    user: &quot;\${UID:-}&quot;</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>      - SPRING_PROFILES_ACTIVE=\${CALAMARI_PROFILES:-logging-debug,msa-api,docker}</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - \${SERVER_ASSEMBLE:-~/ocr4all/assemble}:/srv/ocr4all/assemble</span></span>
<span class="line"><span>      - \${SERVER_DATA:-~/ocr4all/data}:/srv/ocr4all/data</span></span>
<span class="line"><span>      - \${SERVER_TEMPORARY:-~/ocr4all/tmp}:/srv/ocr4all/tmp</span></span>
<span class="line"><span>      - \${SERVER_WORKSPACE_PROJECT:-~/ocr4all/workspace/projects}:/srv/ocr4all/projects</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &quot;\${CALAMARI_API_PORT:-127.0.0.1:9092}:8080&quot;</span></span>
<span class="line"><span>    image: uniwuezpd/ocr4all-msa-calamari:\${CALAMARI_DOCKERHUB_TAG:-latest}</span></span>
<span class="line"><span>  msa-ocrd:</span></span>
<span class="line"><span>    hostname: msa-ocrd</span></span>
<span class="line"><span>    user: &quot;\${UID:-}&quot;</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>      - SPRING_PROFILES_ACTIVE=\${OCRD_PROFILES:-logging-debug,msa-api,docker}</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - \${SERVER_RESOURCES_ORCD:-~/ocr4all/opt/ocr-d/resources}:/usr/local/share/ocrd-resources</span></span>
<span class="line"><span>      - \${SERVER_WORKSPACE_PROJECT:-~/ocr4all/workspace/projects}:/srv/ocr4all/projects</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &quot;\${OCRD_API_PORT:-127.0.0.1:9091}:8080&quot;</span></span>
<span class="line"><span>    image: uniwuezpd/ocr4all-msa-ocrd:\${OCRD_DOCKERHUB_TAG:-latest}</span></span>
<span class="line"><span>  server:</span></span>
<span class="line"><span>    user: &quot;\${UID:-}&quot;</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>      - SPRING_PROFILES_ACTIVE=\${SERVER_PROFILES:-logging-debug,create-administrator,server,api,api-localhost,documentation,docker}</span></span>
<span class="line"><span>      - OCR4ALL_APPLICATION_SECURITY_ADMINISTRATOR_LOGIN=\${SERVER_ADMINISTRATOR_LOGIN:-admin}</span></span>
<span class="line"><span>      - OCR4ALL_APPLICATION_SECURITY_ADMINISTRATOR_PASSWORD=\${SERVER_ADMINISTRATOR_PASSWORD:-ocr4all}</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - \${SERVER_HOME:-~/ocr4all}:/srv/ocr4all</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &quot;\${SERVER_API_PORT:-9090}:8080&quot;</span></span>
<span class="line"><span>    depends_on:</span></span>
<span class="line"><span>      - msa-calamari</span></span>
<span class="line"><span>      - msa-ocrd</span></span>
<span class="line"><span>    image: uniwuezpd/ocr4all-server:\${SERVER_DOCKERHUB_TAG:-latest}</span></span>
<span class="line"><span>  webapp:</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &quot;\${WEBAPP_PORT:-8080}:80&quot;</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>      API_BASE_URL: \${WEBAPP_API_BASE_URL:-http://localhost:9090/api/v1.0}</span></span>
<span class="line"><span>      LAREX_URL: \${WEBAPP_LAREX_URL:-http://localhost:8081/Larex/directLibrary}</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    image: uniwuezpd/ocr4all-frontend:\${WEBAPP_DOCKERHUB_TAG:-latest}</span></span>
<span class="line"><span>  larex:</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &quot;\${LAREX_PORT:-8081}:8080&quot;</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - \${SERVER_WORKSPACE:-~/ocr4all/workspace}:/home/books</span></span>
<span class="line"><span>    image: uniwuezpd/larex:legacy</span></span></code></pre></div>`,5))])}const S=p(i,[["render",R]]);export{A as __pageData,S as default};
