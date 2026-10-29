# Origem Azul

Nome do projeto: `origemazul-camarao`.
Pasta local: `C:\SITES AGENCIA ESTALO\origemazul-camarao`.

Este projeto é independente de `producao-de-camarao` e de `Camarao-do-norte`. Os arquivos temporários e de publicação devem ficar em `outputs/` deste repositório, nunca nas pastas desses outros projetos. O remote do GitHub deve corresponder exclusivamente a `origemazul-camarao`.

Site em React 19 com React Router, Vite e identidade visual em branco e azul.

## Executar

```sh
npm install
npm run dev
```

## Gerar versão de produção

```sh
npm run build
npm run preview
```

Configure o servidor de hospedagem para servir `index.html` nas rotas da aplicação (fallback de SPA).

## Organização

- `src/components`: componentes reutilizáveis e estrutura visual.
- `src/pages`: páginas e suas interações locais.
- `src/routes.jsx`: tabela central de rotas, incluindo página 404.
- `src/data/content.js`: conteúdo e dados do catálogo.
- `src/styles/global.css`: identidade visual e regras responsivas.
- `public/images`: fotografias originais de IA otimizadas em WebP.
- `src/data/media.js`: imagens separadas por página e posição de uso.

Nome e informações comerciais são demonstrativos. O formulário valida os campos, mas não envia dados. Antes de uso comercial, configurar contatos, integração de envio, dados da empresa, fichas de produtos e política de privacidade.

## Imagens

O site usa 67 fotografias distintas: nenhuma foto aparece em mais de uma posição, mesmo entre listagens, cards e páginas de detalhe. Pessoas e instalações são fictícias e identificadas como ilustrativas. Os retratos representam coordenação de produção, biologia, técnica de cultivo e controle de qualidade.

As imagens foram criadas com a ferramenta integrada ImageGen. A coleção inclui viveiros, berçários, análises, manejo, biossegurança, beneficiamento e apresentações comerciais. Os prompts pedem fotografia editorial realista, paleta branca e azul, luz natural, sem marcas nem textos. Os conjuntos de prompts estão em `public/images/prompts.json`, `public/images/unique-prompts.json` e `public/images/expanded-prompts.json`.

Produtos inclui filtros, guia de preparo interativo, comparação de apresentações, explicação de classificação e dúvidas frequentes. Qualidade possui componente próprio com percurso interativo, rastreabilidade, orientações sobre rótulo e recebimento e referências da Anvisa. Certificações e dados comerciais permanecem sujeitos à confirmação pela empresa.

Os arquivos usados pelo site estão em `public/images/*.webp`; os PNG originais são preservados localmente em `outputs/image-originals`. Para otimizar novas imagens e verificar todas as páginas:

```sh
npm run images:optimize
npm run check:images
```

A verificação renderiza as 23 rotas, confirma que cada arquivo existe e compara os conteúdos para detectar a mesma imagem salva com nomes diferentes.

Geradas pela ferramenta integrada ImageGen, sem imagens de terceiros. Prompts: fotografia aérea editorial de viveiros costeiros brasileiros; fotografia de análise da água em laboratório; fotografia de catálogo de camarão cru inteiro sobre gelo; fotografia de camarão cru sem cabeça com casca; fotografia de camarão cru descascado sem cauda. Todas com luz natural ou suave, paleta fria azul e branca, sem textos, marcas ou logotipos.

A direção visual de Produtos e Qualidade usa aberturas fotográficas, cards de processo e fotos amplas entre os conteúdos. Comparativo e checklist de rótulo ficam em seções recolhíveis. As duas páginas têm oito fotografias exclusivas cada, seguindo a referência visual fornecida pelo usuário.

O banner inicial é um carrossel automático de cinco fotografias de produção de camarão, sem texto, indicadores ou botões visíveis. A troca ocorre a cada 6,5 segundos; pausa ao passar o mouse, receber foco ou ocultar a aba, respeita movimento reduzido e oferece navegação pelas setas e pausa pela barra de espaço. Novos prompts: public/images/carousel-prompts.json.
