/**
 * Created by admin on 2017/7/31.
 */
import React, {Component} from 'react';
import {Header,template} from '../common/mixin';
import {Tool} from '../../Config/Tool';

class ShowCase extends Component {
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    static childContextTypes = {
        deleteItem: React.PropTypes.any,
        getData: React.PropTypes.any,
    }
    constructor(props,context) {
        super(props,context);
        this.state = {
            data:[],  //分销商列表数组
            oldName:'waited', //上次选中的类别，默认为waited
            choosedClass:{waited:'team_choosed'}, //当前选中的类别，以此设置class名
            currentPage:1, //当前所在页数
            totalPage:1  ,//总共的页数
            limit:20 ,  //每页加载的数量
            shouldUpdata:true,  //当获取数据后才能进行加载
        }
        this.chooseStatus = (event) => { //筛选类型
            let name = null;
            if (event.target.children[0]) {
                name = event.target.children[0].getAttribute('name')
            }else{
                name = event.target.getAttribute('name')
            }
            if (name !== this.state.oldName) {
                this.state.oldName = name;
                this.state.choosedClass = {};
                this.state.choosedClass[name] = 'team_choosed';
                this.forceUpdate();
                let type = '';
                if (name == 'failed') {
                    type = 'FAILED';
                }else if(name == 'waited'){
                    type = 'UNAUDIT';
                }else if(name == 'passed'){
                    type = 'PASS';
                }
                this.props.getData('/shopro/data/record',{page:1,type:type}, (res) => {
                    if (res.http_code == 200) {
                        this.setState({
                            data:res.data.data,
                            currentPage:1,
                            totalPage:res.data.totalPage
                        })
                    }else{
                        Tool.alert(res.data.msg)
                    }
                }, 'changeType')
            }
        }
        this.deleteInform = (index) => { //删除信息
            this.state.data.splice(index,1)
        }

        this.getNextPage = (currentPage) => { //加载下一页
            if (!this.state.shouldUpdata) {
                return
            }
            this.state.shouldUpdata = false;
            let type = '';
            if (this.state.oldName == 'failed') {
                type = 'FAILED';
            }else if(this.state.oldName == 'waited'){
                type = 'UNAUDIT';
            }else if(this.state.oldName == 'passed'){
                type = 'PASS';
            }
            this.props.getData('/sales/sales/salesList',{page:currentPage,type:type}, (res) => {
                this.state.currentPage = currentPage;
                this.state.shouldUpdata = true;
                if (res.http_code == 200) {
                    this.state.data = this.state.data.concat(res.data.data)
                    this.setState(this.state.data)
                }else{
                    Tool.alert(res.msg)
                }
            }, 'nextPage')
        }
    }
    getChildContext () {
        return {
            deleteItem: this.props.deleteItem,
            getData:this.props.getData
        }
    }
    componentWillReceiveProps(nextProps){
        let {data} = nextProps.state;
        if (data) {
            this.state.data = data||[];
        }

    }
    render() {
        console.log(this.state.data)
        return (
            <div>
                <h2>产品列表</h2>
                <ul>
                    {
                        this.state.data.map((item ,index)=>{
                            return <li key={index}>{item.name + "-" + item.age}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}


export default template({
    id: 'homepage',  //应用关联使用的redux
    component: ShowCase, //接收数据的组件入口
    url: '/users',
});

