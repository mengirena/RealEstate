# Travel service - branding page

[![Netlify Status](https://api.netlify.com/api/v1/badges/8dd3688a-8f84-4c53-8702-a2cd7fcbe574/deploy-status)]()

👆🏽 click to check the live page

This is a 1 page landing page.

## Demo


## How it's built

**Tech used**: ReactJS, Styled Component

## Lesson Learnt

### Using styled component

- Install styled component to package: `npm install styled-components`

- Import to components: `import styled from 'styled-components'`. Hence, we can use `styled` to style different element with template literals.

```js
    const NavMenu = styled.div``
    const NavMenuLinks = styled(Link)``
```

- If we want to dissect the stylying into modules, we can import css: `import styled, {css} from 'styled-components/macro'`

```js
    const NavLink = css`
        color: #fff;
        display: flex;
        align-items:center;
        padding: 0 1rem;
        height: 100%;
        cursor: pointer;
        text-decoration: none;
    `

    const Logo = styled(Link)`
        ${NavLink}
        font-style: italic;
    `
```

### user-select

    
### object-fit: cover;

image responsive following its ratio

### width: calc(100% - 100px);

responsive and attach to one side

The operator must be surrounded by whitespace (+ and - are mandetory)