import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

const StyledSideNav = styled.div` 
    position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    height: 100%;
    width: 100px;     /* Set the width of the sidebar */
    z-index: 1;      /* Stay on top of everything */
    top: 0.0em;      /* Stay at the top */
    background-color: grey,; 
    overflow-x: hidden;     /* Disable horizontal scroll */
    padding-top: 15px;
`;

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
            items: [
                {
                  path: '/', /* path is used as id to check which NavItem is active basically */
                  name: 'Home',
                  css: 'fa fa-fw fa-home',
                  key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                {
                  path: '/:_id/:name',
                  name: 'Yourwishlist',
                  css: 'fas fa-gifts',
                  key: 2
                },
                {
                    path: '/signIn',
                    name: 'sign in',
                    css: 'fa fa-fw fa-snowman',
                    key: 3
                }
              ]
        }
    }

    onItemClick = (path) => {
        this.setState({ activePath: path });
    }

    render() {
        const { items, activePath } = this.state;
        return(
            <StyledSideNav>
                {
                    items.map((item) => {
                        return (
                            <NavItem 
                                path={item.path}
                                name={item.name}
                                css={item.css}
                                onItemClick={this.onItemClick}
                                active={item.path === activePath}
                                key={item.key}
                            />
                        );
                    })
                }
            </StyledSideNav>
        );
    }
}

const RouterSideNav = withRouter(SideNav);

const StyledNavItem = styled.div`
    height: 70px;
    width: 75px; /* width must be same size as NavBar to center */
    text-align: center; /* Aligns <a> inside of NavIcon div */
    margin-bottom: 0;   /* Puts space between NavItems */
    a {
        font-size: 2.7em;
        color: ${(props) => props.active ? "white" : "white"};
        opacity: 0.6;
        :hover {
            opacity: 1;
            text-decoration: none; /* Gets rid of underlining of icons */
        }  
    }
`;

class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }

    render() {
        const { active } = this.props;
        return(
            <StyledNavItem active={active}>
                <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
                    <NavIcon></NavIcon>
                </Link>
            </StyledNavItem>
        );
    }
}

const NavIcon = styled.div`
`;

export default class Sidebar extends React.Component {
    render() {
        return (
            <RouterSideNav></RouterSideNav>
        );
    }
}