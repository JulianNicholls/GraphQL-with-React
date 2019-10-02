# GraphQL-with-React

Course code for the GraphQL with React course by Stephen Grider at
[Udemy](https://www.udemy.com/graphql-with-react-course/).

## Progress

99. Working on Auth client

## Query examples for reference

These are query and mutation examples to remember the syntax when it's more than
just a simple query or mutation.

### Name the queries

If you name your queries and mutations in the GraphiQL interface, then you can have
multiple ones there and pressing the go button will then show a list of queries and
mutations to run. e.g.

```
mutation signup {
  signup(email: "julian@example.com", password: "password") { email }
}

mutation login {
  login(email: "julian@example.com", password: "password") { email }
}

mutation loginBad {
  login(email: "julian@example.com", password: "notpassword") { email }
}

mutation logout {
  logout { email }
}
```

### Fragments and Named Results
```
{
  first: company(id: "1") {
    ...companyDetails
  }

  company(id: "2") {
    ...companyDetails
  }
}

mutation {
  addCompany(name: "Woolworth") {
    ...companyDetails
  }
}

fragment companyDetails on Company {
  id, name, description
}
```

### Parameterised Queries and Mutations
```
query Song($id: ID!) {
  song(id: $id) {
    id, title
  }
}

mutation AddSong($title: String!) {
  addSong(title: $title) {
    id
  }
}
```

## Differences from Stephen

I have updated the version of most of the npm modules in use in the lyrical and
auth applications.

* I am using the latest React (16.10.x) and Apollo Client (2.x).

* The latest Apollo client link seems to default to `credentials: 'same-origin'`.

* it is not necessary to pass `{ dataIdFromObject: o => o.id }` to ApolloClient because that is essentially the default (at least in v2.x).

* Currently (01-Oct-2019), I have not updated to the latest react-router on either app.

* I am using React Functional Components and Hooks instead of classes.

* My user query is called currentUser.

* My queries and mutations are in a single file in the client: `.../queries/index.js`. I think that in a large app, I would make at more than one file for queries and mutations. I would probably not put each query or mutation in a sparate file, but group them by function.

### Git client

I have used Git at the command-line for more than 10 years. Over that time,
I have tried many different graphical shells for Git, without finding one
that was easier and nicer to use than the command-line (in my view).

I have now found that [GitKraken](https://www.gitkraken.com) is an excellent
Git shell and would advise using it to everyone.

I have no connection with GitKraken or Axosoft, other than as a satisfied user.

### Questions

If you have any questions about this repository, or any others of mine, please
don't hesitate to contact me.
