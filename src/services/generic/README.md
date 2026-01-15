# Generic Service

## API Endpoint Template

|     | fn          | Method | Path                                   | Action          |
| --- | ----------- | ------ | -------------------------------------- | --------------- |
| X   | get         | GET    | /[resource-name]/[id]                  | Get one by [id] |
| X   | getAll      | GET    | /[resource-name]?[query]               | List items      |
| X   | search      | GET    | /[resource-name]/search/[term]?[query] | Advanced search |
| X   | add         | POST   | /[resource-name]                       | Create one      |
| X   | addMany     | POST   | /[resource-name]/batch                 | Create many     |
| X   | replace     | PUT    | /[resource-name]/[id]                  | Replace one     |
| X   | replaceMany | PUT    | /[resource-name]/batch                 | Replace many    |
| X   | patch       | PATCH  | /[resource-name]/[id]                  | Update one      |
| X   | patchMany   | PATCH  | /[resource-name]/batch                 | Update many     |
| X   | upsert      | PATCH  | /[resource-name]/upsert                | Upsert one      |
| X   | upsertMany  | PATCH  | /[resource-name]/upsert/batch          | Upsert many     |
| X   | count       | GET    | /[resource-name]/count?[query]         | Counts items    |
| X   | delete      | DELETE | /[resource-name]/[id]                  | Delete one      |
