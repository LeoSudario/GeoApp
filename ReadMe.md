# GeoApp

Aplicativo focado em recursos de **geolocalização**, como obtenção da posição atual do usuário, visualização em mapa e funcionalidades baseadas em localização (ex.: marcar pontos, acompanhar deslocamento, buscar locais próximos, etc.).

> Status: em desenvolvimento

---

## Índice

- [Visão geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Requisitos](#requisitos)
- [Como executar](#como-executar)
- [Configuração de ambiente](#configuração-de-ambiente)
- [Permissões (Localização)](#permissões-localização)
- [Scripts](#scripts)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Roadmap](#roadmap)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Autor](#autor)

---

## Visão geral

O **GeoApp** é um projeto que explora funcionalidades de geolocalização para criar experiências baseadas na localização do usuário. A proposta é servir como base para estudos e/ou para evoluir um app com mapa, coordenadas, rotas e pontos de interesse.

---

## Funcionalidades

- Obter **localização atual** (latitude/longitude)
- Exibir **mapa** e posição do usuário *(quando aplicável)*
- Trabalhar com **permissões de localização** (em primeiro plano e/ou em segundo plano)
- Marcar/registrar **pontos de interesse (POIs)** *(opcional)*
- Histórico de localizações *(opcional)*

> Observação: a lista acima pode ser ajustada para refletir exatamente o que já está implementado no repositório.

---

## Tecnologias

> Preencha/ajuste conforme o projeto (exemplos):
- Linguagem principal: **(ex.: JavaScript / TypeScript / Kotlin / Swift / Dart)**
- Framework: **(ex.: React Native / Flutter / Android nativo / iOS nativo)**
- Mapas: **(ex.: Google Maps / Mapbox / OpenStreetMap)**
- Geolocalização: **(ex.: Geolocation API / Expo Location / FusedLocationProviderClient)**

---

## Requisitos

Antes de rodar, instale:

- **Git**
- **(Node.js / Android Studio / Xcode / Flutter SDK / Java JDK)** — conforme o seu projeto
- Em caso de uso de mapas (Google/Mapbox): **chave de API** configurada

---

## Como executar

### 1) Clonar o repositório

```bash
git clone https://github.com/LeoSudario/GeoApp.git
cd GeoApp
```

### 2) Instalar dependências

> Ajuste para seu gerenciador:
```bash
# exemplo (Node)
npm install
# ou
yarn
```

### 3) Rodar o projeto

> Ajuste para a plataforma:

```bash
# exemplo
npm run start
```

Se for mobile:

```bash
# exemplo Android
npm run android

# exemplo iOS (macOS)
npm run ios
```

---

## Configuração de ambiente

Se o projeto usa variáveis de ambiente, crie um arquivo `.env` na raiz (exemplo):

```env
MAPS_API_KEY=SUA_CHAVE_AQUI
```

> Se você preferir, adicione um `.env.example` ao repositório para documentar as variáveis necessárias.

---

## Permissões (Localização)

Dependendo da plataforma, você precisará conceder permissões de localização:

- **Android**
  - Localização aproximada e/ou precisa
  - Em alguns casos, localização em segundo plano
- **iOS**
  - `When In Use` e/ou `Always` (conforme a necessidade)

> Dica: descreva claramente por que o app solicita localização (boa prática e ajuda na aprovação em lojas).

---

## Scripts

> Ajuste conforme `package.json`/build system do projeto:

- `start` — inicia o servidor/metro/dev server
- `android` — executa no Android
- `ios` — executa no iOS
- `test` — roda testes
- `lint` — valida estilo/qualidade do código
- `build` — gera build de produção

---

## Estrutura do projeto

> Exemplo (ajuste para refletir as pastas reais):

```text
GeoApp/
├─ src/
│  ├─ screens/
│  ├─ components/
│  ├─ services/
│  └─ utils/
├─ assets/
├─ README.md
└─ ...
```

---

## Roadmap

- [ ] Melhorar tratamento de permissões e estados (negado, restrito, etc.)
- [ ] Adicionar pontos de interesse (POIs) com persistência local
- [ ] Rotas e navegação
- [ ] Testes automatizados
- [ ] CI (GitHub Actions)

---

## Contribuição

Contribuições são bem-vindas.

1. Faça um fork do projeto
2. Crie uma branch: `git checkout -b feature/minha-feature`
3. Commit: `git commit -m "feat: minha feature"`
4. Push: `git push origin feature/minha-feature`
5. Abra um Pull Request

---

## Licença

Defina a licença do projeto (ex.: MIT).  
Se ainda não houver, você pode adicionar um arquivo `LICENSE`.

---

## Autor

**LeoSudario**  
Repositório: https://github.com/LeoSudario/GeoApp