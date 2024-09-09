import{_ as n,c as e,j as s,a as p,t as l,a4 as t,o}from"./chunks/framework.CI6U-QuP.js";const O=JSON.parse('{"title":"OCR4all 1.0 – Setup","description":"","frontmatter":{"title":"OCR4all 1.0 – Setup"},"headers":[],"relativePath":"beta/setup.md","filePath":"beta/setup.md","lastUpdated":1725861431000}'),r={name:"beta/setup.md"},c={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),_=t(`<p>If you want to try out the beta version of release 1.0 of OCR4all you can simply use the following Docker Compose file or download it <a href="https://github.com/OCR4all/ocr4all-docker/" target="_blank" rel="noreferrer">here</a>.</p><p>The prerequisite for this is having both <a href="https://docs.docker.com/get-started/get-docker/" target="_blank" rel="noreferrer">Docker</a> and <a href="https://docs.docker.com/compose/install/" target="_blank" rel="noreferrer">Docker Compose</a> installed.</p><p>A more in-depth installation guide will follow with the stable release of OCR4all 1.0.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This will install an early beta version of OCR4all 1.0 which may still contain some bugs and many features (among others the base mode) are yet to come. Therefore, we recommend that most users continue using the legacy version of OCR4all until the stable release of version 1.0!</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>services:</span></span>
<span class="line"><span>  msa-calamari:</span></span>
<span class="line"><span>    hostname: msa-calamari</span></span>
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
<span class="line"><span>    image: uniwuezpd/ocr4all-msa-calamari:\${OCR4ALL_MSA_CALAMARI_TAG:-latest}</span></span>
<span class="line"><span>  msa-ocrd:</span></span>
<span class="line"><span>    hostname: msa-ocrd</span></span>
<span class="line"><span>    user: &quot;\${UID:-}&quot;</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>      - SPRING_PROFILES_ACTIVE=\${OCRD_PROFILES:-logging-debug,msa-api,docker}</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - \${OCR4ALL_WORKSPACE_PROJECT:-~/ocr4all/docker/workspace/projects}:/srv/ocr4all/projects</span></span>
<span class="line"><span>      - \${OCR4ALL_RESOURCES_ORCD:-~/ocr4all/docker/opt/ocr-d/resources}:/usr/local/share/ocrd-resources</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &quot;\${OCRD_API_PORT:-127.0.0.1:9091}:8080&quot;</span></span>
<span class="line"><span>    image: uniwuezpd/ocr4all-msa-ocrd:\${OCR4ALL_MSA_OCRD_TAG:-latest}</span></span>
<span class="line"><span>  server:</span></span>
<span class="line"><span>    user: &quot;\${UID:-}&quot;</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>      - SPRING_PROFILES_ACTIVE=\${OCR4ALL_PROFILES:-logging-debug,create_administrator,server,api,api-localhost,documentation,docker}</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - \${OCR4ALL_HOME:-~/ocr4all/docker}:/srv/ocr4all</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &quot;\${OCR4ALL_API_PORT:-9090}:8080&quot;</span></span>
<span class="line"><span>    depends_on:</span></span>
<span class="line"><span>      - msa-calamari</span></span>
<span class="line"><span>      - msa-ocrd</span></span>
<span class="line"><span>    image: uniwuezpd/ocr4all-server:\${OCR4ALL_SERVER_OCRD_TAG:-latest}</span></span>
<span class="line"><span>  webapp:</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &quot;\${OCR4ALL_WEBAPP_PORT:-8080}:80&quot;</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>      API_BASE_URL: \${OCR4ALL_WEBAPP_API_BASE_URL:-http://localhost:9090/api/v1.0}</span></span>
<span class="line"><span>      LAREX_URL: \${OCR4ALL_WEBAPP_LAREX_URL:-http://localhost:8081/Larex/directLibrary}</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    image: uniwuezpd/ocr4all-frontend:\${OCR4ALL_WEBAPP_TAG:-latest}</span></span>
<span class="line"><span>  larex:</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &quot;\${LAREX_PORT:-8081}:8080&quot;</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - \${OCR4ALL_WORKSPACE:-~/ocr4all/docker/workspace}:/home/books</span></span>
<span class="line"><span>    image: uniwuezpd/larex:legacy</span></span></code></pre></div>`,5);function d(a,u,m,R,A,h){return o(),e("div",null,[s("h1",c,[p(l(a.$frontmatter.title)+" ",1),i]),_])}const C=n(r,[["render",d]]);export{O as __pageData,C as default};
