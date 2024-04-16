export const homepage = (list: string[] = []): string => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>⚡🔗 Short urls</title>

    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: #222436;
        color: #f0f0f0;
      }
      
      .content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        height: 100vh;
        width: 100vw;
      }
      
      h1, a {
        color: #f0f0f0;
        text-decoration: none;
      }
      
      ul {
        font-weight: bold;
        text-align: center;
        padding: 0;
        margin: 0;
        list-style: none;
      }
      
      form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 240px;
        width: 100%;
        background-color: #3d4270;
        padding: 20px;
        border-radius: 8px;
      }
      
      input {
        border-radius: 6px;
        padding: 10px 6px;
        border: 0;
      }
      
      button {
        margin-top: 20px;
        padding: 10px;
        border-radius: 6px;
        border: 0;
        background-color: #222436;
        color: #f0f0f0;
        cursor: pointer;
      }
      
      button:hover {
        opacity: 0.8;
      }
    </style>

  </head>
  <body>
    <main class="content">
      <h1>Homepage</h1>
      <p>Usage: /:name</p>

      <form>
        <input name="name" type="text" placeholder="Alias del enlace" />
        <input name="url" type="text" placeholder="https://..." />
        <input name="password" type="password" placeholder="Contraseña..." />

        <button type="submit">
          Crear enlace
        </button>
      </form>

      <div id="result"></div>

      <br />

      <ul>
        ${list.map((item) => `<li><a href="/${item}">${item}</a></li>`).join('')}
      </ul>
    </main>

    <script>
      const $ = (el) => document.querySelector(el)

      const $form = $('form')
      const $result = $('#result')

      $form.addEventListener('submit', (event) => {
        event.preventDefault()

        const data = {
          name: $form.name.value,
          url: $form.url.value,
          auth: $form.password.value
        }

        fetch('/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then((res) => {
            $result.innerText = res.ok ? '✅ Enlace creado' : '❌ Hubo un error'
          })
      })
    </script>

  </body>
</html>
`
