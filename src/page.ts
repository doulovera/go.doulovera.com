export const homepage = (list: string[] = []): string => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>midu.link - ⚡🔗 Short your urls</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">

    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #222436;
        color: #f0f0f0;
      }

      a {
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
      
      .content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
      }
    </style>
  </head>
  <body>
    <main class="content">
      <h1>Homepage</h1>
      <p>Usage: /:name</p>

      <form>
        <input name="name" type="text" "Alias del enlace" />
        <input name="url" type="text" "enlace" />
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
            $result.innerText = res.ok ? 'Enlace creado' : json.error
          })
      })
    </script>

  </body>
</html>
`
