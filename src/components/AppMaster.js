/**
 * Created by zll on 2017/6/7.
 */
import React,{Component} from 'react';
export default class AppMaster extends Component{
    render(){
        return (
            <div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}