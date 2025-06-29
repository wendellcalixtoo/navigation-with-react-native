# 🚀 Navegação React Native

Bem-vindo ao projeto **Navegação**!  
Este é um app de exemplo em **React Native** utilizando o Expo, demonstrando as principais formas de navegação: Drawer, Stack e Bottom Tabs, com componentes customizados e organização moderna de código.

---

## ✨ Funcionalidades

- 📱 Navegação entre telas usando Drawer, Stack e Bottom Tabs  
- 🧩 Componentes reutilizáveis (Header, Title, ButtonIcon)
- 💡 Código organizado e fácil de entender

---

## 📦 Principais Dependências

| Pacote                           | Descrição                                   |
|-----------------------------------|---------------------------------------------|
| `react-native`                    | Base do app mobile                          |
| `expo`                            | Ferramentas e APIs para React Native        |
| `@react-navigation/native`        | Navegação principal                         |
| `@react-navigation/drawer`        | Navegação tipo Drawer (menu lateral)        |
| `@react-navigation/stack`         | Navegação tipo Stack (pilha de telas)       |
| `@react-navigation/bottom-tabs`   | Navegação por abas inferiores               |
| `react-native-gesture-handler`    | Gestos para navegação                       |
| `react-native-reanimated`         | Animações para navegação                    |

---

## 🛠️ Como rodar o projeto

1. **Clone o repositório**
   ```sh
   git clone https://github.com/seu-usuario/navegacao.git
   cd navegacao
   ```

2. **Instale as dependências**
   ```sh
   npm install
   ```

3. **Inicie o projeto no Android**
   ```sh
   npx expo run:android
   ```
   > Certifique-se de ter um emulador Android aberto ou um dispositivo conectado via USB.

4. **(Opcional) Rode no modo web**
   ```sh
   npx expo start
   ```
   E escaneie o QR Code com o app Expo Go.

---

## 📂 Estrutura de Pastas

```
src/
 ├─ app/           # Telas do app (Home, Product, etc)
 ├─ components/    # Componentes reutilizáveis
 └─ routes/        # Configuração das rotas (Drawer, Stack, Tabs)
```

---

## 📝 Observações

- O projeto está configurado para usar o **Drawer** como navegação principal.  
  Para testar outras navegações, altere o componente ativo em `src/routes/index.tsx`:

  ```tsx
  {/* <StackRoutes /> */}
  {/* <BottomRoutes /> */}
  <DrawerRoutes />
  ```

---

## 🤝 Contribuição

Sinta-se à vontade para abrir issues ou pull requests!

---

Feito com 💙 por Wendell Calixto