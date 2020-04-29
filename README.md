<div>
  <h1 align="center"> Simple Projects API </h1>
  <p>Projeto api simples que registra projetos e tarefas para os mesmos.</p>
  <table>
    <tbody><tr>
      <th>Método</th>
      <th>Rota</th>
      <th>Descrição</th>
    </tr>
    <tr>
      <td>GET</td>
      <td>/projects</td>
      <td>Lista todos os projetos</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/projects</td>
      <td>Adiciona um novo projeto. body: {"id":int, "title":string, "tasks":["array"]</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/projects/:id</td>
      <td>Edita o título de um projeto. body: {"title":"string"}</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/projects/:id</td>
      <td>Deleta um projeto pelo id</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/projects/:id/tasks</td>
      <td>Adiciona novas tarefas a um projeto. body: "tasks":["task1"]</td>
    </tr>
  </tbody></table>
</div>
