# Cámara Chileno-Haitiana de Comercio, Turismo e Industria — Sitio Web

Sitio institucional de la CCH. Next.js 16 (App Router) + TypeScript + Tailwind
CSS, contenido editable vía Sanity Studio, bilingüe español (por defecto) /
francés vía next-intl.

## Stack

- **Next.js 16** (App Router, TypeScript) — todas las páginas de contenido
  son dinámicas (`export const dynamic = "force-dynamic"`) para reflejar los
  cambios hechos en Sanity sin necesidad de rebuild.
- **Tailwind CSS v4** — paleta y tipografía de la CCH configuradas en
  `src/app/globals.css` (`@theme`).
- **Sanity.io** — CMS headless, Studio embebido en `/studio`.
- **next-intl** — i18n con `es` (por defecto, sin prefijo) y `fr` (`/fr/...`).
- **Vercel** — despliegue objetivo.

## Empezar

```bash
npm install
cp .env.local.example .env.local   # completar con tu proyecto Sanity
npm run dev
```

El sitio funciona con contenido de reemplazo (`src/lib/placeholder-data.ts`)
mientras `NEXT_PUBLIC_SANITY_PROJECT_ID` no esté configurado, así que se
puede desarrollar el front sin depender de Sanity desde el día uno.

## Configurar Sanity

1. Crear un proyecto en [sanity.io/manage](https://www.sanity.io/manage) (o
   `npx sanity@latest init` desde este repo).
2. Completar `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxxx
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
3. `npm run dev` y abrir [http://localhost:3000/studio](http://localhost:3000/studio)
   para cargar contenido (noticias, documentos, directorio, socios,
   alianzas, comités, configuración del sitio).
4. Los tipos de contenido editables están en `src/sanity/schemaTypes/`:
   `post`, `documentResource`, `page`, `boardMember`, `partner`, `alliance`,
   `committee`, `siteSettings`. `post`, `documentResource` y `page` usan el
   plugin `@sanity/document-internationalization` (documentos ES/FR
   vinculados); el resto usa campos `localeString`/`localeText` inline.

### Revalidación (webhook)

`/api/revalidate` acepta webhooks de Sanity para invalidar el cache de Next
por tipo de documento. Configurar en Sanity → API → Webhooks, apuntando a
`https://tu-dominio/api/revalidate`, y definir `SANITY_REVALIDATE_SECRET` en
las variables de entorno (mismo valor en Sanity y en Vercel).

## Estructura

```
src/
  app/[locale]/        # páginas (inicio, la-camara, servicios, socios, noticias, ...)
  app/studio/           # Sanity Studio embebido
  components/           # componentes por dominio (home, team, news, partners, forms, ui, layout)
  sanity/                # schema, cliente, queries, fetchers (con fallback a placeholder-data)
  lib/placeholder-data.ts # contenido de la maqueta original (ES/FR) usado como fallback
  messages/{es,fr}.json  # strings de UI (nav, botones, labels)
  i18n/                  # routing, navigation, request config de next-intl
```

## Notas técnicas

- Las páginas de contenido son **dinámicas** (SSR) en vez de estáticas: esto
  evita depender de un rebuild para publicar cambios de Sanity, y es más
  simple dado el uso combinado de `next-intl` (hooks `useTranslations`/
  `useLocale`, no las variantes async de `next-intl/server`, en los
  componentes de página).
- Las imágenes usan un componente `ImagePlaceholder` que muestra un
  placeholder gris hasta que se sube la imagen real en el Studio — no hace
  falta ningún asset para que el sitio compile y se vea completo.
