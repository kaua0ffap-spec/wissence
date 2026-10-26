# Clínica Wissence — estrutura organizada

## Instalação
1. Instale Node.js.
2. Na pasta do projeto, execute `npm install`.
3. Execute `npm run dev` para iniciar localmente.
4. Execute `npm run build` para gerar a versão de produção em `dist/`.

## Imagens locais
Coloque os arquivos reais da clínica nestes caminhos:
- `public/logo.png`
- `public/clinica-fachada.jpg`

O código também utiliza imagens externas do Unsplash, definidas em `src/lib/clinic.js`.

## Deploy na Vercel
Importe o repositório e use:
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

O `index.html` principal fica na raiz, como esperado pelo Vite.
