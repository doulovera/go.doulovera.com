export const homepage = (list: string[] = []): string =>`
<!DOCTYPE html>
<html>
  <head>
    <title>Homepage</title>
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
    <div class="content">
      <h1>Homepage</h1>
      <p>Usage: /:name</p>

      <br />

      <ul>
        ${list.map((item) => `<li><a href="/${item}">${item}</a></li>`).join('')}
      </ul>
    </div>
  </body>
</html>
`
