import React from 'react';
import { Layout, Row, Col, Input, Menu, Dropdown, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const {  Header } = Layout;
const Search = Input.Search;

function CommonHeader(props) {
    
    const userMenu = (
        <Menu>
            <Menu.Item>
                <a href="#">Profile</a>
            </Menu.Item>
            <Menu.Item>
                <a href="#" onClick={props.onLogout}>Logout</a>
            </Menu.Item>
        </Menu>
    );

    return (
        <Header style={{background: "#ffffff"}}>
            <Row type="flex" justify="space-between" className="container">
                <Col xs={0} sm={6} md={8} lg={8} xl={8}>
                    <div className="logo">
                        <a href="/">
                            <img src="/images/logo.png" alt="logo"/>
                        </a>
                    </div>
                    {/*<Menu
                        theme="dark"
                        mode="horizontal"
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1"><a href="/">Home</a></Menu.Item>
                    </Menu>*/}
                </Col>
                <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                    <Search
                        placeholder="search movies"
                        onSearch={props.onSearch}
                        enterButton
                    />
                </Col>
                <Col xs={10} sm={6} md={8} lg={8} xl={8}>
                    <div style={{float: "right"}}>
                        {props.isLogin ? (
                            <div>
                                <Dropdown overlay={userMenu}>
                                    <a className="ant-dropdown-link" href="#">
                                      {props.username} <Icon type="down" />
                                    </a>
                                </Dropdown>
                            </div>
                        ) : (
                            <div>
                                <a href="/login" style={{margin: "0 12px"}}>Log in</a>
                                <a href="/signup" style={{margin: "0 12px"}}>Sign up</a>
                            </div>        
                        )}
                    </div>
                </Col> 
            </Row>
        </Header>
    )
}


export default CommonHeader