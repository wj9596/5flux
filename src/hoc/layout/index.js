import React,{Fragment}from "react";
import TabBar from "@common/tabBar"
export default (WrapperComponent)=>{
    return class extends WrapperComponent{
        render(){
            return (
                <Fragment>
                   {super.render()}
                    <TabBar/>
                </Fragment>
            )
        }
    }
}