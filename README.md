# GraphQL-with-React

Course code for the GraphQL with React course by Stephen Grider at
[Udemy](https://www.udemy.com/graphql-with-react-course/).

## Query examples for reference

These are query and mutation examples to remember the syntax when it's more than
just a simple query or mutation.

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

### Parameterised Mutations
```
mutation AddSong($title: String!) {
  addSong(title: $title) {
    id
  }
  }
```

## Differences from Stephen

I will probably check in my code much more often than Stephen suggests it (assuming he does).

I dislike lodash, because it has been largely unnecessary since ES2015. I will only use
it when it is doing something which is not already implemented in the latest JavaScript.

I have updated the version of many of the npm modules in use in the lyrical application. Notably, it is not easy to update Webpack to 4.x, React to 16.x or the Apollo modules
to the latest version so I haven't done that as of 26-Sep-19.

### Git client

I have used Git at the command-line for 10 years. Over that time, I have tried
many different graphical shells for Git, without finding one that was easier
and nicer to use than the command-line (in my view).

I have now found that [GitKraken](https://www.gitkraken.com) is an excellent
Git shell and would advise using it to everyone.

### Questions

If you have any questions about this repository, or any others of mine, please
don't hesitate to contact me.
