import React from 'react';
import {Route,NavLink }from 'react-router-dom';
export default class OldSchoolMenuLink extends React.Component {
    render(){
        return (
            //NavLink là 1 dạng Link đăc biệt  có thể set class or style khi được Active
            <Route path={this.props.to} exact={this.props.activeOnlyWhenExact} children={({match})=>(
                    <div >
                        {match ? '> ' : ''} <NavLink to={this.props.to} exact activeClassName="active" >{this.props.label}</NavLink>
                    </div>           
            )} />          
        )
    }
}