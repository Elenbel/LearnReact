/**
 * @Author liming
 * @Date 2022/11/4 23:38
 **/

import React, { PureComponent, memo } from 'react';

// Header
const MemoHeader = memo(function Header() {
    console.log("Header被调用");
    return <h2>我是Header组件</h2>
})


// Main
class Banner extends PureComponent {
    render() {
        console.log("Banner render函数被调用");
        return <h3>我是Banner组件</h3>
    }
}

const MemoProductList = memo(function ProductList() {
    console.log("ProductList被调用");
    return (
        <ul>
            <li>商品列表1</li>
            <li>商品列表2</li>
            <li>商品列表3</li>
            <li>商品列表4</li>
            <li>商品列表5</li>
        </ul>
    )
})

class Main extends PureComponent {
    render() {
        console.log("Main render函数被调用");
        return (
            <div>
                <Banner/>
                <MemoProductList/>
            </div>
        )
    }
}

// Footer
const MemoFooter = memo(function Footer() {
    console.log("MemoFooter--Footer被调用");
    return <h2>我是Footer组件</h2>
})


export default class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }
    }

    render() {
        console.log("App render函数被调用");
        return (
            <div>
                <h2>当前计数: {this.state.counter}</h2>
                <button onClick={e => this.increment()}>+1</button>
                <MemoHeader/>
                <Main/>
                <MemoFooter/>
            </div>
        )
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        })
    }
}
