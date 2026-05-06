import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import { Link } from 'react-router-dom';


const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    
  return {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: (theme.vars || theme).palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(theme.palette.grey[100], 0.06),
      ...theme.applyStyles('dark', {
        backgroundColor: emphasize(theme.palette.grey[800], 0.06),
      }),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[100], 0.12),
      ...theme.applyStyles('dark', {
        backgroundColor: emphasize(theme.palette.grey[800], 0.12),
      }),
    },
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  };
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export  function CustomizedBreadcrumbs(props) {
  return (
    <div role="presentation" onClick={handleClick} >
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component={Link}
          to="/"
          label="Dashboard"
          
        />
        <StyledBreadcrumb component="a" href="/product" label={props.page2} />
        <StyledBreadcrumb
          label={props.page1}
        />
      </Breadcrumbs>
    </div>
  );
}